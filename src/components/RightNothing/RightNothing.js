import React from "react";
import styles from "./RightNothing.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const RightNothing = props => {
  const { title, right, style, handleClick } = props;
  return (
    <div className={cx("right-nothing")} style={style}>
      <div className={cx('wrap')} onClick={handleClick}>
        <div className={cx("title")}>{title}</div>
        <div className={cx('right')}>{right}</div>
      </div>
    </div>
  );
};
RightNothing.defaultProps = {
  title: "",
  right: "",
  handleClick : () => {console.warn('handleClick not defined')}
};

export default RightNothing;
