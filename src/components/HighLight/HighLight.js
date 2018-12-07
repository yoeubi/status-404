import React from 'react';
import styles from './HighLight.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const HighLight = (props) => {
    const {title, style} = props;
    return (
        <div className={cx('high-light')} style={style}>
            <span className={cx('title')}>{title}</span>
        </div>
    );
};
HighLight.defaultProps = {
    title : '이름없음'
}

export default HighLight;