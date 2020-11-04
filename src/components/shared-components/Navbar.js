import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col, Button, Divider } from "rsuite";
import logo from "../../images/work-from-home.png";
import menu from "../../images/list.png";
import LoginForm from "../home/LoginForm";

const firebase = require("firebase");

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    if (open) {
      setOpen(false);
    } else if (!open) {
      setOpen(true);
    } else return;
  };

  const [show, setShow] = useState(false);

  const showLoginForm = () => {
    setShow(true);
  };

  const closeLoginForm = () => {
    setShow(false);
  };

  const handleLogin = () => {
    showLoginForm();
  };

  // check whether the user is logged in or not
  const [currentUser, setCurrentUser] = useState(null);

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(null);
    }
  });

  const handleLogout = () => {
    if (open) {
      setOpen(false);
    }

    firebase
      .auth()
      .signOut()
      .then(
        function () {
          setCurrentUser(null);
        },
        function (error) {
          console.log(error);
        }
      );
  };

  return (
    <Grid style={{ padding: "15px 20px 25px 20px" }}>
      <LoginForm show={show} close={closeLoginForm} />
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
        {currentUser === null && (
          <Col xs={24} sm={24} md={18}>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <h3 style={{ padding: "19px 0 19px 10px" }}>WorkMate</h3>
            </Link>
          </Col>
        )}
        {currentUser !== null && (
          <Col xs={24} sm={24} md={16}>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <h3 style={{ padding: "19px 0 19px 10px" }}>WorkMate</h3>
            </Link>
          </Col>
        )}
        {open && (
          <Col xs={24} sm={24} md={18}>
            <Divider />
          </Col>
        )}
        {open && currentUser === null && (
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
        {open && currentUser !== null && (
          <Col
            xs={8}
            sm={8}
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
        {open && currentUser !== null && (
          <Col
            xs={8}
            sm={8}
            md={2}
            mdHidden
            lgHidden
            style={{ textAlign: "center" }}
          >
            <Link
              to="/profile"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h5 style={{ padding: "22px 0 22px 0" }}>
                <Button color="violet" onClick={handleMenu}>
                  Profile
                </Button>
              </h5>
            </Link>
          </Col>
        )}
        {open && currentUser !== null && (
          <Col
            xs={8}
            sm={8}
            md={2}
            mdHidden
            lgHidden
            style={{ textAlign: "center" }}
          >
            <Link to="#" style={{ textDecoration: "none", color: "black" }}>
              <h5 style={{ padding: "22px 0 22px 0" }}>
                <Button color="violet" onClick={handleLogout}>
                  Logout
                </Button>
              </h5>
            </Link>
          </Col>
        )}
        {open && currentUser === null && (
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
        {currentUser !== null && (
          <Col
            xs={24}
            sm={24}
            md={2}
            style={{ textAlign: "right" }}
            smHidden
            xsHidden
          >
            <Link
              to="/profile"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h5 style={{ padding: "22px 0 22px 0" }}>
                <Button color="violet">Profile</Button>
              </h5>
            </Link>
          </Col>
        )}
        {currentUser !== null && (
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
                <Button color="violet" onClick={handleLogout}>
                  Logout
                </Button>
              </h5>
            </Link>
          </Col>
        )}
        {currentUser === null && (
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
        )}
      </Row>
    </Grid>
  );
};

export default Navbar;
