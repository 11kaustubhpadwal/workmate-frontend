import React, { useEffect } from "react";
import {
  Grid,
  Row,
  Col,
  Input,
  Icon,
  IconButton,
  Tag,
  Pagination,
} from "rsuite";
import JobListing from "./JobListing";
import NotFound from "./NotFound";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getJobs } from "../../actions/jobActions";

const Home = ({ jobs, getJobs }) => {
  useEffect(() => {
    getJobs();
  }, []);

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
          <Input style={{ width: "100%" }} placeholder="e.g. java developer" />
        </Col>
        <Col xs={24} sm={24} md={1} style={{ textAlign: "right" }}>
          <IconButton icon={<Icon icon="search" />} color="blue" />
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24}>
          <p style={{ padding: "30px 0 0 0" }}>
            Total jobs found :{" "}
            <Tag style={{ margin: "0 5px" }} color="green">
              24
            </Tag>
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24}>
          <Tag style={{ margin: "20px 0" }} color="violet">
            All results
          </Tag>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24}>
          <p>
            Showing results for :{" "}
            <Tag closable style={{ margin: "0 5px" }} color="red">
              java developer
            </Tag>
          </p>
        </Col>
      </Row>
      <Row style={{ margin: "50px 0" }} gutter={28}>
        <Col xs={24} sm={24} md={24}>
          <NotFound />
        </Col>
      </Row>
      <Row style={{ margin: "50px 0" }} gutter={28}>
        <Col xs={24} sm={24} md={12}>
          <JobListing />
        </Col>
        <Col xs={24} sm={24} md={12}>
          <JobListing />
        </Col>
      </Row>
      <Row style={{ margin: "50px 0" }} gutter={28}>
        <Col xs={24} sm={24} md={12}>
          <JobListing />
        </Col>
        <Col xs={24} sm={24} md={12}>
          <JobListing />
        </Col>
      </Row>
      <Row style={{ margin: "50px 0" }} gutter={28}>
        <Col xs={24} sm={24} md={12}>
          <JobListing />
        </Col>
        <Col xs={24} sm={24} md={12}>
          <JobListing />
        </Col>
      </Row>
      <Row style={{ margin: "50px 0 0 0", textAlign: "center" }}>
        <Col xs={24} sm={24} md={24}>
          <Pagination
            ellipsis={true}
            boundaryLinks={true}
            prev={true}
            next={true}
            first={true}
            last={true}
            pages={30}
            maxButtons={5}
            activePage={1}
            onSelect={() => {}}
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
