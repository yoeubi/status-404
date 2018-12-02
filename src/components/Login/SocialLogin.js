import React from 'react';
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import { ReactComponent as GitHub } from '../../svg/mark-github.svg';

const cx = classNames.bind(styles);

const SocialLogin = ({children, socialType, onClick}) => {
    return (
        <button className={cx(socialType)} onClick={onClick}>
            <span className={cx('icon')}>
                <GitHub style={{ transform: 'scale(1.3)' }} />
            </span>
            <span>
                {children}
            </span>
        </button>
    );
};

export default SocialLogin;