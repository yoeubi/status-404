import React, { Component } from "react";
import styles from "./AddressSearch.module.scss";
import classNames from "classnames/bind";
// import { Input } from "semantic-ui-react";

// import SVG
import { ReactComponent as MagnifyingGlass } from "../../img/search.svg";
import { ReactComponent as Crosshair } from "../../img/crosshair.svg";
import { ReactComponent as Ex } from "../../img/x.svg";

const cx = classNames.bind(styles);

class AddressSearchView extends Component {
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

  constructor(props) {
    super(props);

    this.state = {
      userInput: ""
    };
  }

  handleUserInput = e => {
    const userInput = e.target.value;
    this.setState({
      userInput
    });
  };

  render() {
    const { show, onAddressSearch, getAddress, searchResult } = this.props;
    const { userInput } = this.state;
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
                onChange={e => this.handleUserInput(e)}
                value={userInput}
                className={cx("addressSearchInput")}
                label="주소검색"
                type="search" // name="address"
                placeholder="예) 배민동12-3 또는 배민아파트"
              />
              <button
                className={cx("addressSearchButton")}
                onClick={() => getAddress(userInput)}
              >
                <MagnifyingGlass />
              </button>
            </div>
            <button className={cx("addressSettingButton")}>
              <Crosshair />
              <p>현 위치로 주소 설정</p>
            </button>
          </div>
          <div className={cx("listContainer")}>
            <h2 className={cx("listTitle")}>최근 주소</h2>
            <ul className={cx("recentAddress")}>
              {searchResult.map(s => (
                <li key={s.id} className={cx("listItem")}>
                  <div className={cx("place")}>{s.place_name}</div>
                  <div className={cx("address")}>{s.address_name}</div>
                  <div className={cx("textContainer")}>
                    <div className={cx("box")}>도로명</div>
                    <div className={cx("road")}>{s.road_address_name}</div>
                  </div>
                  <button className={cx("deleteButton")}>
                    <Ex />
                  </button>
                  {/* 
                  
                    <div className={cx("road")}>{r.road}</div>
                  </div> */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default AddressSearchView;
