import React, { Component } from 'react';
import MainHeader from './MainHeader';
import styles from './Main.module.scss';
import classNames from 'classnames';


class Main extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLogin: false
        }
    }
    render() {
        const {isLogin} = this.state;
        return (
            <div className={classNames(styles.wrap)}>
                <MainHeader isLogin={isLogin}/>
                <h1>Body</h1>
                <div className={classNames(styles.footer)}>
                    footer
                </div>
            </div>
        );
    }
}

export default Main;