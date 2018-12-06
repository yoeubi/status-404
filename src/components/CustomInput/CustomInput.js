import React from 'react';
import styles from './CustomInput.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const CustomInput = (props) => {
    const {type, value , onChange , placeholder} = props;
    return (
        <div className={cx('custom-input')}>
            <input type={type} value={value} onChange={onChange} placeholder={placeholder} />
        </div>
    );
};

export default CustomInput;