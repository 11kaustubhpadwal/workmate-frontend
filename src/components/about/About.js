import React from "react";
import { Grid, Row, Col } from "rsuite";
import "../../global.css";

const About = () => {
  return (
    <Grid style={{ padding: "25px 20px" }}>
      <Row style={{ margin: "0 0 25px 0" }}>
        <Col xs={24} sm={24} md={24}>
          <h3>About</h3>
        </Col>
      </Row>
      <Row style={{ margin: "0 0 25px 0" }}>
        <Col xs={24} sm={24} md={24}>
          <p>
            WorkMate is an open source web application made solely for finding
            jobs.
          </p>
          <p>It uses the open source Remotive API to fetch all the jobs.</p>
          <p>Good luck finding your next job!</p>
        </Col>
      </Row>
    </Grid>
  );
};

export default About;
