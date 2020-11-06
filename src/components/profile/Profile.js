import React, { useEffect } from "react";
import {
  Grid,
  Row,
  Col,
  Message,
  Loader,
  List,
  IconButton,
  Icon,
} from "rsuite";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { registerUser } from "../../actions/userActions";

const Profile = ({ currentUser, user, registerUser }) => {
  useEffect(() => {
    if (currentUser !== null) {
      registerUser(currentUser.email);
    }
    // eslint-disable-next-line
  }, [currentUser]);

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
                  <Col xs={24} sm={24} md={10}>
                    <Icon
                      icon="tags"
                      style={{
                        margin: "0 7px 0 0",
                      }}
                    />
                    Job title
                  </Col>
                  <Col xs={24} sm={24} md={4}>
                    <Icon
                      icon="building"
                      style={{
                        margin: "0 7px 0 0",
                      }}
                    />
                    Company name
                  </Col>
                  <Col xs={24} sm={24} md={3}>
                    <Icon
                      icon="map-marker"
                      style={{
                        margin: "0 7px 0 0",
                      }}
                    />
                    Location
                  </Col>
                  <Col xs={24} sm={24} md={3}>
                    <Icon
                      icon="info"
                      style={{
                        margin: "0 7px 0 0",
                      }}
                    />
                    View
                  </Col>
                  <Col xs={24} sm={24} md={3}>
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
                    <Col xs={24} sm={24} md={10}>
                      {item.title}
                    </Col>
                    <Col xs={24} sm={24} md={4}>
                      {item.company_name}
                    </Col>
                    <Col xs={24} sm={24} md={3}>
                      {item.candidate_required_location}
                    </Col>
                    <Col xs={24} sm={24} md={3}>
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
                        // onClick={showJobInfo}
                      >
                        View
                      </IconButton>
                    </Col>
                    <Col xs={24} sm={24} md={3}>
                      <IconButton
                        icon={<Icon icon="trash" />}
                        color="red"
                        // onClick={handleSaveJob}
                        // loading={selectedJob === job.id ? user.saveJobLoading : false}
                      >
                        Remove
                      </IconButton>
                    </Col>
                  </Row>
                </Grid>
              </List.Item>
            ))}
          </List>
        )}
      </Grid>
    );
  } else {
    window.location.replace("http://localhost:3000");
  }
};

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  registerUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { registerUser })(Profile);
