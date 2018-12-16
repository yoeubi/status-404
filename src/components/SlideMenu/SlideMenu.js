import React, { Component } from "react";
import styles from "./SlideMenu.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class SlideMenu extends Component {
  slide = React.createRef();
  item = React.createRef();
  componentDidMount() {
    this.slide.current.scrollLeft = this.item.offsetLeft - 60;
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
              ref={ ref => {
                if (menu === category) {
                  this.item = ref;
                }
              }}
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
