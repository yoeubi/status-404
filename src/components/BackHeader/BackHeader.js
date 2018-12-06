import React from 'react';
import styles from './BackHeader.module.scss';
import classNames from 'classnames/bind';
import { Link } from "react-router-dom";
import { ReactComponent as Left } from "../../svg/chevron-left.svg";

const cx = classNames.bind(styles);


const BackHeader = (props) => {
    const {backAddress, title} = props;
    return (
        <div className={cx('back-header')}>
            <div className={cx('back')}>
                <Link to={backAddress}>
                    <Left style={{ transform: "scale(1.5)" }} />
                </Link>
            </div>
            <div className={cx('title')}>{title}</div>
        </div>
    );
};
BackHeader.defaultProps = {
  backAddress : '/',
  title :'제목없음'
};

export default BackHeader;