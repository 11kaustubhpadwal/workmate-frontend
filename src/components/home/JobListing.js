import React, { useState } from "react";
import { Icon, IconButton, Panel } from "rsuite";
import JobInfo from "./JobInfo";

const JobListing = ({ job }) => {
  const [show, setShow] = useState(false);

  const showJobInfo = () => {
    setShow(true);
  };

  const closeJobInfo = () => {
    setShow(false);
  };

  return (
    <Panel header={job.title} shaded bordered>
      <p>
        <Icon icon="briefcase" style={{ margin: "0 10px 0 0" }} />
        {job.job_type === "full_time" && "Full-time"}
        {job.job_type === "contract" && "Contract"}
        {job.job_type === "part_time" && "Part-time"}
        {job.job_type === "other" && "Other"}
        {job.job_type === "internship" && "Internship"}
        {job.job_type === "freelance" && "Freelance"}
        {job.job_type === "part_time" && (
          <span style={{ margin: "0 0 0 44.7%" }}>
            <IconButton
              icon={
                <Icon
                  icon="info"
                  style={{ backgroundColor: "#1c2ca6", color: "white" }}
                />
              }
              style={{ backgroundColor: "#2e3fb0", color: "white" }}
              onClick={showJobInfo}
            >
              View
            </IconButton>
            <IconButton
              icon={<Icon icon="bookmark" />}
              style={{ margin: "0 0 0 20px" }}
              color="violet"
            >
              Save
            </IconButton>
          </span>
        )}
        {job.job_type === "contract" && (
          <span style={{ margin: "0 0 0 45%" }}>
            <IconButton
              icon={
                <Icon
                  icon="info"
                  style={{ backgroundColor: "#1c2ca6", color: "white" }}
                />
              }
              style={{ backgroundColor: "#2e3fb0", color: "white" }}
              onClick={showJobInfo}
            >
              View
            </IconButton>
            <IconButton
              icon={<Icon icon="bookmark" />}
              style={{ margin: "0 0 0 20px" }}
              color="violet"
            >
              Save
            </IconButton>
          </span>
        )}
        {job.job_type === "full_time" && (
          <span style={{ margin: "0 0 0 45%" }}>
            <IconButton
              icon={
                <Icon
                  icon="info"
                  style={{ backgroundColor: "#1c2ca6", color: "white" }}
                />
              }
              style={{ backgroundColor: "#2e3fb0", color: "white" }}
              onClick={showJobInfo}
            >
              View
            </IconButton>
            <IconButton
              icon={<Icon icon="bookmark" />}
              style={{ margin: "0 0 0 20px" }}
              color="violet"
            >
              Save
            </IconButton>
          </span>
        )}
        {job.job_type === "internship" && (
          <span style={{ margin: "0 0 0 43.3%" }}>
            <IconButton
              icon={
                <Icon
                  icon="info"
                  style={{ backgroundColor: "#1c2ca6", color: "white" }}
                />
              }
              style={{ backgroundColor: "#2e3fb0", color: "white" }}
              onClick={showJobInfo}
            >
              View
            </IconButton>
            <IconButton
              icon={<Icon icon="bookmark" />}
              style={{ margin: "0 0 0 20px" }}
              color="violet"
            >
              Save
            </IconButton>
          </span>
        )}
        {job.job_type === "other" && (
          <span style={{ margin: "0 0 0 48.7%" }}>
            <IconButton
              icon={
                <Icon
                  icon="info"
                  style={{ backgroundColor: "#1c2ca6", color: "white" }}
                />
              }
              style={{ backgroundColor: "#2e3fb0", color: "white" }}
              onClick={showJobInfo}
            >
              View
            </IconButton>
            <IconButton
              icon={<Icon icon="bookmark" />}
              style={{ margin: "0 0 0 20px" }}
              color="violet"
            >
              Save
            </IconButton>
          </span>
        )}
        {job.job_type === "freelance" && (
          <span style={{ margin: "0 0 0 43.8%" }}>
            <IconButton
              icon={
                <Icon
                  icon="info"
                  style={{ backgroundColor: "#1c2ca6", color: "white" }}
                />
              }
              style={{ backgroundColor: "#2e3fb0", color: "white" }}
              onClick={showJobInfo}
            >
              View
            </IconButton>
            <IconButton
              icon={<Icon icon="bookmark" />}
              style={{ margin: "0 0 0 20px" }}
              color="violet"
            >
              Save
            </IconButton>
          </span>
        )}
      </p>
      <p>
        <Icon icon="building" style={{ margin: "0 10px 0 0" }} />
        {job.company_name}
      </p>
      <p>
        <Icon icon="map-marker" style={{ margin: "0 10px 0 0" }} />
        {job.candidate_required_location}
      </p>
      <JobInfo show={show} close={closeJobInfo} job={job} />
    </Panel>
  );
};

export default JobListing;
