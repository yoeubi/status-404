import React, { Component } from "react";
import styles from "./SearchList.module.scss";
import classNames from "classnames/bind";
import CheckBox from "../CheckBox";

const cx = classNames.bind(styles);

class SearchList extends Component {
  state = {
    payment: 0,
    sort: 0,
    distance: 0
  };
  static defaultProps = {
    payments: [
      "모든 가게보기",
      "바로결제 가게만",
      "만나서결제 가게만",
      "프렌차이즈 가게만"
    ],
    sorts: [
      "기본 순서로 보기",
      "가까운 순",
      "주문 많은 순",
      "리뷰 좋은 순",
      "인기 많은 순",
      "찜 많은 순"
    ],
    distances: [
      "근처 가게만 보기 (3km)",
      "멀리까지 (5km)",
      "머어얼리까지 (7km)"
    ]
  };
  handleChange = (target, index) => {
    this.setState({
      [target]: index
    });
  };
  render() {
    const { payments, sorts, distances, show } = this.props;
    const { payment, sort, distance } = this.state;
    return (
      <div className={cx("search-list" , {show})}>
        <ul>
          {payments.map((pay, index) => (
            <li key={index} onClick={() => this.handleChange("payment", index)}>
              <CheckBox
                translate="translate(3px, -1px)"
                visibility={index === payment}
              />
              <span className={cx({ check: index === payment })}>{pay}</span>
            </li>
          ))}
        </ul>
        <ul>
          {sorts.map((s, index) => (
            <li key={index} onClick={() => this.handleChange("sort", index)}>
              <CheckBox
                translate="translate(3px, -1px)"
                visibility={index === sort}
              />
              <span className={cx({ check: index === sort })}>{s}</span>
            </li>
          ))}
        </ul>
        <ul>
          {distances.map((dist, index) => (
            <li
              key={index}
              onClick={() => this.handleChange("distance", index)}
            >
              <CheckBox
                translate="translate(3px, -1px)"
                visibility={index === distance}
              />
              <span className={cx({ check: index === distance })}>{dist}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SearchList;
