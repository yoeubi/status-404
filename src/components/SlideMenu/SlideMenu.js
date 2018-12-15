import React, { Component } from "react";
import styles from "./SlideMenu.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class SlideMenu extends Component {
  slide = React.createRef();

  componentDidMount() {
    this.slide.current.scrollLeft = this.props.scroll;
  }

  render() {
    const { category, categoryList, onChange, onScroll } = this.props;
    return (
      <div className={cx("slide-menu")}>
        <ul
          ref={this.slide}
          onScroll={() => onScroll(this.slide.current.scrollLeft)}
        >
          {categoryList.map((menu, index) => (
            <li
              key={index}
              className={cx({ active: menu === category })}
              onClick={() => onChange(index)}
            >
              {menu}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SlideMenu;
