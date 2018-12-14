import React, { Component } from 'react';
import Payment from '../components/Payment';
import withAuth  from '../HOC/withAuth';
import { withUser } from '../context/UserContext';

class PayContainer extends Component {
    render() {
        return (
            <Payment {...this.props} />
        );
    }
}

export default  withUser(withAuth(PayContainer));