import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import RestaurantDetailPage from "./Pages/RestaurantDetailPage";
import ProfilePage from "./Pages/ProfilePage";
import Login from "./components/Login";
import Join from "./components/Join/Join";
import NameSearch from "./components/NameSearch";
import RestaurantList from "./components/RestaurantList/RestaurantList";
import CartList from "./components/CartList/CartList";
import Payment from "./components/Payment";
import RightNothing from './components/RightNothing';
import CustomCheckBox from "./components/CustomCheckBox/CustomCheckBox";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={"/"} component={MainPage} />
          {/* 라우터는 여기다가 일단 작성하시오 */}
          {/* <Route path="/addressSearch" component={AddressSearch} /> */}
          <Route path="/login" component={Login} />
          <Route path="/join" component={Join} />
          <Route path="/search" component={NameSearch} />
          <Route path="/profile" component={ProfilePage} />
          {/* 레스토랑 리스트 */}
          {/* <Route exact path="/restauant" component={Restaurant} />  */}
          <Route path="/restaurant/:id" component={RestaurantDetailPage} />
          <Route path="/list" component={RestaurantList} />
          <Route path="/cart" component={CartList}  />
          <Route path="/test" component={Payment} />
        </Switch>
      </Router>
    );
  }
}

export default App;
