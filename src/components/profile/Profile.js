import React, { useEffect } from "react";
import { Grid, Row, Col, Message, Loader } from "rsuite";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { registerUser } from "../../actions/userActions";

const Profile = ({ currentUser, savedJobs, registerUser, user }) => {
  useEffect(() => {
    registerUser(currentUser.email);
    // eslint-disable-next-line
  }, []);

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
        {user.registerUserLoading ||
          (user.getSavedJobsLoading && (
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
          ))}
        {savedJobs.length === 0 && (
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
