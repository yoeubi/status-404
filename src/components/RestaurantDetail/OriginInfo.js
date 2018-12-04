import React, { Component } from "react";
import styles from "./OriginInfo.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class OriginInfo extends Component {
  render() {
    return (
      <div className={cx("OriginInfoWrap")}>
        <div className={cx("Head")}>
          <h3>원산지 표기</h3>
          <p>돼지 - 국내산, 쌀 - 국내산, 새우 - 베트남산</p>
        </div>

        <ul>
          <li>
            메뉴 이미지는 상품의 종류에 따라 제공되는 이미지로, 실제 음식과 다를
            수 있습니다.
          </li>
          <li>
            상단 메뉴 및 가격은 업소에서 제공한 정보를 기준으로 작성되었으며,
            변동될 수 있습니다.
          </li>
          <li>
            (주)STATUS404는 상품거래에 대한 통신판매중개자이며, 통신판매의
            당사자가 아닙니다. 따라서 (주)STATUS404는 상품·거래정보 및 거래에
            대하여 책임을 지지 않습니다.
          </li>
          <li>STATUS404 고객센터 : 1600 - 0000</li>
        </ul>
      </div>
    );
  }
}

export default OriginInfo;
