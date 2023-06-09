/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

export default function Hookobject() {
  const [name, setname] = useState({
    firstName: '',
    lastName: ''
  });

  return (
    <form>
      <div>
        <input
          type="text"
          value={name.firstName}
          onChange={e => {
            setname({ ...name, firstName: e.target.value });
          }}
        ></input>
        <input
          type="text"
          value={name.lastName}
          onChange={e => {
            setname({ ...name, lastName: e.target.value });
          }}
        ></input>
      </div>
      {`${name.firstName} ${name.lastName}`}
      {JSON.stringify(name)}
    </form>
  );
}

/*
Unlike, class component, when we update the value of one property of the object in state, the other properties become undefined in case of functional component.
To retain the values of the other properties too, we need to use the spread operator.
Only the property that needs to updated is explicitly shown. Other properties are included in the spread operator before it.
*/

// Spread operator is used to retain any previously already present state value in case of object properties and array elements.

// Spread Operatior in ES6:
/*
let fruit = ['Apple','Orange','Mango'];
console.log(...fruit); // Apple Orange Mango 
*/
