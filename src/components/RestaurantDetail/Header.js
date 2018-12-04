import React, { Component } from "react";

import styles from "./Header.module.scss";
import classNames from "classnames/bind";

// SVG ICONS
import { ReactComponent as Heart } from "../../img/heart.svg"; // 하트 아이콘
import { ReactComponent as ChevronLeft } from "../../img/chevron-left.svg"; // 뒤로가기 아이콘

const cx = classNames.bind(styles);

class Header extends Component {
  static defaultProps = {
    // 상점 이름
    name: "상점 이름",
    // 스크롤시 최상단 판별 함수
    isTop: () => {}
  };

  render() {
    const { isTop, name } = this.props;
    return (
      <div className={cx("Header", { Scroll: !isTop })}>
        <ChevronLeft className={cx("Prev")} />
        <h1 className={cx("Title")}>{name}</h1>
        <Heart className={cx("Like")} />
      </div>
    );
  }
}

export default Header;
