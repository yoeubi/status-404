import React, { Component } from "react";
import RestaurantSearch from "../components/RestaurantSearch/RestaurantSearch";

export default class RestaurantSearchContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      searchList: ["김밥"]
    };
  }

  handleUserInput = e => {
    const userInput = e.target.value;
    this.setState({
      userInput
    });
  };

  handleSubmitBtn = () => {
    const { searchList, userInput } = this.props;
    this.state.searchList.push(userInput);
    // this.setState({

    // });
    console.log(searchList);
  };

  render() {
    const { userInput } = this.props;
    return (
      <div>
        <RestaurantSearch
          onSubmitBtn={() => this.handleSubmitBtn()}
          onUserInput={e => this.handleUserInput(e)}
          userInput={userInput}
        />
      </div>
    );
  }
}
