import React from "react";
import {
  Modal,
  Input,
  InputGroup,
  Icon,
  Button,
  Divider,
  IconButton,
} from "rsuite";

const LoginForm = ({ show, close }) => {
  return (
    <Modal
      show={show}
      onHide={close}
      overflow={true}
      className="smaller-devices-modal"
    >
      <Modal.Header>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{ margin: "0 0 25px 10px" }}>
          Create a new account or login using an existing one.
        </p>
        <InputGroup inside style={{ margin: "10px", width: "96%" }}>
          <InputGroup.Addon>
            <Icon icon="avatar" />
          </InputGroup.Addon>
          <Input placeholder="Email" />
        </InputGroup>
        <InputGroup inside style={{ margin: "10px", width: "96%" }}>
          <InputGroup.Addon>
            <Icon icon="lock" />
          </InputGroup.Addon>
          <Input placeholder="Password" />
        </InputGroup>
        <div style={{ textAlign: "center" }}>
          <Button
            style={{
              margin: "10px",
              backgroundColor: "black",
              color: "white",
            }}
          >
            Signup
          </Button>
          OR
          <Button
            style={{
              margin: "10px",
              backgroundColor: "black",
              color: "white",
            }}
          >
            Login
          </Button>
        </div>
        <Divider />
        <div style={{ textAlign: "center" }}>
          <IconButton
            icon={
              <Icon
                icon="google"
                style={{ backgroundColor: "#EA4335", color: "white" }}
              />
            }
            style={{
              margin: "10px ",
              backgroundColor: "#EA4335",
              color: "white",
            }}
          >
            Login using Google
          </IconButton>
          <IconButton
            icon={
              <Icon
                icon="facebook"
                style={{ backgroundColor: "#3b5998", color: "white" }}
              />
            }
            style={{
              margin: "10px",
              backgroundColor: "#3b5998",
              color: "white",
            }}
          >
            Login using Facebook
          </IconButton>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LoginForm;
