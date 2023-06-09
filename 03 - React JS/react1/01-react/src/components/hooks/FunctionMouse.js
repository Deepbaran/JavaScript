import React, { useState, useEffect } from 'react';

export default function FunctionMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logmousemove = e => {
    setX(e.clientX);
    setY(e.clientY);
  };

  // As an empty array is passed, so useEffect will be called only once after the element is created. And after that it will never be called.
  useEffect(() => {
    console.log('Hello Deep');
    window.addEventListener('mousemove', logmousemove);
  }, []);

  return <div>{`X-${x} Y-${y}`}</div>;
}
