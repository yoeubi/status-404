import React, { Component } from 'react';
import styles from './Main.module.scss';
import classNames from 'classnames/bind';
import chevronDown from '../../img/chevron-down.svg';

import hansik from '../../img/01_hansik.svg';
import bunsik from '../../img/02_bunsik.svg';
import ilsik from '../../img/03_ilsik.svg';
import chicken from '../../img/04_chicken.svg';
import pizza from '../../img/05_pizza.svg';
import chinese from '../../img/06_chinese.svg';
import zokbal from '../../img/07_zokbal.svg';
import yasik from '../../img/08_yasik.svg';
import zzim from '../../img/09_zzim.svg';
import dosirak from '../../img/10_dosirak.svg';
import desert from '../../img/11_desert.svg';
import fastfood from '../../img/12_fastfood.svg';
import franchise from '../../img/13_franchise.svg';
import matzip from '../../img/14_matzip.svg';

const cx = classNames.bind(styles);

class MainView extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLogin: true,
            lists: [
                {
                    id:0,
                    name: '한식',
                    img: hansik
                },
                {
                    id:1,
                    name: '분식',
                    img: bunsik
                },
                {
                    id:2,
                    name: '돈까스·회·일식',
                    img: ilsik
                },
                {
                    id:3,
                    name: '치킨',
                    img: chicken
                },
                {
                    id:4,
                    name: '피자',
                    img: pizza
                },
                {
                    id:5,
                    name: '중국집',
                    img: chinese
                },
                {
                    id:6,
                    name: '족발·보쌈',
                    img: zokbal
                },
                {
                    id:7,
                    name: '야식',
                    img: yasik
                },
                {
                    id:8,
                    name: '찜·탕',
                    img: zzim
                },
                {
                    id:9,
                    name: '도시락',
                    img: dosirak
                },
                {
                    id:10,
                    name: '카페·디저트',
                    img: desert
                },
                {
                    id:11,
                    name: '패스트푸드',
                    img: fastfood
                },
                {
                    id:12,
                    name: '프랜차이즈',
                    img: franchise
                },
                {
                    id:13,
                    name: '맛집랭킹',
                    img: matzip
                },
            ]
        }
    }
    render() {
        const {isLogin, lists} = this.state;

        return (
            <div className={cx('wrap')}>
                
                <div className={cx('header')}>
                {
                    isLogin ? (
                            <div className={cx('addressInput')}>
                            <span className={cx('address')}>상계동 666</span>
                            <img className={cx('icon')} src={chevronDown} alt="down"/>
                        </div>
                    ):(
                        <p>로그인 및 회원가입 안내 문구</p>
                    )
                }
                    
                </div>

                <div className={cx('body')}>
                    <div className={cx('carousel')}>
                        carousel
                    </div>

                    <ul className={cx('categories')}>
                        {
                            lists.map(c => {
                                return (
                                    <li 
                                        className={cx('item')}
                                        key={c.name}
                                    >
                                        <img src={c.img} alt={c.name}/>
                                        {c.name}
                                    </li>
                                );
                            })
                        }
                    </ul>

                    <div className={cx('findMatzip')}>
                        <div className={cx('inner')}>
                            <span>우리동네 맛집 검색</span> 
                            <span className="icon">icon</span>
                        </div>
                    </div>

                    <ul className={cx('noticeList')}>
                        
                    </ul>
                    
                </div>
                
                <div className={cx('footer')}>
                    footer
                </div>
            </div>
        );
    }
}

export default MainView;