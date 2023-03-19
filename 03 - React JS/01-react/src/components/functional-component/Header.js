import React from "react";

// Functional Component
/*
const Header = () => {
  return <h1>Hello Functional Component</h1>;
};

export default Header;
*/

export const Header = props => {
  // console.log(props);
  return (
    // We can return only one parent tag
    <div>
      <h1>
        {/* Here we write Expressions */}
        Hello {props.name} {props.last}
      </h1>
      {props.children} {/*<p>Deepbaran is a cool guy</p>*/}
    </div>
  );
};

// props has the properties that we passed while using this component
