/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

export default function HookArray() {
  const [items, setitems] = useState([]);

  const addItem = e => {
    // Here setitem is creating a array of object with properties id and value.
    // Here each element of the items array is object with properties id and value.
    // The spread operator is passed as the first argument so that the already present elements in the items array are retained.
    // In this way, even after setitem, all the elements of the array along with the new elemnt is retained.
    setitems([
      // Already present elements of the items array
      ...items,
      // Newly added element of the items array
      {
        id: items.length,
        value: Math.floor(Math.random() * 10)
      }
    ]);
    // console.log(items);
  };

  return (
    <div>
      <button onClick={addItem}>Generate Random Numbers</button>
      <ul>
        {items.map(item => (
          <li key={item.value}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}
