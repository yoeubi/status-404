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
        <div className={cx("addressInput")} onClick={onAddressSearch}>
          {address ? (
            // 로그인시
            <span className={cx("address")}>
            {
                address[0].address_name || ('조회중입니다.') 
            }
            </span>
          ) : (
            // 미 로그인시 => 로그인 페이지로
            <span className={cx("address")}>
              <Link to="/login">배송지 입력하기</Link>
            </span>
          )}

          <ChevronDown className={cx("icon")} alt="down" />
        </div>
      </div>
    );
  }
}

export default Header;
