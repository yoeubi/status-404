import React, { Component } from "react";
import styles from "./SlideMenu.module.scss";
import classNames from "classnames/bind";
import { withRouter } from 'react-router';

const cx = classNames.bind(styles);

class SlideMenu extends Component {
  menuList = [
    "한식",
    "분식",
    "돈까스·회·일식",
    "치킨",
    "피자",
    "중국집",
    "족발·보쌈",
    "야식",
    "찜·탕",
    "도시락",
    "카페·디저트",
    "패스트푸드",
    "프랜차이즈",
    "맛집랭킹"
  ]
  render() {
    const {category, onChange} = this.props;
    return (
      <div className={cx("slide-menu")}>
        <ul>
          {
            this.menuList.map((menu, index) => (<li key={index} className={cx({ active: menu === category })} onClick={() => onChange(menu)}>{menu}</li>))
          }
        </ul>
      </div>
    );
  }
}


export default SlideMenu;
