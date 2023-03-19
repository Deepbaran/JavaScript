import React, { Component } from 'react';

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      address: ''
    };
  }

  handleUsername = event => {
    this.setState({
      // Take the value from the target where the event is happening
      username: event.target.value
    });
  };

  handleAddress = event => {
    this.setState({
      address: event.target.value
    });
  };

  handleSubmit = event => {
    alert(`${this.state.username} ${this.state.address}`);
    event.preventDefault(); // This stops the form from reloading by default
  };

  render() {
    const { username, address } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={this.handleUsername}
          ></input>
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            value={address}
            onChange={this.handleAddress}
          ></input>
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    );
  }
}

export default Form;
