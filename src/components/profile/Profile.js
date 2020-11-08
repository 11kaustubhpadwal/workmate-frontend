import React, { useEffect, useState } from "react";
import {
  Grid,
  Row,
  Col,
  Message,
  Loader,
  List,
  IconButton,
  Icon,
  Alert,
} from "rsuite";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { registerUser, unsaveJob } from "../../actions/userActions";
import JobInfo from "../home/JobInfo";

const Profile = ({ currentUser, user, registerUser, unsaveJob }) => {
  useEffect(() => {
    if (currentUser !== null) {
      registerUser(currentUser.email);
    }
    // eslint-disable-next-line
  }, [currentUser]);

  const [show, setShow] = useState(false);

  const [selectedJob, setSelectedJob] = useState(0);

  const showJobInfo = (item) => {
    setSelectedJob(item.id);
    setShow(true);
  };

  const closeJobInfo = () => {
    setShow(false);
  };

  const handleUnsaveJob = (item) => {
    if (currentUser === null) {
      Alert.error("Please login to save the job.", 5000);
    } else {
      const errorMsg = () => {
        Alert.error("Failed to remove the job. Please try again.", 5000);
        setSelectedJob(0);
      };

      const successMsg = () => {
        Alert.success("Job has been removed successfully.", 5000);
        setSelectedJob(0);
      };

      setSelectedJob(item.id);

      let data = {
        email: currentUser.email,
        jobToUnsave: item,
      };
      unsaveJob(data, errorMsg, successMsg);
    }
  };

  if (currentUser !== null) {
    return (
      <Grid style={{ padding: "25px 20px" }}>
        <Row style={{ margin: "0 0 25px 0" }}>
          <Col xs={24} sm={24} md={24}>
            <h3>My profile</h3>
          </Col>
        </Row>
        <Row style={{ margin: "0 0 25px 0" }}>
          <Col xs={24} sm={24} md={24}>
            <h5>Email : {currentUser.email}</h5>
          </Col>
        </Row>
        <Row style={{ margin: "50px 0 25px 0" }}>
          <Col xs={24} sm={24} md={24}>
            <h3>My saved jobs</h3>
          </Col>
        </Row>
        {user.registerUserLoading && (
          <Row style={{ margin: "100px" }}>
            <Col xs={24} sm={24} md={24}>
              <Loader
                size="md"
                content="Getting your saved jobs ... Please wait ... "
                speed="slow"
                center
                className="large-screen-loader"
              />
              <Loader
                size="md"
                content="Getting your saved jobs ... Please wait ... "
                speed="slow"
                center
                className="small-screen-loader"
                vertical
              />
            </Col>
          </Row>
        )}
        {user.success !== null && user.success.length === 0 && (
          <Row style={{ margin: "25px 0 25px 0" }}>
            <Col xs={24} sm={24} md={24}>
              <Message
                showIcon
                type="info"
                title="No saved jobs found."
                description="The jobs you save while searching will appear here."
              />
            </Col>
          </Row>
        )}
        {user.success !== null && user.success.length > 0 && (
          <List hover bordered>
            <List.Item>
              <Grid>
                <Row>
                  <Col xs={24} sm={24} md={8} className="smaller-devices-list">
                    <Icon
                      icon="tags"
                      style={{
                        margin: "0 7px 0 0",
                      }}
                    />
                    Job title
                  </Col>
                  <Col xs={24} sm={24} md={4} className="smaller-devices-list">
                    <Icon
                      icon="building"
                      style={{
                        margin: "0 7px 0 0",
                      }}
                    />
                    Company name
                  </Col>
                  <Col xs={24} sm={24} md={4} className="smaller-devices-list">
                    <Icon
                      icon="map-marker"
                      style={{
                        margin: "0 7px 0 0",
                      }}
                    />
                    Location
                  </Col>
                  <Col xs={24} sm={24} md={3} className="smaller-devices-list">
                    <Icon
                      icon="info"
                      style={{
                        margin: "0 7px 0 0",
                      }}
                    />
                    View
                  </Col>
                  <Col xs={24} sm={24} md={5} className="smaller-devices-list">
                    <Icon
                      icon="trash"
                      style={{
                        margin: "0 7px 0 0",
                      }}
                    />
                    Remove
                  </Col>
                </Row>
              </Grid>
            </List.Item>
          </List>
        )}
        {user.success !== null && user.success.length > 0 && (
          <List hover bordered>
            {user.success.map((item, index) => (
              <List.Item key={index} index={index}>
                <Grid>
                  <Row>
                    <Col
                      xs={24}
                      sm={24}
                      md={8}
                      className="smaller-devices-list"
                    >
                      {item.title}
                    </Col>
                    <Col
                      xs={24}
                      sm={24}
                      md={4}
                      className="smaller-devices-list"
                    >
                      {item.company_name}
                    </Col>
                    <Col
                      xs={24}
                      sm={24}
                      md={4}
                      className="smaller-devices-list"
                    >
                      {item.candidate_required_location}
                    </Col>
                    <Col
                      xs={24}
                      sm={24}
                      md={3}
                      className="smaller-devices-list"
                    >
                      <IconButton
                        icon={
                          <Icon
                            icon="info"
                            style={{
                              backgroundColor: "#1c2ca6",
                              color: "white",
                            }}
                          />
                        }
                        style={{
                          backgroundColor: "#2e3fb0",
                          color: "white",
                        }}
                        onClick={() => {
                          showJobInfo(item);
                        }}
                      >
                        View
                      </IconButton>
                    </Col>
                    <Col
                      xs={24}
                      sm={24}
                      md={5}
                      className="smaller-devices-list"
                    >
                      <IconButton
                        icon={<Icon icon="trash" />}
                        color="red"
                        onClick={() => {
                          handleUnsaveJob(item);
                        }}
                        loading={
                          selectedJob === item.id
                            ? user.unsaveJobLoading
                            : false
                        }
                      >
                        Remove
                      </IconButton>
                    </Col>
                  </Row>
                </Grid>
                {selectedJob === item.id && (
                  <JobInfo
                    show={show}
                    close={closeJobInfo}
                    job={item}
                    saveJob={null}
                    currentUser={currentUser}
                  />
                )}
              </List.Item>
            ))}
          </List>
        )}
      </Grid>
    );
  } else {
    window.location.replace("https://workmate.surge.sh");
  }
};

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  registerUser: PropTypes.func.isRequired,
  unsaveJob: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { registerUser, unsaveJob })(Profile);
