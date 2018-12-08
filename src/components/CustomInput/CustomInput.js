import React from 'react';
import styles from './CustomInput.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const CustomInput = (props) => {
    const {type, value , onChange , placeholder , name } = props;
    return (
        <div className={cx('custom-input')}>
            <input type={type} value={value} name={name} onChange={onChange} placeholder={placeholder} />
        </div>
    );
};
CustomInput.defaultProps = {
    type : 'text',
    value : '', 
    onChange : () => console.warn('onChange not defined') , 
    placeholder : '', 
    name : ''
}

export default CustomInput;