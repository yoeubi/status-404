import React, { Component } from "react";
import Header from "./Header";
import UserModal from "./UserModal";
import styles from "./Layout.module.scss";
import classNames from "classnames/bind";
import AddressSearch from "../AddressSearch/AddressSearch";

const cx = classNames.bind(styles);

// 공통 레이아웃이에여
// Header 컴포넌트를 잘 작성해서 페이지마다 다르게 렌더링 될 수 있도록 해봅시당.
class Layout extends Component {
  state = {
    // 모달 활성화 여부
    show: false,
    // 로그인 여부
    isLogin: false,
    // 주소 검색 팝업 활성화 여부
    showPopup: false
  };

  handleUserModal = () => {
    console.log("실행중");
    this.setState({ show: !this.state.show });
  };

  handleAddressSearch = () => {
    this.setState({ showPopup: !this.state.showPopup });
  };

  render() {
    const { show, isLogin, showPopup } = this.state;
    return (
      <div className={cx("layout", { noScroll: show })}>
        <UserModal
          isLogin={isLogin}
          onUserModal={this.handleUserModal}
          showModal={show}
        />
        <AddressSearch
          onAddressSearch={this.handleAddressSearch}
          showPopup={showPopup}
        />
        <Header isLogin={isLogin} onUserModal={this.handleUserModal} />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
