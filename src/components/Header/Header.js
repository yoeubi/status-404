import React from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { ReactComponent as Left } from "../../svg/chevron-left.svg";
import { ReactComponent as Location } from "../../svg/location.svg";
import { ReactComponent as List } from "../../svg/list-unordered.svg";

const cx = classNames.bind(styles);

const Header = props => {
  const { category, onShowModal } = props;
  return (
    <header className={cx("header")}>
      <div className={cx("close")}>
        <Link to="/">
          <Left style={{ transform: "scale(1.5)" }} />
        </Link>
      </div>
      <div className={cx("category")}>{category}</div>
      <div className={cx("util")}>
        <div>
          <Location style={{ transform: "scale(1.5)" }} />
        </div>
        <div onClick={onShowModal}>
          <List style={{ transform: "scale(1.5)" }} />
        </div>
      </div>
    </header>
  );
};
Header.defaultProps = {
  category: "패스트푸드"
};

export default Header;
