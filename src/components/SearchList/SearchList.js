import React from "react";
import styles from "./SearchList.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const SearchList = () => {
  return (
    <div className={cx('search-list')}>
      <ul>
        <li>모든 가게보기</li>
        <li>바로결제 가게만</li>
        <li>만나서결제 가게만</li>
        <li>프렌차이즈 가게만</li>
      </ul>
      <ul>
        <li>기본 순서로 보기</li>
        <li>가까운 순</li>
        <li>주문 많은 순</li>
        <li>리뷰 좋은 순</li>
        <li>인기 많은 순</li>
        <li>찜 많은 순</li>
      </ul>
      <ul>
        <li>근처 가게만 보기(3km)</li>
        <li>멀리까지 (5km)</li>
        <li>머어얼리까지 (7km)</li>
      </ul>
    </div>
  );
};

export default SearchList;
