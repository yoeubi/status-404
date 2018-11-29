import React, { Component } from "react";
import styles from "./AddressSearch.module.scss";
import classNames from "classnames/bind";
// import { Input } from "semantic-ui-react";

const cx = classNames.bind(styles);

class AddressSearchView extends Component {
  render() {
    const { recentAddressList, show, onAddressSearch } = this.props;
    return (
      <React.Fragment>
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
                  <span className={cx("address")}>{r.address}</span>
                  <button className={cx("deleteButton")}>x</button>
                  <div className={cx("textContainer")}>
                    <div className={cx("box")}>도로명</div>
                    <div className={cx("road")}>{r.road}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AddressSearchView;
