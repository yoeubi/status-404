import React, { Component } from 'react';
import PayResult from '../components/PayResult/PayResult';
import withAuth from '../HOC/withAuth';
import { withUser } from '../context/UserContext';

class PayResultContainer extends Component {
    render() {
        return (
            <PayResult {...this.props} />
        );
    }
}

export default withUser(withAuth(PayResultContainer));