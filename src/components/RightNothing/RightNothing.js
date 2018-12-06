import React from "react";
import styles from "./RightNothing.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const RightNothing = props => {
  const { title, right, style } = props;
  return (
    <div className={cx("right-nothing")} style={style}>
      <div className={cx('wrap')}>
        <div className={cx("title")}>{title}</div>
        <div className={cx('right')}>{right}</div>
      </div>
    </div>
  );
};
RightNothing.defaultProps = {
  title: "",
  right: ""
};

export default RightNothing;
