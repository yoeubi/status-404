import React, { Component } from 'react';

const {Provider, Consumer: UserConsumer} = React.createContext();

class UserProvider extends Component {
    constructor(props){
        super(props);

        this.handleAddress = (address) => {
            this.setState({
                // FIXME :: user 상태 업데이트를 불변값으로 하기 위해서 ImmutableJS 로 바꿔야함
                user: {
                    ...this.state.user,
                    address
                }
            })
        }

        this.state = {
            user: {
                id: 0,
                nickname: '닉네임 이강산',
                username: '이강산',
                phone:'000-0000-0000',
                is_host: true,
                address: null,
                avatar : null
            },
            handleAddress: this.handleAddress
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