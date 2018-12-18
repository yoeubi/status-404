import React, { Component } from 'react';
import NewList from '../components/NewList/NewList';
import {mainAPI} from '../api';
import axios from 'axios';

class ListContainer extends Component {
  state = {
    pk: "",
    page: "",
    count: "",
    next: "",
    previous: "",
    results: null,
    loading: true
  };
  async componentDidMount() {
    await this.pullList();
  }
  async componentDidUpdate(prevProps, prevState) {
    const {
      match: { params }
    } = this.props;
    if (params.pk !== prevProps.match.params.pk) {
      this.setState({ loading: true });
      await this.pullList();
    }
  }
  async pullList() {
    try {
      const {
        match: {
          params: { pk }
        },
        location
      } = this.props;
      const query = new URLSearchParams(location.search);
      const page = query.get("page");
      const { data } = await mainAPI.get(`/category/${pk}/`);
      this.setState({
        pk,
        page,
        ...data,
        loading: false
      });
      console.log(data);
    } catch (e) {
      console.log("스토어 리스트 에러");
    }
  }
    loadMore = async () => {
    const { next } = this.state;
    if (this.state) {
      const { data } = await axios.get(next);
      this.setState({
          ...data,
          results : this.state.results.concat(data.results)
      })
    }
  }
  render() {
    const { loading, ...rest } = this.state;
    return <NewList {...this.props} {...rest} loading={loading} loadMore={this.loadMore} />;
  }
}

export default ListContainer;