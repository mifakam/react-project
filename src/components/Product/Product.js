import React, { Component } from "react";
import Wrapper from "../../hoc/Wrapper";
import AuthContext from "../../context/auth-context";
import "./Product.css";

class Product extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    this.inputRef.current.focus();
  }
  render() {
    return (
      <React.Fragment>
        {this.context.auth ? <p>Logged in</p> : <p>Please Login!</p>}
        <p onClick={this.props.onClick}>Product Title: {this.props.title}</p>
        <p>Product Price: {this.props.price}</p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputRef}
          type="text"
          onChange={this.props.onChange}
          value={this.props.title}
        />
      </React.Fragment>
    );
  }
}

export default Wrapper(Product, "product");
