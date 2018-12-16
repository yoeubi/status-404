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
    const { match } = this.props;
    const { cpk, spk } = match.params;
    try {
      if (localStorage.getItem("token")) {
        // 로그인
        // 상점 정보 요청
        const { data } = await api.get(`/category/${cpk}/store/${spk}/`);
        // 장바구니 정보 요청
        const { data: cartData } = await api.get(`/cart/items/`);

        // 1. 불러온 정보를 state 에 저장한다.
        // 2. 로딩 인디케이터 flag 를 false 로 설정한다.
        this.setState({
          store: data,
          numberOfCart: cartData.item.length,
          loading: false
        });
      } else {
        // 미로그인
        // 상점 정보 요청
        const { data } = await api.get(`/category/${cpk}/store/${spk}/`);

        // 1. 불러온 정보를 state 에 저장한다.
        // 2. 로딩 인디케이터 flag 를 false 로 설정한다.
        this.setState({
          store: data,
          loading: false
        });
      }
    } catch (error) {
      // TODO :: 에러처리 및 404 처리를 어떻게 할지 논의해 봐야 함
      console.log(error);
    }

    console.log("상점 정보", this.state.store);
    console.log("장바구니 개수 ", this.state.numberOfCart);
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

  addItemToCart = async (food_pk, quantity, side_dishes_pk) => {
    this.setState({
      loading: true
    });
    try {
      const res = await api.post("/cart/items/", {
        food_pk,
        quantity,
        side_dishes_pk
      });
      // 장바구니 정보 요청
      const { data: cartData } = await api.get(`/cart/items/`);

      alert("장바구니에 상품이 담겼습니다.");
      this.setState({
        numberOfCart: cartData.item.length,
        loading: false
      });
      console.log(res.data);
    } catch (error) {
      alert("이미 장바구니에 같은 상품이 담겨 있습니다.");
      this.setState({
        loading: false
      });
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
