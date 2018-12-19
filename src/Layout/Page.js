import React from 'react';
import CommonHeader from '../components/CommonHeader';
import styles from './Page.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Page = (props) => {
    const {children , padding , ...rest} = props;
    return (
        <div className={cx('page')}>
            <CommonHeader {...rest}/>
            <div className={cx('content')} style={{padding}}>
                {children}
            </div>
        </div>
    );
};

export default Page;