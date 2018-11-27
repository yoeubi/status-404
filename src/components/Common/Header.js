import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Layout.module.scss';
import chevronDown from '../../img/chevron-down.svg';

const cx = classNames.bind(styles);

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLogin: true
        }
    }
    render() {
        const {isLogin} = this.state;
        const {onUserModal} = this.props;
        return (
            <div className={cx('header')}>

                <div className={cx('addressInput')}>
                    {
                        isLogin ? (
                            <span className={cx('address')}>상계동 666</span>
                        ) : (
                                <span className={cx('address')}>배송지 입력하기</span>
                            )
                    }
                    <button onClick={onUserModal}>모달</button>
                    <img className={cx('icon')} src={chevronDown} alt="down" />
                </div>
            </div>
        );
    }
}

export default Header;