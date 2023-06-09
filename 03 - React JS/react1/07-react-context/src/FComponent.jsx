import React from "react";
import { useContext } from "react";
import { CounterContext } from "./CounterContext";

function FComponent() {
  const { msg, counter, setCounter } = useContext(CounterContext);
  return (
    <div className="border">
      <h1>Function Component</h1>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <h2>{msg}</h2>
      <hr />
      <hr />
      <Fchild />
    </div>
  );
}

const Fchild = () => {
  const { msg, counter } = useContext(CounterContext); //we did not destructure setCounter as it is not needed here.
  return (
    <div className="border">
      <h1>Funciton Child Component</h1>
      <h2>{counter}</h2>
      <h2>{msg}</h2>
    </div>
  );
};

export default FComponent;
