import React from "react";
import { Redirect } from "react-router-dom";

const withNoCart = WrappedComponent => props => {
    const { cart } = props;
  if (cart) {
    return <WrappedComponent {...props} />;
  } else {
    return <Redirect to="/" />;
  }
};

export default withNoCart;
