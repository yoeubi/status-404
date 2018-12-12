import React from 'react';
import NewJoin from '../components/NewJoin/NewJoin';
import { withUser } from '../context/UserContext';

const JoinContainer = (props) => {
    return (
        <NewJoin {...props} />
    );
};

export default withUser(JoinContainer);