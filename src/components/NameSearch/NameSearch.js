import React, { Component } from 'react';
import styles from './NameSearch.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class NameSearch extends Component {

    state = {
        result : [
            {
                id : 0,
                keyword : '도미노피자'
            },
            {
                id : 0,
                keyword : '도미노피자'
            },
            {
                id : 0,
                keyword : '도미노피자'
            },
            {
                id : 0,
                keyword : '도미노피자'
            },
            {
                id : 0,
                keyword : '도미노피자'
            },
            {
                id : 0,
                keyword : '도미노피자'
            },
            {
                id : 0,
                keyword : '도미노피자'
            },
            {
                id : 0,
                keyword : '도미노피자'
            },
            {
                id : 0,
                keyword : '도미노피자'
            },
            {
                id : 0,
                keyword : '도미노피자'
            },
            {
                id : 0,
                keyword : '도미노피자'
            },
            
        ]
    }

    componentDidMount() {
        
    }
    
    handleRemove = () => {
        this.setState({ result: [] });
    }

    render() {
        const {
            handleRemove
        } = this;
        return (
            <div>
                <header className={cx('header')}>
                    <span className={cx('close')}>&lt;-</span>
                    <input type="text" placeholder="가게 이름으로 검색"/>
                    <span className={cx('search')}>O</span>
                </header>
                <div className={cx('content')}>
                    <ul>
                        {
                            this.state.result.map((search,index) => (
                                <li key={index}>{search.keyword}<span>X</span></li>
                            ))
                        }
                    </ul>
                    <p><span onClick={handleRemove}>전체삭제</span></p>
                </div>
            </div>
        );
    }
}

export default NameSearch;