import React, { Component } from "react";
import PayResult from "../components/PayResult/PayResult";
import withAuth from "../HOC/withAuth";
import { withUser } from "../context/UserContext";

class PayResultContainer extends Component {
  state = {
    loading: true
  };
  componentDidMount() {
    if (this.props.temp) {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { loading } = this.state;
    return <PayResult {...this.props} loading={loading} />;
  }
}

export default withUser(withAuth(PayResultContainer));
