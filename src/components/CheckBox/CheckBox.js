import React from "react";
import { ReactComponent as Check } from "../../svg/check.svg";
import styles from "./CheckBox.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const CheckBox = props => {
  const { translate, visibility } = props;
  return (
    <div className={cx("check", { show: visibility })}>
      <Check style={{ fill: "white", transform: translate }} />
    </div>
  );
};
CheckBox.defaultProps = {
  translate: "translateX(0)",
  visibility: "true"
};

export default CheckBox;
