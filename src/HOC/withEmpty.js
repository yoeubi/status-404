import React from 'react';
import Empty from '../components/Empty';
import Page from '../Layout/Page';
import {ReactComponent as Left} from '../svg/chevron-left.svg';

const withEmpty = WrappedComponent => props => {
    const {cart} = props;
    if(!cart){
        return <Page left={<span style={{ padding: "1.5rem"}} onClick={() => props.history.goBack()}>
                <Left style={{ transform: "scale(1.5)" }} />
              </span>} middle="장바구니">
            <Empty />
          </Page>;
    } else {
        return <WrappedComponent {...props} />
    }
}
export default withEmpty;