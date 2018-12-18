import React from "react";
import { Redirect } from "react-router-dom";

const withNoTemp = WrappedComponent => props => {
  const { temp } = props;
    if (temp) {
    return <WrappedComponent {...props} />;
  } else {
    return <Redirect to="/" />;
  }
};

export default withNoTemp;