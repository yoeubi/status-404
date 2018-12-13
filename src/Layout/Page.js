import React from 'react';
import CommonHeader from '../components/CommonHeader';

const Page = (props) => {
    const {children , padding , ...rest} = props;
    return (
        <div>
            <CommonHeader {...rest} />
            <div style={{ padding, marginTop : '5rem' }}>
                {children}
            </div>
        </div>
    );
};

export default Page;