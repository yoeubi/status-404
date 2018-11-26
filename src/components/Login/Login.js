import React, { Component } from 'react';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Login extends Component {
    state = {
        show : false
    }
    handleClick = () => {
        console.log('실행중');
        
        this.setState({show: !this.state.show})
    }
    render() {
        const show = this.state.show;
        return (
            <div className={cx('background')}>
                <div className={cx('modal',{show})}></div>
                <button onClick={this.handleClick}>클릭</button>
            </div>
        );
    }
}

export default Login;   