import React from "react";
import styles from "./CloseHeader.module.scss";
import classNames from "classnames/bind";
import { ReactComponent as X } from "../../svg/x.svg";

const cx = classNames.bind(styles);

const CloseHeader = props => {
  const { title, style, onClick} = props;
  return <div className={cx("close-header")} style={style}>
      <div className={cx("close")} onClick={onClick}>
        <X style={{ transform: "scale(1.5)" }} />
      </div>
      <div className={cx("title")}>{title}</div>
    </div>;
};
CloseHeader.defaultProps = {
  title: "",
  style: {},
  handleClick: () => {console.warn('CloseHeader handleClick not defined')}
};

export default CloseHeader;
