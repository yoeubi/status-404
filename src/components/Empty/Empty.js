import React from "react";
import styles from "./Empty.module.scss";
import classNames from "classnames/bind";
import Logo from "../../svg/logo2.JPG";

const cx = classNames.bind(styles);

const Empty = props => {
  return (
    <div className={cx("empty")}>
      <div>
        <img src={Logo} alt="텅 빈 장바구니" />
        <p>장바구니가 텅 비어있어요</p>
      </div>
    </div>
  );
};

export default Empty;
