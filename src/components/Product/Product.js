import React, { Component } from "react";

import "./Product.css";

class Product extends Component {
  render() {
    return (
      <div className="product">
        <p onClick={this.props.onClick}>Product Title: {this.props.title}</p>
        <p>Product Price: {this.props.price}</p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.onChange}
          value={this.props.title}
        />
      </div>
    );
  }
}

export default Product;
