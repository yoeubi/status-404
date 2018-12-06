import React, { Component } from 'react';
import styles from './Payment.scss';
import classNames from 'classnames/bind';
import Nothing from '../Nothing';
import BackHeader from '../BackHeader';

const cx = classNames.bind(styles);


class Payment extends Component {
    render() {
        return (
            <div className={cx('payment')}>
                <BackHeader backAddress="/" title="" />
                <Nothing style={{ background:'#2fc0be', color :'#fff', fontSize :'2rem'}}>
                    23400원 결제하기
                </Nothing>
            </div>
        );
    }
}

export default Payment;