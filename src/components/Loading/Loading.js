import React, { Component } from "react";
import { withUser } from "../../context/UserContext";

import styles from "./Loading.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class Loading extends Component {
  componentDidMount() {
    // const { handleBodyOnMoal } = this.props;
    // handleBodyOnMoal("open");
  }
  componentWillUnmount() {
    // const { handleBodyOnMoal } = this.props;
    // handleBodyOnMoal("close");
  }

  render() {
    return (
      <div className={cx("LoadingWrap")}>
        <div className={cx("ImgSpinner")} />
      </div>
    );
  }
}

export default withUser(Loading);
