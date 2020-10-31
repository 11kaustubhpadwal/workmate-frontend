import React, { useEffect, useState } from "react";
import {
  Grid,
  Row,
  Col,
  Input,
  Icon,
  IconButton,
  Tag,
  Pagination,
  Loader,
} from "rsuite";
import JobListing from "./JobListing";
import NotFound from "./NotFound";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getJobs } from "../../actions/jobActions";

const Home = ({ jobs, getJobs }) => {
  useEffect(() => {
    getJobs();
    //eslint-disable-next-line
  }, []);

  // ********************* Search query logic *********************

  const [searchQuery, setSearchQuery] = useState("");
  const [query, setQuery] = useState("");

  // keep track of user input
  const handleSearchBar = (value, e) => {
    setSearchQuery(value);
  };

  // close tag and clear search
  const closeTag = () => {
    setQuery("");
    setSearchQuery("");
  };

  // search for jobs using the user's input
  const handleSearch = () => {
    setQuery(searchQuery);
  };

  // ********************* Pagination and Display Grid logic *********************

  const [activePage, setActivePage] = useState(1);
  const [activePageItems, setActivePageItems] = useState([]);

  // total number of pages
  let numberOfPages = 0;
  if (typeof jobs.jobs.jobs !== "undefined") {
    numberOfPages = Math.ceil(jobs.jobs.jobs.length / 6);
  }

  // final index of array to be sliced
  const setEndingIndex = (currentPage) => {
    let index = currentPage * 6;
    return index;
  };

  // starting index of array to be sliced
  const setStartingIndex = (currentPage) => {
    let index = currentPage * 6 - 6;
    return index;
  };

  // check and split the jobs array
  useEffect(() => {
    if (typeof jobs.jobs.jobs !== "undefined") {
      setActivePageItems(
        jobs.jobs.jobs.slice(
          setStartingIndex(activePage),
          setEndingIndex(activePage)
        )
      );
    }
    // eslint-disable-next-line
  }, [typeof jobs.jobs.jobs]);

  // change page
  const handlePageSelection = (e) => {
    setActivePage(e);

    setActivePageItems(
      jobs.jobs.jobs.slice(setStartingIndex(e), setEndingIndex(e))
    );
  };

  return (
    <Grid style={{ padding: "25px 20px" }}>
      <Row>
        <Col xs={24} sm={24} md={24}>
          <h4 style={{ padding: "0 0 50px 0", textAlign: "center" }}>
            Search from over 1500 active jobs.
          </h4>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={23}>
          <Input
            style={{ width: "100%" }}
            placeholder="e.g. java developer"
            onChange={handleSearchBar}
            value={searchQuery}
          />
        </Col>
        <Col xs={24} sm={24} md={1} style={{ textAlign: "right" }}>
          <IconButton
            icon={<Icon icon="search" />}
            color="blue"
            onClick={handleSearch}
          />
        </Col>
      </Row>
      {jobs.loading && (
        <Row style={{ margin: "100px" }}>
          <Col xs={24} sm={24} md={24}>
            <Loader
              size="md"
              content="Getting the latest jobs ... Please wait ... "
              speed="slow"
              center
            />
          </Col>
        </Row>
      )}
      {!jobs.loading && typeof jobs.jobs.jobs !== "undefined" && (
        <Row>
          <Col xs={24} sm={24} md={24}>
            <p style={{ padding: "30px 0 0 0" }}>
              Total jobs found :
              {!jobs.loading && typeof jobs.jobs.jobs !== "undefined" && (
                <Tag style={{ margin: "0 5px" }} color="green">
                  {jobs.jobs.jobs.length}
                </Tag>
              )}
            </p>
          </Col>
        </Row>
      )}
      {!jobs.loading && query === "" && (
        <Row>
          <Col xs={24} sm={24} md={24}>
            <Tag style={{ margin: "20px 0" }} color="violet">
              All results
            </Tag>
          </Col>
        </Row>
      )}
      {!jobs.loading && query !== "" && (
        <Row style={{ marginTop: "25px" }}>
          <Col xs={24} sm={24} md={24}>
            <p>
              Showing results for :{" "}
              <Tag
                closable={true}
                style={{ margin: "0 5px" }}
                color="red"
                onClose={closeTag}
              >
                {query}
              </Tag>
            </p>
          </Col>
        </Row>
      )}
      {!jobs.loading && jobs.jobs === undefined && (
        <Row style={{ margin: "50px 0" }} gutter={28}>
          <Col xs={24} sm={24} md={24}>
            <NotFound />
          </Col>
        </Row>
      )}
      {!jobs.loading && activePageItems.length > 0 && (
        <Row style={{ margin: "50px 0" }} gutter={28}>
          <Col xs={24} sm={24} md={12}>
            {activePageItems[0] !== undefined && (
              <JobListing job={activePageItems[0]} />
            )}
          </Col>
          <Col xs={24} sm={24} md={12}>
            {activePageItems[1] !== undefined && (
              <JobListing job={activePageItems[1]} />
            )}
          </Col>
        </Row>
      )}
      {!jobs.loading && activePageItems.length > 0 && (
        <Row style={{ margin: "50px 0" }} gutter={28}>
          <Col xs={24} sm={24} md={12}>
            {activePageItems[2] !== undefined && (
              <JobListing job={activePageItems[2]} />
            )}
          </Col>
          <Col xs={24} sm={24} md={12}>
            {activePageItems[3] !== undefined && (
              <JobListing job={activePageItems[3]} />
            )}
          </Col>
        </Row>
      )}
      {!jobs.loading && activePageItems.length > 0 && (
        <Row style={{ margin: "50px 0" }} gutter={28}>
          <Col xs={24} sm={24} md={12}>
            {activePageItems[4] !== undefined && (
              <JobListing job={activePageItems[4]} />
            )}
          </Col>
          <Col xs={24} sm={24} md={12}>
            {activePageItems[5] !== undefined && (
              <JobListing job={activePageItems[5]} />
            )}
          </Col>
        </Row>
      )}
      <Row style={{ margin: "50px 0 0 0", textAlign: "center" }}>
        <Col xs={24} sm={24} md={24}>
          <Pagination
            ellipsis={true}
            boundaryLinks={true}
            prev={true}
            next={true}
            first={true}
            last={true}
            pages={numberOfPages}
            maxButtons={5}
            activePage={activePage}
            onSelect={handlePageSelection}
          />
        </Col>
      </Row>
    </Grid>
  );
};

Home.propTypes = {
  jobs: PropTypes.object.isRequired,
  getJobs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  jobs: state.jobs,
});

export default connect(mapStateToProps, { getJobs })(Home);
