import React from "react";
import styles from "./NewInput.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const NewInput = props => {
  const { children , ...rest} = props;
  return (
    <div className={cx("custom")}>
      <input {...rest} />
      {children}
    </div>
  );
};

export default NewInput;
