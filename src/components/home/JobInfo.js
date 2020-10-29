import React from "react";
import { Modal, Button, IconButton, Icon } from "rsuite";

const JobInfo = ({ show, close }) => {
  return (
    <Modal show={show} onHide={close} overflow={true}>
      <Modal.Header>
        <Modal.Title>Job title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <Icon icon="calendar-o" style={{ margin: "0 10px 0 0" }} />
          Publication date
        </p>
        <p>
          <Icon icon="briefcase" style={{ margin: "0 10px 0 0" }} />
          Job type
        </p>
        <p>
          <Icon icon="building" style={{ margin: "0 10px 0 0" }} />
          Company name
        </p>
        <p>
          <Icon icon="usd" style={{ margin: "0 10px 0 0" }} />
          Salary
        </p>
        <p>
          <Icon icon="map-marker" style={{ margin: "0 10px 0 0" }} />
          Candidate required location
        </p>
        <p>
          <Icon icon="info" style={{ margin: "15px 10px 0 0" }} />
          Description
        </p>
        <div style={{ margin: "10px 0 0 auto" }}></div>
      </Modal.Body>
      <Modal.Footer>
        <IconButton
          icon={<Icon icon="bookmark" />}
          style={{ margin: "0 0 0 20px" }}
          color="violet"
          onClick={close}
        >
          Save
        </IconButton>
        <Button onClick={close} appearance="subtle" style={{ color: "black" }}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default JobInfo;
