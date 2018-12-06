import React, { Component } from "react";

import styles from "./Loading.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class Loading extends Component {
  render() {
    return (
      <div className={cx("LoadingWrap")}>
        <h1>Loading...</h1>
      </div>
    );
  }
}

export default Loading;
