import React, { Component } from "react";
import styles from "./RestaurantSearchList.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
// svg
import { ReactComponent as Right } from "../../svg/chevron-right.svg";
import { ReactComponent as Star } from "../../svg/star.svg";

const cx = classNames.bind(styles);

export default class RestaurantSearchList extends Component {
  static defaultProps = {
    logo:
      "http://mblogthumb4.phinf.naver.net/20151117_151/smartbaedal_1447748320696qYGB3_JPEG/12109275_986494971373814_8759974093703893190_n.jpg?type=w2",
    title: "도미노 피자",
    star: "3.5",
    review: 30,
    comment: 10,
    menu: "쉬림프 피자, 페퍼로니 피자"
  };
  render() {
    const { storeList, logo, star, review, comment, menu } = this.props;
    return (
      <ul className={cx("SearchResult")}>
        {storeList.map(s => (
          <Link key={s.id} to={`/restaurant/${s.id}`}>
            <li className={cx("listItem")}>
              <div className={cx("Img")}>
                <img
                  src={s.storeImgURL ? s.storeImgURL.location : logo}
                  alt={s.name}
                />
              </div>
              <div className={cx("Text")}>
                <span className={cx("StoreName")}>{s.name}</span>
                <p className={cx("StoreInfo")}>
                  <span className={cx("Star")}>
                    <Star
                      style={{
                        fill: "#fdc025",
                        stroke: "rgba(0, 0, 0, 0.3)",
                        transform: "translateY(25%)"
                      }}
                    />
                    <span>{star}</span>
                  </span>
                  <span>
                    최근리뷰 <span>{review}</span>
                  </span>
                  <span>
                    최근사장님댓글 <span>{comment}</span>
                  </span>
                </p>
                <span className={cx("menu")}>{menu}</span>
              </div>
              <div className={cx("RightArrow")}>
                <Right style={{ transform: "scale(1.5)" }} />
              </div>
            </li>
          </Link>
        ))}
      </ul>
    );
  }
}
