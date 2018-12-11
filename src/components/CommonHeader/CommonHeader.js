import React from 'react';
import styles from './CommonHeader.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const CommonHeader = (props) => {
    const {left,middle, right} = props;
    return (
        <div className={cx('header')}>
            <div>
                {left}
            </div>
            <div className={cx('title')}>
                {middle}
            </div>
            <div>
                {right}
            </div>
        </div>
    );
};

export default CommonHeader;