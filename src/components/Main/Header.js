import React, { Component } from "react";
import { withUi } from "../../context/UiContext";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { ReactComponent as ChevronDown } from "../../img/chevron-down.svg";
import { ReactComponent as Hambergur } from "../../img/grabber.svg";

const cx = classNames.bind(styles);

class Header extends Component {
  componentWillUnmount() {
    const { handleBodyOnModal } = this.props;
    handleBodyOnModal("close");
  }
  render() {
    const {
      user,
      handleBodyOnModal,
      onUserModal,
      onAddressSearch,
      noneAuthUserAddress
    } = this.props;
    return (
      <div className={cx("header")}>
        <Hambergur
          className={cx("hambergur")}
          onClick={() => {
            handleBodyOnModal("open");
            onUserModal();
          }}
        />

        <div onClick={onAddressSearch} className={cx("addressInput")}>
          <span className={cx("address")}>
            {localStorage.getItem("token")
              ? // 로그인
                user.address
                ? user.address[0].address
                : "유저 정보 조회중"
              : // 미로그인
                noneAuthUserAddress}
          </span>
          <ChevronDown className={cx("icon")} alt="down" />
        </div>
      </div>
    );
  }
}

export default withUi(Header);
