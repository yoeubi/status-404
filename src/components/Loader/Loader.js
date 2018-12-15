import React, { PureComponent } from "react";
import styles from "./Loader.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class Loader extends PureComponent {
  render() {
    return (
      <div className={cx('loader-wrap')}>
        <div class={cx("loader")} />
      </div>
    );
  }
}

export default Loader;
