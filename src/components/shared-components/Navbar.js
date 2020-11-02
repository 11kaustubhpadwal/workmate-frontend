import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col, Button, Divider } from "rsuite";
import logo from "../../images/work-from-home.png";
import menu from "../../images/list.png";

const firebase = require("firebase");
const firebaseui = require("firebaseui");

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    if (open) {
      setOpen(false);
    } else if (!open) {
      setOpen(true);
    } else return;
  };

  const handleLogin = () => {
    const uiConfig = {
      signInSuccessUrl: "/",
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      ],
    };

    if (firebaseui.auth.AuthUI.getInstance()) {
      const ui = firebaseui.auth.AuthUI.getInstance();
      ui.start("#firebaseui-auth-container", uiConfig);
    } else {
      const ui = new firebaseui.auth.AuthUI(firebase.auth());
      ui.start("#firebaseui-auth-container", uiConfig);
    }
  };

  return (
    <Grid style={{ padding: "15px 20px 25px 20px" }}>
      <Row>
        <Col xs={21} sm={21} md={2}>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <img src={logo} alt="Logo" style={{ width: "5rem" }}></img>
          </Link>
        </Col>
        <Col
          xs={3}
          sm={3}
          md={3}
          style={{ textAlign: "right", padding: "10px 5px 0 0" }}
          mdHidden
          lgHidden
        >
          <img
            src={menu}
            alt="Menu"
            style={{ width: "2.5rem" }}
            onClick={handleMenu}
          ></img>
        </Col>
        <Col xs={24} sm={24} md={18}>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <h3 style={{ padding: "19px 0 19px 10px" }}>WorkMate</h3>
          </Link>
        </Col>
        {open && (
          <Col xs={24} sm={24} md={18}>
            <Divider />
          </Col>
        )}
        {open && (
          <Col
            xs={12}
            sm={12}
            md={2}
            mdHidden
            lgHidden
            style={{ textAlign: "center" }}
          >
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h5 style={{ padding: "22px 0 22px 0" }}>
                <Button color="violet" onClick={handleMenu}>
                  About
                </Button>
              </h5>
            </Link>
          </Col>
        )}
        {open && (
          <Col
            xs={12}
            sm={12}
            md={2}
            mdHidden
            lgHidden
            style={{ textAlign: "center" }}
          >
            <Link to="#" style={{ textDecoration: "none", color: "black" }}>
              <h5 style={{ padding: "22px 0 22px 0" }}>
                <Button color="violet" onClick={handleMenu}>
                  Login
                </Button>
              </h5>
            </Link>
          </Col>
        )}
        {open && (
          <Col xs={24} sm={24} md={18}>
            <Divider />
          </Col>
        )}
        <Col
          xs={24}
          sm={24}
          md={2}
          style={{ textAlign: "right" }}
          smHidden
          xsHidden
        >
          <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
            <h5 style={{ padding: "22px 0 22px 0" }}>
              <Button color="violet">About</Button>
            </h5>
          </Link>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={2}
          style={{ textAlign: "right" }}
          smHidden
          xsHidden
        >
          <Link to="#" style={{ textDecoration: "none", color: "black" }}>
            <h5 style={{ padding: "22px 0 22px 0" }}>
              <Button color="violet" onClick={handleLogin}>
                Login
              </Button>
            </h5>
          </Link>
        </Col>
      </Row>
    </Grid>
  );
};

export default Navbar;
