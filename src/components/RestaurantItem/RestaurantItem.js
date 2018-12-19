import React, {PureComponent} from "react";
import styles from "./RestaurantItem.module.scss";
import classNames from "classnames/bind";
import { ReactComponent as Right } from "../../svg/chevron-right.svg";
import { ReactComponent as Star } from "../../svg/star.svg";

const cx = classNames.bind(styles);

class RestaurantItem extends PureComponent {
  render(){
    const { logo, name, review, comment, menu, rating_average } = this.props;
    
    return <div className={cx("restaurant-item")}>
        <div className={cx("restaurant-img")}>
          <img src={logo} alt="" />
        </div>
        <div className={cx("restaurant-description")}>
          <p className={cx("title")}>{name}</p>
          <p className={cx("detail")}>
            <span>
              <Star style={{ fill: "#fdc025", stroke: "rgba(0, 0, 0, 0.3)", transform: "translateY(25%)" }} />: <span>
              {rating_average ? rating_average : 0}
              </span>
            </span>
            <span>
              최근리뷰 <span>{review}</span>+
            </span>
            <span>
              최근사장님댓글 <span>{comment}</span>
            </span>
          </p>
          <p className={cx("menu")}>{menu}</p>
        </div>
        <div className={cx("restaurant-link")}>
          <Right style={{ transform: "scale(1.5)", fill: "#666" }} />
        </div>
      </div>;
  }
}
RestaurantItem.defaultProps = {
  logo:
    "http://mblogthumb4.phinf.naver.net/20151117_151/smartbaedal_1447748320696qYGB3_JPEG/12109275_986494971373814_8759974093703893190_n.jpg?type=w2",
  title: "이름없음",
  star: "0",
  review: 0,
  comment: 0,
  menu: ""
};

export default RestaurantItem;
