import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RestaurantSearchContainer from "./containers/RestaurantSearchContainer";
import {
  Main,
  Login,
  Join,
  Order,
  Profile,
  Detail,
  List,
  Cart,
  Pay,
  Result
} from "./Pages";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={"/"} component={Main} />
          {/* 라우터는 여기다가 일단 작성하시오 */}
          <Route path="/login" component={Login} />
          <Route path="/join" component={Join} />
          {/* <Route path="/search" component={Search} /> */}
          <Route path="/profile" component={Profile} />
          <Route
            path="/restaurant-search"
            component={RestaurantSearchContainer}
          />
          {/* 레스토랑 리스트 */}
          {/* <Route exact path="/restauant" component={Restaurant} />  */}
          <Route path="/restaurant/:id" component={Detail} />
          <Route path="/list" component={List} />
          <Route path="/cart" component={Cart} />
          <Route path="/pay" component={Pay} />
          <Route path="/myorder" component={Order} />
          <Route path="/payresult" component={Result} />
        </Switch>
      </Router>
    );
  }
}

export default App;
