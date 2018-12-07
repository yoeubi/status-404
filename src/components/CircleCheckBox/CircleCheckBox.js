import React, { Component } from 'react';
import styles from './CircleCheckBox.module.scss';
import classNames from 'classnames/bind';
import {ReactComponent as Circle} from '../../svg/primitive-dot.svg';

const cx = classNames.bind(styles);

class CircleCheckBox extends Component {
    render() {
        const { text, style, handleToggle, disabled } = this.props;
        return <div className={cx("circle-checkbox")} style={style} onClick={handleToggle}>
            <div className={cx("check", { disabled })}>
              <Circle style={{ fill: "#fff", height: "16px", width: "16px" }} />
              <p className={cx("text")}>{text}</p>
            </div>
          </div>;
    }
}
CircleCheckBox.defaultProps = {
  text: "",
  right: "",
  style : {}
};

export default CircleCheckBox;