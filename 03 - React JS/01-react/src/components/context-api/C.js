import React, { Component } from 'react';
// import { mycontext } from './A';
import { Consumer } from './context';

export default class C extends Component {
  render() {
    return (
      <div>
        <h1>Component C</h1>
        {/* <mycontext.Consumer>{data => <h3>{data.roll}</h3>}</mycontext.Consumer> */}
        <Consumer>{data => <h3>{data.roll}</h3>}</Consumer>
      </div>
    );
  }
}
