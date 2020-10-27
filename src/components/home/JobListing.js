import React from "react";
import { Icon, IconButton, Panel } from "rsuite";

const JobListing = () => {
  return (
    <Panel header="Job title" shaded bordered>
      <p>
        Job type
        <span style={{ margin: "0 0 0 50%" }}>
          <IconButton icon={<Icon icon="info" />} color="violet">
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
      <p>Company name</p>
      <p>Location</p>
    </Panel>
  );
};

export default JobListing;
