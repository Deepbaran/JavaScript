import React, { Component } from 'react';

export default class ClassMouse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0
    };
  }

  /*
  logmousemove = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    });
  }
  */

  componentDidMount() {
    console.log('Hello Deep');
    // Window is a global object. So, it's automatically called
    // windows.addEventListener('<listener_name>',<callback_function>)

    /*
    window.addEventListener('mousemove', logmousemove);
    */

    window.addEventListener('mousemove', e => {
      this.setState({
        x: e.clientX,
        y: e.clientY
      });
    });
  }

  render() {
    return <div>{`X-${this.state.x} Y-${this.state.y}`}</div>;
  }
}
