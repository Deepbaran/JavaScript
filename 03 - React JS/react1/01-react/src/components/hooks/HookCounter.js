/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

export default function HookCounter() {
  /*
  const channelname = useState('Deepbaran Kar');
  const name = channelname[0];
  const setname = channelname[1];

  const stateHandler = () => {
    // channelname[1]('Deep');
    setname('Deep');
  };
  */

  // Use this method for Hooks. It is industry standard
  // This method uses Array Destructuring
  // First value is the initial value of the state property and the second value is used to update the value of the state.
  const [name, setname] = useState('Deepbaran Kar');
  const [exp, setexp] = useState(0);
  const [counter, setcounter] = useState(0);
  const [counter1, setcounter1] = useState(0);

  const stateHandler = () => {
    setname('Deep');
    setexp(1);
  };

  // The second argument takes a array of value(s) which defines for whose updation should the useEffect method be called again after the creation of the element.
  // The second argument helps in defining for which states's update, useEffect will be called
  // This useEffect now, will only work when counter1 or counter is either created or updated.
  //We can pass empty array too. Then useEffect will only be called when the element is created and not again.
  // By default useEffect will be called when the element is created. After then it depends on the second argument.
  // We can also choose not to pass a second argument. Then useEffect will be called once at the time of creation and everytime a update take place.
  useEffect(() => {
    console.log('useEffect: Deepbaran Kar');
  }, [counter1, counter]);

  const Increment = e => {
    setcounter(counter + 1);
  };

  const Decrement = e => {
    setcounter1(counter1 - 1);
  };

  const Incremented = e => {
    for (let i = 0; i < 10; i++) {
      // We are passing a callback function to setcounter, so that it can retain it's previos value.
      // preCount has the previous value in counter.
      // Whatever value is returned, counter will retain that value.
      // This is so that state retains it's previous state
      // This process is mainly used for loops.
      setcounter(preCount => preCount + 1);
    }
  };

  return (
    <div>
      {name}
      {exp}
      <button onClick={stateHandler}>Click Here</button>
      <button onClick={Increment}>
        Increment
        {counter}
      </button>
      <button onClick={Decrement}>
        Decrement
        {counter1}
      </button>
      <button onClick={Incremented}>Incremented by 10 - {counter}</button>
    </div>
  );
}
