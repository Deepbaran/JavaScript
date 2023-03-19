import React, { Component } from 'react';
import axios from 'axios';

export class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userid: '',
      title: '',
      body: ''
    };
  }

  changeHandler = e => {
    // As Object contains name-value pairs, so
    // To access the name of the target property triggering the event -> e.target.name
    // To access the value of the target property triggering the event -> e.target.value
    this.setState({
      // [e.target.name] is actually an array. It holds the property names of the state that are triggering the array
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post('https://jsonplaceholder.typicode.com/posts', this.state)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { userid, title, body } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>userid</label>
          <input
            type="text"
            value={userid}
            name="userid"
            onChange={this.changeHandler}
          ></input>
        </div>
        <div>
          <label>title</label>
          <input
            type="text"
            value={title}
            name="title"
            onChange={this.changeHandler}
          ></input>
        </div>
        <div>
          <label>Body</label>
          <input
            type="text"
            value={body}
            name="body"
            onChange={this.changeHandler}
          ></input>
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    );
  }
}

export default PostForm;
