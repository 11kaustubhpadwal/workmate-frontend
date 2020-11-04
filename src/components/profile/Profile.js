import React from "react";
import { Grid, Row, Col } from "rsuite";

const Profile = ({ currentUser }) => {
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
      </Grid>
    );
  } else {
    window.location.replace("http://localhost:3000");
  }
};

export default Profile;
