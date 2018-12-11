import React from 'react';
import { ReactComponent as X } from "../../svg/x.svg";
import { ReactComponent as Check } from "../../svg/check.svg";
import styles from './NewLabelInput.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const NewLabelInput = (props) => {
    const { type, name, placeholder, value , onChange onFocus , warning , onRemove} = props;
    return (
        <div>
            <label htmlFor={name} className={cx({ show: nickFocus })}>
                닉네임
            </label>
            <input type={type} id={name} name={name} placeholder={placeholder} value={value} onChange={onChange} onFocus={onFucus} />
            <p className={cx({ show: nickname && !nickValid })}>
                {warning}
            </p>
            <span className={cx("clear", {
                show: nickname && nickFocus
            })} onClick={() => onRemove(name)}>
                <X style={{ fill: "rgba(0,0,0,1)" }} />
            </span>
            <span className={cx("check", { show: nickname && nickValid })}>
                <Check style={{ fill: "#2ac1bc" }} />
            </span>
        </div>
    );
};

export default NewLabelInput;