import React, { Fragment } from 'react';

export const FunctionClick = () => {
  const changeEvent = () => {
    console.log('Hello Event Functional');
  };

  const changeEventAnchor = e => {
    // Prevent the default behaviour of the tag and make it act as we want.
    e.preventDefault(); // e is the event passed
    console.log('Hello Event Functional');
  };

  return (
    // Ways of event handling in Functional Component
    /*
    // 1st way: Use this method if this event is occuring only a single time
    <div>
      <button
        onClick={() => {
          console.log('Hello Event Functional');
        }}
      >
        Click Me
      </button>
    </div>
    */
    /*
    // 2nd way:
    <div>
      <button
        onClick={() => {
          changeEvent();
        }}
      >
        Click Me
      </button>
    </div>
    */
    /*
    // 3rd way:
    <div>
      <button onClick={changeEvent}>Click Me</button>
    </div>
    */

    <Fragment>
      <button onClick={changeEvent}>Click Me</button>
      <a href="https://www.youtube.com/" onClick={changeEventAnchor}>
        Anchor Me
      </a>
    </Fragment>
  );
};
