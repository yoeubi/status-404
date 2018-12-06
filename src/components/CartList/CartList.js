import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './CartList.module.scss';
import classNames from 'classnames/bind';
import BackHeader from '../BackHeader';
import CartItem from '../CartItem';
import Nothing from '../Nothing';
import SideNothing from '../SideNothing';

const cx = classNames.bind(styles);


class CartList extends Component {
    render() {
        return (
            <div className={cx('cart-list')}>
                <BackHeader title="장바구니" style={{ borderBottom: '1px solid #eee' }} />
                <Nothing style={{ fontSize: '2rem', background: '#fff' ,marginTop : '5rem' }}>
                    피자네플러스 상계1호점
                </Nothing>
                <div className={cx('cart-item-gap')}>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>
                <Nothing style={{ fontSize: '1.5rem', color: '#2ac1bc', background :'#fff', borderTop:'1px solid #eee'}}>
                    <Link to="/">
                        + 메뉴 더 담으러 가기
                    </Link>
                </Nothing>
                <SideNothing left="주문금액" right="43700원" style={{fontSize :'1.5rem', marginTop:'1rem'}}/>
                <p className={cx('cart-notification')}>
                    배달의 민족은 통신판매중개자이며 통신판매의 당사자가 아닙니다. 따라서
                    배달의 민족은 상품 거래 정보 및 거래에 책임을 지지 않습니다.
                </p>
                <Nothing style={{ fontSize: '1.7rem', background: '#2ac1bc' ,color :'#fff' ,position :'fixed', bottom: 0 , left: 0}}>
                    <Link to="/">
                        2개 43700원 주문하기
                    </Link>
                </Nothing>
            </div>
        );
    }
}

export default CartList;