import React from 'react';
import styles from './SideNothing.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SideNothing = (props) => {
    const {left,right, style} = props;
    return (
        <div className={cx('side-nothing')} style={style}>
            <p>{left}</p>
            <p>{right}</p>
        </div>
    );
};

export default SideNothing;