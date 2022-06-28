import React, { Component } from "react";
import ProductList from "./components/ProductList/ProductList";
import Main from "./components/Main/Main";
import Wrapper from "./hoc/Wrapper";
import Container from "./hoc/Container";
import AuthContext from "./context/auth-context";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("1111111");
  }

  state = {
    products: [
      { id: 1, title: "book1", price: "10" },
      { id: 2, title: "book2", price: "12" },
      { id: 3, title: "book3", price: "8" },
    ],
    showProducts: false,
    showMain: true,
    auth: false,
  };

  componentDidMount() {
    console.log("app.js componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("app.js shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("app.js  componentDidUpdate");
  }

  ChangeTitleHandler = (event, id) => {
    const productIndex = this.state.products.findIndex((item) => {
      return item.id === id;
    });
    const product = { ...this.state.products[productIndex] };

    product.title = event.target.value;

    const products = [...this.state.products];
    products[productIndex] = product;

    this.setState({
      products: products,
    });
  };

  toggleProductHandler = () => {
    const show = this.state.showProducts;
    this.setState({ showProducts: !show });
  };

  deleteProductHandler = (productIndex) => {
    const products = [...this.state.products];
    products.splice(productIndex, 1);
    this.setState({ products: products });
  };

  loginHandler = () => {
    this.setState({ auth: true });
  };
  render() {
    let products = null;
    if (this.state.showProducts) {
      products = (
        <div>
          <ProductList
            products={this.state.products}
            click={this.deleteProductHandler}
            change={this.ChangeTitleHandler}
            isAuth={this.state.auth}
          />
        </div>
      );
    }
    return (
      <Container>
        <button
          onClick={() => {
            this.setState({ showMain: false });
          }}>
          Remove Main
        </button>
        <AuthContext.Provider
          value={{ auth: this.state.auth, login: this.loginHandler }}>
          {this.state.showMain ? (
            <Main
              products={this.state.products}
              click={this.toggleProductHandler}
            />
          ) : null}
          {products}
        </AuthContext.Provider>
      </Container>
    );
  }
}

export default Wrapper(App, "center");
