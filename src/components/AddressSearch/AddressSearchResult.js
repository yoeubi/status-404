import React, { Component } from "react";
import styles from "./AddressSearchResult.module.scss";
import classNames from "classnames/bind";
// SVG
import { ReactComponent as MagnifyingGlass } from "../../img/search.svg";
import { ReactComponent as BackBtn } from "../../svg/arrow-left.svg";

const cx = classNames.bind(styles);

export default class AddressSearchResult extends Component {
  render() {
    const {
      getAddress,
      onBackBtn,
      onUserInput,
      userInput,
      searchResult,
      onFinishBtn
    } = this.props;
    return (
      <>
        <div className={cx("container")}>
          <div className={cx("formContainer")}>
            <button className={cx("backBtn")} onClick={onBackBtn}>
              <BackBtn />
            </button>
            <h1 className={cx("header")}>배달 받을 주소</h1>
            <div className={cx("addressSearchForm")}>
              <input
                autoComplete="off"
                onChange={onUserInput}
                value={userInput}
                className={cx("addressSearchInput")}
                label="주소검색"
                type="search"
                name="address"
                placeholder="예) 배민동12-3 또는 배민아파트"
              />
              <button
                className={cx("addressSearchButton")}
                onClick={() => {
                  getAddress(userInput);
                }}
              >
                <MagnifyingGlass />
              </button>
            </div>
          </div>
          <div className={cx("listContainer")}>
            <ul className={cx("recentAddress")}>
              {searchResult.map((s, index) => (
                <li key={index} className={cx("listItem")}>
                  <div className={cx("place")}>{s.place_name}</div>
                  <div className={cx("address")}>{s.address_name}</div>
                  <div className={cx("textContainer")}>
                    {s.road_address_name && (
                      <>
                        <div className={cx("box")}>도로명</div>
                        <div className={cx("road")}>{s.road_address_name}</div>
                      </>
                    )}
                  </div>
                  <button
                    className={cx("finishBtn")}
                    onClick={() =>
                      // onFinishBtn(s.address_name, s.road_address_name)
                      onFinishBtn(s.id)
                    }
                  >
                    선택
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}
