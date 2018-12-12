import React, { Component } from "react";
import {Link} from 'react-router-dom';
import {ReactComponent as Left} from '../../svg/chevron-left.svg';
import Page from "../../Layout/Page";

class NewJoin extends Component {
  render() {
    return (
      <Page left={
          <Link to="/" style={{ padding: "1.5rem" }}>
            <Left style={{ transform: "scale(1.5)" }} />
          </Link>
        }
        middle="회원가입"
        right={
          <Link to="/" style={{ padding: "1.5rem" }}>
            완료
          </Link>
        }
      >
      
      </Page>
    );
  }
}

export default NewJoin;
