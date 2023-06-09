/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import B from './B';
import C from './C';
import { Provider } from './context';

// createContext takes a default value if a value is not passed
/*
export const mycontext = React.createContext();
*/

export default class A extends Component {
  state = {
    name: 'Deepbaran Kar',
    roll: 19
  };

  handleClickContext = () => {
    this.setState({
      roll: this.state.roll + 1
    });
  };

  render() {
    const contextValue = {
      data: this.state,
      handlecheck: this.handleClickContext
    };

    return (
      <div>
        <h1>Component A</h1>
        {/* <mycontext.Provider value={this.state}>
          <B />
          <C />
        </mycontext.Provider> */}
        <Provider value={contextValue}>
          <B />
          <C />
        </Provider>
      </div>
    );
  }
}
