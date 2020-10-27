import React from "react";
import { Grid, Row, Col } from "rsuite";

const About = () => {
  return (
    <Grid style={{ padding: "25px 20px" }}>
      <Row>
        <Col xs={24} sm={24} md={24}>
          <p style={{ textAlign: "center" }}>About page.</p>
        </Col>
      </Row>
    </Grid>
  );
};

export default About;
