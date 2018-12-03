import React, { Component } from "react";

import styles from "./RestaurantDetailView.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class RestaurantDetailView extends Component {
  static defaultProps = {
    id: null,
    name: "배민 상점",
    userId: null,
    is_register: null, // 상점 생성 시간?
    address: "배민구 배민동 000",
    store_category: "상점 카테고리",
    store_info: "상점 정보",
    origin_info: "원산지 정보",
    img_profile:
      "https://cdn.dominos.co.kr/admin/upload/goods/20180827_ca1sFpdy.jpg"
  };
  render() {
    const {
      match: {
        // storeId
        params: { id }
      }
    } = this.props;
    const { name, address, img_profile } = this.props;
    return (
      <div className={cx("StoreDetail")}>
        <div className={cx("Header")}>
          <div className={cx("Prev")}>prev</div>
        </div>

        <div>
          <img src={img_profile} alt={name} />{" "}
        </div>
        <div>상점 아이디 : {id}</div>
        <div>상점 이름 : {name}</div>
        <div>상점 주소 : {address}</div>
      </div>
    );
  }
}

export default RestaurantDetailView;
