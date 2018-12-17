import React from 'react';
import { Redirect } from 'react-router-dom';

const withNoAuth = WrappedComponent => props => {
    const token = localStorage.getItem('token');
    if (token === null) {
        return <WrappedComponent {...props} />
    } else {
        return <Redirect to="/" />
    }
}

export default withNoAuth;