import React, { useState } from "react";
import { Icon, IconButton, Panel } from "rsuite";
import JobInfo from "./JobInfo";

const JobListing = () => {
  const [show, setShow] = useState(false);

  const showJobInfo = () => {
    setShow(true);
  };

  const closeJobInfo = () => {
    setShow(false);
  };

  return (
    <Panel header="Job title" shaded bordered>
      <p>
        <Icon icon="briefcase" style={{ margin: "0 10px 0 0" }} />
        Job type
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
      </p>
      <p>
        <Icon icon="building" style={{ margin: "0 10px 0 0" }} />
        Company name
      </p>
      <p>
        <Icon icon="map-marker" style={{ margin: "0 10px 0 0" }} />
        Location
      </p>
      <JobInfo show={show} close={closeJobInfo} />
    </Panel>
  );
};

export default JobListing;
