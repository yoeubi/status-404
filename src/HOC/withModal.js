import React from "react";

const withModal = WrappedComponent => props => {
  const onModal = mode => {
    if (mode === "open") {
      document.body.style.overflow = "hidden";
    } else if (mode === "close") {
      document.body.style.overflow = "auto";
    }
  };
  return <WrappedComponent {...props} onModal={onModal} />;
};
export default withModal;