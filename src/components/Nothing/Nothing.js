import React from 'react';
import styles from './Nothing.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Nothing = (props) => {
    const {style, children} = props;
    return (
        <div className={cx('nothing')} style={style}>
            {children}
        </div>
    );
};

export default Nothing;