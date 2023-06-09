import React, { Component } from 'react';

export class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ProductID: '',
      qty: 0
    };
  }

  addToCart = pid => {
    console.log(pid);
    this.setState({
      ProductID: pid,
      qty: this.state.qty + 1
    });
  };

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.addToCart(1);
          }}
        >
          Add to Cart
        </button>
        <Cart productID={this.state.ProductID} qty={this.state.qty}></Cart>
      </div>
    );
  }
}

export default Product;

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      qty: this.props.qty
    };
  }

  /*
  updateQty = () => {
    this.setState({
      qty: this.state.qty + 1
    });
  };
  */

  static getDerivedStateFromProps(props, state) {
    console.log(`props.qty: ${props.qty}`);
    console.log(`state.qty: ${state.qty}`);
    // This will work once beofre rendering when we are creating the element
    // And then it will keep updating state as the props changes
    if (props.qty !== state.qty) {
      return { qty: props.qty };
    }
    return null; // No changes
  }

  componentDidMount() {
    console.log('Execute after component render');
  }

  componentDidUpdate(prevProps, prevState) {
    // prevProps is the previous value of the props before update
    // prevState is the previous value of the state before update
    // According to as per our requirement, we can give conditions on previous vlues and current values and make accordign changes after update is done.
    // for example, we want to perform a task when (prevState.qty !== this.state.qty), then we can do it.
    console.log('component updated');
  }

  render() {
    return (
      <div>
        <h1>CART: {this.state.qty}</h1>
        {/* <button onClick={this.updateQty}>Update Quantity</button> */}
      </div>
    );
  }
}
