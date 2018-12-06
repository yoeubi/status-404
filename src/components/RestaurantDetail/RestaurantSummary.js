import React, { Component } from "react";
// react-rating
// DOC :: https://www.npmjs.com/package/react-rating
import Rating from "react-rating";
import styles from "./RestaurantSummary.module.scss";
import classNames from "classnames/bind";

// SVG ICONS
import { ReactComponent as Heart } from "../../img/heart.svg"; // 하트 아이콘
import { ReactComponent as Star } from "../../img/star.svg"; // 뒤로가기 아이콘
import { ReactComponent as ArrowUp } from "../../img/arrow-up.svg";

const cx = classNames.bind(styles);

class RestaurantSummary extends Component {
  render() {
    const { name, rating, img_profile } = this.props;
    return (
      <div className={cx("SummaryWrap")}>
        <div className={cx("ImgProfile")}>
          <img style={{ width: "100%" }} src={img_profile} alt={name} />
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
            <label>최소주문금액</label><span>13,000 원</span>
          </li>
          <li>
            <label>배달시간</label>
            <span>45분 소요 예상</span>
          </li>
          <li>
            <label>배달팁</label><span>2,000원</span>
          </li>
        </ul>

        <div className={cx("SNS")}>
          <button>
            <Heart /> <span>찜 351</span>
          </button>
          <button>
            <ArrowUp />
            공유
          </button>
        </div>
      </div>
    );
  }
}

export default RestaurantSummary;
