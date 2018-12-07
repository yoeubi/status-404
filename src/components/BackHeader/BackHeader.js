import React from "react";
import styles from "./BackHeader.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { ReactComponent as Left } from "../../svg/chevron-left.svg";

const cx = classNames.bind(styles);

const BackHeader = props => {
  const { backURL, title, style } = props;
  return (
    <div className={cx("back-header")} style={style}>
      <div className={cx("back")}>
        <Link to={backURL}>
          <Left style={{ transform: "scale(1.5)" }} />
        </Link>
      </div>
      <div className={cx("title")}>{title}</div>
    </div>
  );
};
BackHeader.defaultProps = {
  backURL: "/",
  title: "제목없음"
};

export default BackHeader;
