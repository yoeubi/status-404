import React, { Component } from "react";
import styles from "./RestaurantSearchList.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default class RestaurantSearchList extends Component {
  render() {
    return (
      <ul className={cx("SearchResult")}>
        <li className={cx("listItem")}>list item 1</li>
        <li className={cx("listItem")}>list item 2</li>
      </ul>
    );
  }
}
