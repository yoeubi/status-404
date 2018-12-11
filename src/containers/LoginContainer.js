import React, { Component } from 'react';
import NewLogin from '../components/NewLogin/NewLogin';
import {mainAPI} from '../api';
import { withUser } from '../context/MemberContext';

class LoginContainer extends Component {
    render() {
        console.log(this.props);
        console.log(withUser)
        return (
            <NewLogin {...this.props} />
        );
    }
}

export default withUser(LoginContainer);