import React, { useEffect } from "react";
import { Modal } from "rsuite";
import "../../../node_modules/firebaseui/dist/firebaseui.css";

const firebase = require("firebase");
const firebaseui = require("firebaseui");

const LoginForm = ({ show, close }) => {
  useEffect(() => {
    const uiConfig = {
      signInSuccessUrl: "/",
      signInFlow: "popup",
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
  }, []);

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
        <div id="firebaseui-auth-container"></div>
      </Modal.Body>
    </Modal>
  );
};

export default LoginForm;
