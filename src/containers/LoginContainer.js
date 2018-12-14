import React, { Component } from 'react';
import NewLogin from '../components/NewLogin/NewLogin';
import { withUser } from '../context/UserContext';
import withNoAuth from '../HOC/withNoAuth';

class LoginContainer extends Component {
    render() {
        return (
            <NewLogin {...this.props} />
        );
    }
}

export default withUser( withNoAuth(LoginContainer) );