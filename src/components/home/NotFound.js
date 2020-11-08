import React from "react";
import { Message } from "rsuite";
import "../../global.css";

const NotFound = () => {
  return (
    <Message
      showIcon
      type="error"
      title="No jobs found."
      description="Please search something else."
    />
  );
};

export default NotFound;
