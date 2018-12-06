import React, { Component } from "react";

const { Provider, Consumer: UiConsumer } = React.createContext();

class UiProvider extends Component {
  constructor(props) {
    super(props);

    handleBodyOnModal = () => {
      console.log(handleBodyOnModal);
    };

    this.state = {
      handleBodyOnModal: this.handleBodyOnModal
    };
  }
  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

function withUi(WrappedComponent) {
  return function WithUi(props) {
    return (
      <UiConsumer>
        {value => <WrappedComponent {...value} {...props} />}}
      </UiConsumer>
    );
  };
}
export { UiProvider, withUi };
