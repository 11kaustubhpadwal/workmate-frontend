import React from "react";
import { Modal, Button, IconButton, Icon } from "rsuite";
import moment from "moment";

const JobInfo = ({ show, close, job }) => {
  let date = moment(
    job.publication_date.toString().slice(0, 10),
    "YYYYMMDD"
  ).fromNow();

  return (
    <Modal show={show} onHide={close} overflow={true}>
      <Modal.Header>
        <Modal.Title>{job.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <Icon icon="calendar-o" style={{ margin: "0 10px 0 0" }} />
          {date}
        </p>
        <p>
          <Icon icon="briefcase" style={{ margin: "0 10px 0 0" }} />
          {job.job_type === "full_time" && "Full-time"}
          {job.job_type === "contract" && "Contract"}
          {job.job_type === "part_time" && "Part-time"}
          {job.job_type === "other" && "Other"}
          {job.job_type === "internship" && "Internship"}
          {job.job_type === "freelance" && "Freelance"}
          {job.job_type === "" && "N/A"}
        </p>
        <p>
          <Icon icon="building" style={{ margin: "0 10px 0 0" }} />
          {job.company_name}
        </p>
        <p>
          <Icon icon="usd" style={{ margin: "0 10px 0 0" }} />
          {job.salary === "" ? "N/A" : job.salary}
        </p>
        <p>
          <Icon icon="map-marker" style={{ margin: "0 10px 0 0" }} />
          {job.candidate_required_location}
        </p>
        <div
          style={{ margin: "20px 0 0 auto" }}
          dangerouslySetInnerHTML={{ __html: job.description }}
        ></div>
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
