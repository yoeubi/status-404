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
      selectedMenu: null,
      numberOfCart: null
    };
  }
  async componentDidMount() {
    const { match, history } = this.props;
    const storeId = match.params.id;
    try {
      // 상점 정보 요청
      const res = await api.get(`/store/${storeId}`);
      const { data, status } = res;

      // 장바구니 정보 요청
      const { data: cartData } = await api.get(`/cart/items/`);

      if (status === 404) {
        alert("잘못된 요청입니다. 404");
        // history.goBack();
      }
      // 1. 불러온 정보를 state 에 저장한다.
      // 2. 로딩 인디케이터 flag 를 false 로 설정한다.
      this.setState({
        store: data,
        numberOfCart: cartData.item.length,
        loading: false
      });
    } catch (e) {
      // TODO :: 에러처리 및 404 처리를 어떻게 할지 논의해 봐야 함
      console.log(e);
      alert("잘못된 요청입니다. 500");
      // history.goBack();
    }

    console.log("상점 정보", this.state.store);
    console.log("장바구니 개수 ", this.state.numberOfCart);
  }

  selectedMenuOnModal = menuId => {
    const { store } = this.state;
    store.menu.find(item => {
      const food_set = item.food_set;
      food_set.find(item => {
        if (item.pk === menuId) {
          this.setState({
            selectedMenu: item
          });
        }
      });
    });
  };

  addItemToCart = async (food, quantity, sidedishes_set) => {
    try {
      const res = await api.post("/cart/items/", {
        params: {
          food,
          quantity,
          sidedishes_set
        }
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { loading, store, selectedMenu, numberOfCart } = this.state;
    return (
      <UiProvider>
        <RestaurantDetailView
          selectedMenu={selectedMenu}
          selectedMenuOnModal={this.selectedMenuOnModal}
          addItemToCart={this.addItemToCart}
          numberOfCart={numberOfCart}
          loading={loading}
          store={store}
          {...this.props}
        />
      </UiProvider>
    );
  }
}

export default withRouter(withUser(RestaurantDetail));
