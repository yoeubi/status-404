import React, { Component } from 'react';
import NewLogin from '../components/NewLogin/NewLogin';
import { withUser } from '../context/UserContext';

class LoginContainer extends Component {
    render() {
        return (
            <NewLogin {...this.props} />
        );
    }
}

export default withUser(LoginContainer);