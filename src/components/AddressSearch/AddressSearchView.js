import React, { Component } from "react";
import styles from "./AddressSearch.module.scss";
import classNames from "classnames/bind";
import { withUi } from "../../context/UiContext";

// SVG
import { ReactComponent as MagnifyingGlass } from "../../img/search.svg";
import { ReactComponent as Crosshair } from "../../img/crosshair.svg";
import { ReactComponent as Ex } from "../../img/x.svg";

const cx = classNames.bind(styles);

class AddressSearchView extends Component {
  render() {
    const {
      show,
      onAddressSearch,
      getAddress,
      onSubmitBtn,
      onKakaoView,
      userInput,
      onUserInput,
      // address,
      recentAddress,
      onDeleteBtn,
      onAddressSetting
    } = this.props;
    return (
      <>
        <div className={cx("container", { show: show })}>
          <div className={cx("formContainer")}>
            <button className={cx("closeButton")} onClick={onAddressSearch}>
              <Ex />
            </button>
            <h1 className={cx("header")}>
              지번, 도로명, 건물명을
              <p>입력하세요</p>
            </h1>
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
                  onSubmitBtn();
                }}
              >
                <MagnifyingGlass />
              </button>
            </div>
            <button
              // onClick={() => onKakaoView()}
              onClick={() => onAddressSetting()}
              className={cx("addressSettingButton")}
            >
              <Crosshair />
              <p>현 위치로 주소 설정</p>
            </button>
          </div>
          <div className={cx("listContainer")}>
            <h2 className={cx("listTitle")}>최근 주소</h2>
            <ul className={cx("recentAddress")}>
              {recentAddress &&
                recentAddress.map((r, index) => (
                  <li key={index} className={cx("listItem")}>
                    <div className={cx("place")}>{r.place_name}</div>
                    <div className={cx("address")}>{r.address_name}</div>
                    <div className={cx("textContainer")}>
                      {r.road_address_name && (
                        <>
                          <div className={cx("box")}>도로명</div>
                          <div className={cx("road")}>
                            {r.road_address_name}
                          </div>
                        </>
                      )}
                    </div>
                    <button
                      onClick={onDeleteBtn}
                      className={cx("deleteButton")}
                    >
                      <Ex />
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

export default withUi(AddressSearchView);
