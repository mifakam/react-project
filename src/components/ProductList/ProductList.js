import React, { Component } from "react";
import Product from "../Product/Product";

class ProductList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log("productList shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(newxtProps, nextState) {
    console.log("productList  getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("productList  componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("productList  componentWillUnmount");
  }

  render() {
    return this.props.products.map((item, index) => {
      return (
        <Product
          onClick={() => this.props.click(index)}
          key={item.id}
          title={item.title}
          price={item.price}
          onChange={(event) => this.props.change(event, item.id)}
        />
      );
    });
  }
}

export default ProductList;
