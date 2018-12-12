import React, { Component } from "react";
import styles from "./SlideMenu.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class SlideMenu extends Component {
  menuList = [
    "한식",
    "일식",
    "양식",
    "카페",
    "햄버거",
    "치킨",
    "피자",
    "중식",
    "분식",
  ];
  slide = React.createRef();

  componentDidMount() {
    this.slide.current.scrollLeft = this.props.scroll;
    console.log(this.slide.current.scrollLeft)
  }
  
  render() {
    const {category, onChange, onScroll} = this.props;
    return (
      <div className={cx("slide-menu")}>
        <ul ref={this.slide} onScroll={() => onScroll(this.slide.current.scrollLeft)}>
          {
            this.menuList.map((menu, index) => (<li key={index} className={cx({ active: menu === category })} onClick={() => onChange(index)}>{menu}</li>))
          }
        </ul>
      </div>
    );
  }
}


export default SlideMenu;
