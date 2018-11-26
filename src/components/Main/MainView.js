import React, { Component } from 'react';
import styles from './Main.module.scss';
import classNames from 'classnames';


class MainView extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLogin: true
        }
    }
    render() {
        const {isLogin} = this.state;

        return (
            <div className={classNames(styles.wrap)}>
                
                <div className={classNames(styles.header)}>
                {
                    isLogin ? (
                        <div className={classNames(styles.addressInput)}>
                            <span className="address">상계동 666</span>    
                        </div>
                    ):(
                        <p>로그인 및 회원가입 안내 문구</p>
                    )
                }
                    
                </div>

                <div className={classNames(styles.body)}>
                    body
                </div>
                
                <div className={classNames(styles.footer)}>
                    footer
                </div>
            </div>
        );
    }
}

export default MainView;