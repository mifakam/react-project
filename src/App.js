import React, { Component } from "react";
import ProductList from "./components/ProductList/ProductList";
import Main from "./components/Main/Main";

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

  render() {
    let products = null;
    if (this.state.showProducts) {
      products = (
        <div>
          <ProductList
            products={this.state.products}
            click={this.deleteProductHandler}
            change={this.ChangeTitleHandler}
          />
        </div>
      );
    }
    return (
      <div className="center">
        <button
          onClick={() => {
            this.setState({ showMain: false });
          }}>
          Remove Main
        </button>
        {this.state.showMain ? (
          <Main
            products={this.state.products}
            click={this.toggleProductHandler}
          />
        ) : null}
        {products}
      </div>
    );
  }
}

export default App;
