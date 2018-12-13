import React, { Component } from "react";
// react-rating
// DOC :: https://www.npmjs.com/package/react-rating
import Rating from "react-rating";
import styles from "./RestaurantSummary.module.scss";
import classNames from "classnames/bind";

// SVG ICONS
import { ReactComponent as Heart } from "../../img/heart.svg"; // 하트 아이콘
import { ReactComponent as Star } from "../../img/star.svg"; // 별 아이콘
import { ReactComponent as ArrowUp } from "../../img/arrow-up.svg"; // 화살표 아이콘

const cx = classNames.bind(styles);

class RestaurantSummary extends Component {
  static defaultProps = {
    // 상점 이름
    name: "상점 이름",
    // 별점
    rating: 4.5,
    // 상점 이미지
    storeimage_set: [],
    // 배달료
    fee: 3000,
    // 최소주문금액
    least_cost: 13000,
    delivery_time: 45,
    likes: 15
  };

  render() {
    const {
      name,
      rating,
      storeimage_set,
      fee,
      least_cost,
      delivery_time,
      likes
    } = this.props;
    return (
      <div className={cx("SummaryWrap")}>
        <div className={cx("ImgProfile")}>
          {storeimage_set.length > 0 ? (
            <img
              style={{ width: "100%" }}
              src={storeimage_set[0].location}
              alt={name}
            />
          ) : (
            <div className={cx("ImgEmpty")} />
          )}
        </div>
        <div className={cx("BasicInfo")}>
          <h2>{name}</h2>
          <div className={cx("Stars")}>
            <Rating
              // 빈 별
              emptySymbol={<Star className={cx("Star", "Empty")} />}
              // 꽉찬별
              fullSymbol={<Star className={cx("Star")} />}
              // 분할
              fractions={2}
              // 레이팅 정보
              initialRating={rating}
              readonly
            />
            <span className={cx("Rating")}>{rating}</span>
          </div>
          <div className={cx("Reviews")}>
            <span>최근 리뷰 00</span> <div className={cx("Bar")}>|</div>
            <span>사장님 최근 댓글 00</span>
          </div>
        </div>

        <ul className={cx("OrderInfo")}>
          <li>
            <label>결재방법</label><span>바로결재, 만나서 결재</span>
          </li>
          <li>
            <label>최소주문금액</label>
            <span>{least_cost.toLocaleString()} 원</span>
          </li>
          <li>
            <label>배달시간</label>
            <span>{delivery_time}분 소요 예상</span>
          </li>
          <li>
            <label>배달팁</label><span>{fee.toLocaleString()} 원</span>
          </li>
        </ul>

        <div className={cx("SNS")}>
          <button>
            <Heart className={cx("Heart")} /> <span>찜 {likes}</span>
          </button>
          <button>
            <ArrowUp className={cx("Share")} />
            공유
          </button>
        </div>
      </div>
    );
  }
}

export default RestaurantSummary;
