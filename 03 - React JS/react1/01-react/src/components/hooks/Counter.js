import React, { useState } from 'react';

export default function Counter() {
  const [counter, setcounter] = useState(0);

  const buttonHandle = e => {
    setcounter(counter + 1);
  };

  return (
    <div>
      <button onClick={buttonHandle}>COUNTER: {counter}</button>
    </div>
  );
}

/*
export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  buttonHandle = e => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  render() {
    const { counter } = this.state;

    return (
      <div>
        <button onClick={this.buttonHandle}>COUNTER: {counter}</button>
      </div>
    );
  }
}

export default Counter;
*/
