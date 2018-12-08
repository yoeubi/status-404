import React from 'react';
import styles from './Nothing.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Nothing = (props) => {
    const {style, children, onClick} = props;
    return (
        <div className={cx('nothing')} style={style} onClick={onClick}>
            {children}
        </div>
    );
};
Nothing.defaultProps = {
    style : {},
    children : '',
    onClick : () => {console.warn('Nothing onClick not defined')}
}

export default Nothing;