import React from 'react';
import styles from './PayResult.module.scss';
import classNames from 'classnames/bind';
import BackHeader from '../BackHeader';
import Nothing from '../Nothing';

const cx = classNames.bind(styles);

const PayResult = (props) => {
    return (
        <div className={cx('pay-result')}>
            <BackHeader title="바로결제 내역" />
            <Nothing style={{marginTop :'5rem'}}>
            <div>
                <p>배달의민족 고객센터 24시간, 연중무휴</p>
                <p>1644-0025</p>
            </div>
            </Nothing>
        </div>
    );
};

export default PayResult;