import React, { Component } from "react";

const { Provider, Consumer: UserConsumer } = React.createContext();

class UserProvider extends Component {
  state = {
    user: null,
    address : null,
    handleAddress: this.handleAddress.bind(this)
  };
  handleAddress(address) {
    this.setState({
      // FIXME :: user 상태 업데이트를 불변값으로 하기 위해서 ImmutableJS 로 바꿔야함
      user: {
        ...this.state.user,
        address
      }
    });
  }
  login(){
      // api 요청을 해서 유저에 대한 정보를 받는다.
    localStorage.setItem('token', '')
  }
  logout(){
      localStorage.removeItem('token');
      this.setState({
          user : null
      })
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

function withUser(WrappedComponent) {
  return function WithUser(props) {
    return (
      <UserConsumer>
        {value => <WrappedComponent {...props} {...value} />}
      </UserConsumer>
    );
  };
}

export { UserProvider, UserConsumer, withUser };
