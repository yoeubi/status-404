import React, { Component } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { ReactComponent as ChevronDown } from "../../img/chevron-down.svg";
import { ReactComponent as Hambergur } from "../../img/grabber.svg";

const cx = classNames.bind(styles);

class Header extends Component {
  render() {
    const { address, onUserModal, onAddressSearch } = this.props;
    return (
      <div className={cx("header")}>
        <Hambergur className={cx("hambergur")} onClick={onUserModal} />

        <div onClick={onAddressSearch} className={cx("addressInput")}>
          <span className={cx("address")}>
            {address ? address[0].address.address_name : "조회중입니다."}
          </span>
          <ChevronDown className={cx("icon")} alt="down" />
        </div>
      </div>
    );
  }
}

export default Header;
