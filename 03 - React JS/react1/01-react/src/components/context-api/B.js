import React, { Component } from 'react';
// import { mycontext } from './A';
import { Consumer } from './context';

export default class B extends Component {
  render() {
    return (
      <div>
        <div>Component B</div>
        {/* <mycontext.Consumer>{data => <h3>{data.name}</h3>}</mycontext.Consumer> */}
        <Consumer>
          {({ data, handlecheck }) => (
            <div>
              <h3>
                {data.roll}, {data.name}
              </h3>
              <button onClick={handlecheck}>Change Roll no</button>
            </div>
          )}
        </Consumer>
      </div>
    );
  }
}
