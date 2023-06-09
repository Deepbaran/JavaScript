import React from 'react';
import './Style.css';

function Stylesheet(props) {
  let className = props.isvalue ? 'demo1' : 'demo2';
  return (
    // Using template literals, we can give multiple classes
    <div>
      <h1 className={`${className} demo3`}>Hello Stylesheet</h1>
    </div>
  );
}

export default Stylesheet;
