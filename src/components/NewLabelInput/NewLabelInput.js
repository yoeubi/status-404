import React from "react";
import { ReactComponent as X } from "../../svg/x.svg";
import { ReactComponent as Check } from "../../svg/check.svg";
import styles from "./NewLabelInput.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const NewLabelInput = props => {
  const {
    type,
    name,
    placeholder,
    value,
    onChange,
    onFocus,
    warning,
    onRemove,
    focus,
    valid,
    label
  } = props;
  return (
    <div className={cx("label-input")}>
      <label htmlFor={name} className={cx({ show: focus === name })}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.name, e.target.value)}
        onFocus={onFocus}
        autoComplete="off"
      />
      <p className={cx({ show: value && !valid })}>{warning}</p>
      <span
        className={cx("clear", {
          show: value && (focus === name)
        })}
        onClick={() => onRemove(name)}
      >
        <X style={{ fill: "rgba(0,0,0,1)", transform :'scale(1.3)' }} />
      </span>
      <span className={cx("check", { show: value && focus })}>
        <Check style={{ fill: "#2ac1bc", transform: 'scale(1.3)' }} />
      </span>
    </div>
  );
};

export default NewLabelInput;
