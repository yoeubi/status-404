import React from 'react';
import NewJoin from '../components/NewJoin/NewJoin';
import { withUser } from '../context/UserContext';
import withNoAuth from '../HOC/withNoAuth';

const JoinContainer = (props) => {
    return (
        <NewJoin {...props} />
    );
};

export default withUser( withNoAuth(JoinContainer) );