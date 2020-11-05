import React, { useState } from "react";
import { Icon, IconButton, Panel, Alert } from "rsuite";
import JobInfo from "./JobInfo";
import "../../global.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { saveJob } from "../../actions/userActions";

const JobListing = ({ job, currentUser, saveJob, user }) => {
  const [show, setShow] = useState(false);

  const [selectedJob, setSelectedJob] = useState(0);

  const showJobInfo = () => {
    setShow(true);
  };

  const closeJobInfo = () => {
    setShow(false);
  };

  const handleSaveJob = () => {
    if (currentUser === null) {
      Alert.error("Please login to save the job.", 5000);
    } else {
      const errorMsg = () => {
        Alert.error("Failed to save the job. Please try again.", 5000);
        setSelectedJob(0);
      };

      const successMsg = () => {
        Alert.success("Job has been saved successfully.", 5000);
        setSelectedJob(0);
      };

      setSelectedJob(job.id);

      let data = { email: currentUser.email, jobToSave: job };
      saveJob(data, errorMsg, successMsg);
    }
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
        {job.job_type === "" && "N/A"}
        {job.job_type === "part_time" && (
          <span style={{ margin: "0 0 0 44.7%" }} className="part-time">
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
              onClick={handleSaveJob}
              loading={selectedJob === job.id ? user.saveJobLoading : false}
            >
              Save
            </IconButton>
          </span>
        )}
        {job.job_type === "contract" && (
          <span style={{ margin: "0 0 0 45%" }} className="contract">
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
              onClick={handleSaveJob}
              loading={selectedJob === job.id ? user.saveJobLoading : false}
            >
              Save
            </IconButton>
          </span>
        )}
        {job.job_type === "full_time" && (
          <span style={{ margin: "0 0 0 45%" }} className="full-time">
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
              onClick={handleSaveJob}
              loading={selectedJob === job.id ? user.saveJobLoading : false}
            >
              Save
            </IconButton>
          </span>
        )}
        {job.job_type === "internship" && (
          <span style={{ margin: "0 0 0 43.3%" }} className="internship">
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
              onClick={handleSaveJob}
              loading={selectedJob === job.id ? user.saveJobLoading : false}
            >
              Save
            </IconButton>
          </span>
        )}
        {job.job_type === "other" && (
          <span style={{ margin: "0 0 0 48.7%" }} className="other">
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
              onClick={handleSaveJob}
              loading={selectedJob === job.id ? user.saveJobLoading : false}
            >
              Save
            </IconButton>
          </span>
        )}
        {job.job_type === "freelance" && (
          <span style={{ margin: "0 0 0 43.8%" }} className="freelance">
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
              onClick={handleSaveJob}
              loading={selectedJob === job.id ? user.saveJobLoading : false}
            >
              Save
            </IconButton>
          </span>
        )}
        {job.job_type === "" && (
          <span style={{ margin: "0 0 0 51.5%" }} className="empty">
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
              onClick={handleSaveJob}
              loading={selectedJob === job.id ? user.saveJobLoading : false}
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
      <p className="smaller-mobiles">
        <span>
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
            onClick={handleSaveJob}
            loading={selectedJob === job.id ? user.saveJobLoading : false}
          >
            Save
          </IconButton>
        </span>
      </p>
      <JobInfo show={show} close={closeJobInfo} job={job} />
    </Panel>
  );
};

JobListing.propTypes = {
  user: PropTypes.object.isRequired,
  saveJob: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { saveJob })(JobListing);
