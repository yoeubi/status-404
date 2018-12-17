import React, { Component } from "react";
import RestaurantDetailView from "../components/RestaurantDetail/RestaurantDetailView";
import { UiProvider } from "../context/UiContext";
import api from "../api/mainAPI";
import { withUser } from "../context/UserContext";
import { withRouter } from "react-router-dom";

class RestaurantDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      store: null,
      selectedMenu: null
    };
  }
  async componentDidMount() {
    const { match } = this.props;
    const { cpk, spk } = match.params;
    try {
      const { data } = await api.get(`/category/${cpk}/store/${spk}/`);

      this.setState({
        store: data,
        loading: false
      });
    } catch (error) {
      // TODO :: 에러처리 및 404 처리를 어떻게 할지 논의해 봐야 함
      console.log(error);
    }

    console.log("상점 정보", this.state.store);
  }

  selectedMenuOnModal = menuId => {
    const { store } = this.state;
    store.menu.forEach(item => {
      const food_set = item.food_set;
      food_set.forEach(item => {
        if (item.pk === menuId) {
          this.setState({
            selectedMenu: item
          });
        }
      });
    });
  };

  addItemToCart = async item => {
    const { addCart } = this.props;

    this.setState({
      loading: true
    });

    await addCart(item);

    this.setState({
      loading: false
    });
  };

  render() {
    const { loading, store, selectedMenu } = this.state;
    const { cart } = this.props;

    return (
      <UiProvider>
        <RestaurantDetailView
          selectedMenu={selectedMenu}
          selectedMenuOnModal={this.selectedMenuOnModal}
          addItemToCart={this.addItemToCart}
          cart={cart}
          loading={loading}
          store={store}
          {...this.props}
        />
      </UiProvider>
    );
  }
}

export default withRouter(withUser(RestaurantDetail));
