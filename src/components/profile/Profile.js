import React from "react";
import { Grid, Row, Col } from "rsuite";

const Profile = () => {
  return (
    <Grid style={{ padding: "25px 20px" }}>
      <Row style={{ margin: "0 0 25px 0" }}>
        <Col xs={24} sm={24} md={24}>
          <h3>My profile</h3>
        </Col>
      </Row>
      <Row style={{ margin: "0 0 25px 0" }}>
        <Col xs={24} sm={24} md={24}>
          <h5>Email</h5>
        </Col>
      </Row>
      <Row style={{ margin: "50px 0 25px 0" }}>
        <Col xs={24} sm={24} md={24}>
          <h3>My saved jobs</h3>
        </Col>
      </Row>
    </Grid>
  );
};

export default Profile;
