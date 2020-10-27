import React from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col, Button } from "rsuite";
import logo from "../../images/work-from-home.png";

const Navbar = () => {
  return (
    <Grid style={{ padding: "15px 20px 25px 20px" }}>
      <Row>
        <Col xs={24} sm={24} md={2}>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <img src={logo} alt="Logo" style={{ width: "5rem" }}></img>
          </Link>
        </Col>
        <Col xs={24} sm={24} md={18}>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <h3 style={{ padding: "19px 0 19px 10px" }}>WorkMate</h3>
          </Link>
        </Col>
        <Col xs={24} sm={24} md={2} style={{ textAlign: "right" }}>
          <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
            <h5 style={{ padding: "22px 0 22px 0" }}>
              <Button color="violet">About</Button>
            </h5>
          </Link>
        </Col>
        <Col xs={24} sm={24} md={2} style={{ textAlign: "right" }}>
          <Link to="#" style={{ textDecoration: "none", color: "black" }}>
            <h5 style={{ padding: "22px 0 22px 0" }}>
              <Button color="violet">Login</Button>
            </h5>
          </Link>
        </Col>
      </Row>
    </Grid>
  );
};

export default Navbar;
