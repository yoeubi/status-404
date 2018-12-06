import React, { Component } from "react";

const { Provider, Consumer: UiConsumer } = React.createContext();

class UiProvider extends Component {
  constructor(props) {
    super(props);

    this.handleBodyOnModal = () => {
      // 모달 활성화시 body 고정해주는 함수
      console.log("handleBodyOnModal");
    };

    this.state = {
      // 모달 활성화시 body 고정해주는 함수
      handleBodyOnModal: this.handleBodyOnModal
    };
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

function withUi(WrappedComponent) {
  function WithUi(props) {
    return (
      <UiConsumer>
        {value => <WrappedComponent {...value} {...props} />}}
      </UiConsumer>
    );
  }
}
export { UiProvider, withUi };
