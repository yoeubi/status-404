import React from 'react';
import CommonHeader from '../components/CommonHeader';

const Page = (props) => {
    const {children , ...rest} = props;
    return (
        <div>
            <CommonHeader {...rest} />
            <div style={{ padding: '0 2.5rem', marginTop : '5rem' }}>
                {children}
            </div>
        </div>
    );
};

export default Page;