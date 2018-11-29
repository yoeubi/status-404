import React, { Component } from "react";
import styles from "./AddressSearch.module.scss";
import classNames from "classnames/bind";
// import { Input } from "semantic-ui-react";

const cx = classNames.bind(styles);

class AddressSearch extends Component {
  static defaultProps = {
    recentAddressList: [
      {
        id: 0,
        address: "성동구 성수동2가 277-17 제강빌딩",
        road: "성수이로 118 제강빌딩"
      },
      {
        id: 1,
        address: "성동구 성수동2가 277-54 서브웨이",
        road: "아차산로 121 서브웨이"
      },
      {
        id: 2,
        address: "성동구 성수동2가 300-1 성수역[2호선]",
        road: "아차산로 113"
      }
    ]
  };

  render() {
    const { recentAddressList, show, onAddressSearch } = this.props;
    return (
      <div className={cx("container", { show: show })}>
        <div className={cx("formContainer")}>
          <button className={cx("closeButton")} onClick={onAddressSearch}>
            X
          </button>
          <h1 className={cx("header")}>
            지번, 도로명, 건물명을
            <p>입력하세요</p>
          </h1>
          <div className={cx("addressSearchForm")}>
            <input
              className={cx("addressSearchInput")}
              label="주소검색"
              type="search"
              name="address"
              placeholder="예) 배민동12-3 또는 배민아파트"
            />
            <button className={cx("addressSearchButton")}>돋보기</button>
          </div>
          <button className={cx("addressSettingButton")}>
            ◎ 현 위치로 주소 설정
          </button>
        </div>
        <div className={cx("listContainer")}>
          <h2 className={cx("listTitle")}>최근 주소</h2>
          <ul className={cx("recentAddress")}>
            {recentAddressList.map(r => (
              <li key={r.id} className={cx("listItem")}>
                <span>{r.address}</span>
                <span>{r.road}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ); // <div className={cx("container", { showPopup: showPopup })}>
  }
}

export default AddressSearch;