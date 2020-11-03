import React from "react";
import { Modal } from "rsuite";
import "../../../node_modules/firebaseui/dist/firebaseui.css";

const firebase = require("firebase");
const firebaseui = require("firebaseui");

const LoginForm = ({ show, close }) => {
  if (show) {
    setTimeout(() => {
      const uiConfig = {
        signInSuccessUrl: "/",
        signInFlow: "popup",
        signInOptions: [
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
    }, 1);
  }

  return (
    <Modal
      show={show}
      onHide={close}
      overflow={true}
      className="smaller-devices-modal"
      size="xs"
    >
      <Modal.Header>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{ textAlign: "center", margin: "0 0 30px 0" }}>
          Login using any one of the following methods -
        </p>
        <div id="firebaseui-auth-container"></div>
      </Modal.Body>
    </Modal>
  );
};

export default LoginForm;
