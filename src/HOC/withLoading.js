import React from "react";
import Loading from "../components/Loading";

function withLoading(WrappedComponent) {
  return function WithLoading(props) {
    const { loading, ...rest } = props;
    if (loading) {
      return <Loading />;
    } else {
      return <WrappedComponent {...rest} />;
    }
  };
}

export default withLoading;
