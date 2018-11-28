import React, { Component } from 'react';

const {Provider, Consumer: UserConsumer} = React.createContext();

class UserProvider extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: {
                id: 0,
                nickname: '닉네임 이강산',
                username: '이강산',
                phone:'000-0000-0000',
                is_host: true,
                address1: '서울시 노원구 상계동 666',
                address2: '상계동 666',
                address3: '000-000',
                avatar : null
            }
        }
    }
    render() {
        return (
            <Provider value={this.state}>
                {this.props.children}
            </Provider>
        );
    }
}

function withUser(WrappedComponent){
    return function WithUser(props){
        return (
            <UserConsumer>
                {
                    (value) => <WrappedComponent {...props} {...value}/>
                }
            </UserConsumer>
        )
    }
}

export {
    UserProvider,
    withUser
}