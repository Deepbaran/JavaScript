import React from 'react';

function Inline() {
  const heading = {
    color: 'red',
    fontSize: '26px'
  };

  return (
    <div>
      <h1 style={heading}>Hello Inline Stylesheet</h1>
    </div>
  );
}

export default Inline;
