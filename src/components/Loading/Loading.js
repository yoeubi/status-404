import React, { Component } from "react";

import styles from "./Loading.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class Loading extends Component {
  render() {
    return (
      <div className={cx("LoadingWrap")}>
        <div className={cx("ImgSpinner")} />
      </div>
    );
  }
}

export default Loading;
