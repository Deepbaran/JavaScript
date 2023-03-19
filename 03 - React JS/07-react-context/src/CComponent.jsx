import React, { Component } from "react";
import { CounterContext } from "./CounterContext";

export class CComponent extends Component {
  render() {
    return (
      <div className="border">
        <h1>Class Component</h1>
        <h2>{this.props.counter}</h2>
        <CounterContext.Consumer>
          {/* Here we can consume the values passed by the Context API */}
          {value => {
            console.log({ value });
            return (
              <div>
                <h2>{value.msg}</h2>
                <h2>{value.counter}</h2>
              </div>
            );
          }}
        </CounterContext.Consumer>
        <hr />
        <hr />
      </div>
    );
  }
}

export default CComponent;
