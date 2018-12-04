import React from 'react';
import styles from './BlackCurtain.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const BlackCurtain = (props) => {
    const {show, onShowModal} = props;
    return (
        <div className={cx('black', { show })} onClick={onShowModal}>
            
        </div>
    );
};

export default BlackCurtain;