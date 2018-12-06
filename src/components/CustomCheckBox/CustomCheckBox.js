import React, { Component } from "react";
import styles from "./CustomCheckBox.module.scss";
import classNames from "classnames/bind";
import { ReactComponent as Check } from "../../svg/check.svg";

const cx = classNames.bind(styles);

class CustomCheckBox extends Component {
  state = {
    disabled: true
  };
  handleToggle = () => {
    this.setState({ disabled: !this.state.disabled });
  };
  render() {
    const { text, right } = this.props;
    const { disabled } = this.state;
    return (
      <div className={cx("custom-checkbox")}>
        <div className={cx("check", { disabled })} onClick={this.handleToggle}>
          <Check style={{ fill: "#fff" }} />
          <p className={cx("text")}>{text}</p>
        </div>
        <p className={cx("right")}>{right}</p>
      </div>
    );
  }
}
CustomCheckBox.defaultProps = {
  text: "",
  right: ""
};

export default CustomCheckBox;
