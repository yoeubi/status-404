import React from "react";
import styles from "./Detail.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Detail = props => {
  const { main, sub} = props;
  return (
    <div className={cx("detail")}>
      <p className={cx("main")}>
        {main}
      </p>
      <p className={cx("sub")}>
        {sub}
      </p>
    </div>
  );
};
Detail.defaultProps = {
  main: "정보없음",
  sub: "정보없음"
};

export default Detail;
