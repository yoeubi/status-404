import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Layout.module.scss';
import {ReactComponent as ChevronDown } from '../../img/chevron-down.svg';
import {ReactComponent as Hambergur } from '../../img/grabber.svg';

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
                <Hambergur className={cx('hambergur')} onClick={onUserModal} />
                    
                <div className={cx('addressInput')}>
                    {
                        isLogin ? (
                            <span className={cx('address')}>상계동 666</span>
                        ) : (
                                <span className={cx('address')}>배송지 입력하기</span>
                            )
                    }
                    
                    <ChevronDown className={cx('icon')} alt="down" />
                </div>
            </div>
        );
    }
}

export default Header;