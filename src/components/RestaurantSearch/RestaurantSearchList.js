import React, { Component } from "react";
import styles from "./RestaurantSearchList.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

export default class RestaurantSearchList extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       storeList: []
  //     };
  //   }

  render() {
    const { storeList } = this.props;
    return (
      <ul className={cx("SearchResult")}>
        {storeList.map(s => (
          <li key={s.id} className={cx("listItem")}>
            <div>{s.id}</div>
            {s.storeImgURL && <img src={s.storeImgURL.location} alt={s.name} />}
            <Link to={`/restaurant/${s.id}`}>{s.name}</Link>
          </li>
        ))}
      </ul>
    );
  }
}
