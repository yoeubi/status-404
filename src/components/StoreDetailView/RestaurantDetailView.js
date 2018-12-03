import React, { Component } from "react";

import styles from "./RestaurantDetailView.module.scss";
import classNames from "classnames/bind";

// SVG ICONS
import { ReactComponent as Heart } from "../../img/heart.svg"; // 하트 아이콘
import { ReactComponent as ChevronLeft } from "../../img/chevron-left.svg"; // 뒤로가기 아이콘
import { ReactComponent as Star } from "../../img/star.svg"; // 뒤로가기 아이콘

const cx = classNames.bind(styles);

class RestaurantDetailView extends Component {
  static defaultProps = {
    id: null,
    name: "배민 상점",
    rating: 4.5, // 상점 별점
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
    const { name, address, img_profile, rating } = this.props;
    const stars = null;
    return (
      <div className={cx("StoreDetail")}>
        <div className={cx("Header", { Scroll: false })}>
          <ChevronLeft className={cx("Prev")} />
          <h1 className={cx("Title")}>{name}</h1>
          <Heart className={cx("Like")} />
        </div>

        <div className={cx("Summary")}>
          <div className={cx("ImgProfile")}>
            <img style={{ width: "100%" }} src={img_profile} alt={name} />{" "}
          </div>
          <div className={cx("BasicInfo")}>
            <h2>{name}</h2>
            <div className={cx("Stars")}>
              <Star className={cx("Star", "Empty")} />
              <Star className={cx("Star", "Half")} />
              <Star className={cx("Star")} />
              <span>{stars}</span>
              <span className={cx("Rating")}>{rating}</span>
            </div>
            <div className={cx("Reviews")}>
              <span>최근 리뷰 00</span>
              <span>사장님 최근 댓글 00</span>
            </div>
          </div>
        </div>
        <div>상점 아이디 : {id}</div>
        <div>상점 이름 : {name}</div>
        <div>상점 주소 : {address}</div>
      </div>
    );
  }
}

export default RestaurantDetailView;
