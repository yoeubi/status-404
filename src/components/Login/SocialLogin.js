import React from 'react';
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import { ReactComponent as GitHub } from '../../svg/mark-github.svg';
import {ReactComponent as FacebookLogo } from '../../svg/facebook.svg';

const cx = classNames.bind(styles);

const SocialLogin = ({ children, socialType, facebookLogin}) => {
    return <button className={cx(socialType)} onClick={facebookLogin}>
        <span className={cx("icon")}>
          {socialType === "facebook" ? (
            <FacebookLogo style={{ width: "2.5rem", height: "2.5rem" }} />
          ) : (
            <GitHub style={{ transform: "scale(1.3)" }} />
          )}
        </span>
        <span>{children}</span>
      </button>;
};

export default SocialLogin;