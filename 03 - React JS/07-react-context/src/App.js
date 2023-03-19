import React, { useState } from "react";
import "./App.css";
import CComponent from "./CComponent";
import FComponent from "./FComponent";
import { CounterContext } from "./CounterContext";

function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="App border">
      <h1>App Component</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <hr />
      <hr />
      <CounterContext.Provider
        value={{ msg: "Hello Context", counter, setCounter }}
      >
        {/* Whatever the child elements we want to pass the values from the counterContext, we add them under here */}
        {/* We want that value of the value attribute to get consumed by the Function and Class Components */}
        {/* As counter has been turned into a global state, we need to pass setCounter through the API too, so that the state of counter can be updated from any component that has access to it. */}
        <FComponent />
        <hr />
        <hr />
        <CComponent />
      </CounterContext.Provider>
    </div>
  );
}

export default App;
