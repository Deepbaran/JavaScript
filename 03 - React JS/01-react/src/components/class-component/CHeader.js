import React from "react";
import Testing from "../key/Testing";

// Class component
class CHeader extends React.Component {
  // State without constructor
  state = {
    users: [
      { id: 1, name: "Brian", class: "A" },
      { id: 2, name: "Fernando", class: "B" }
    ]
  };

  // Class component has a render() method unlike Functional component
  render() {
    /*
    const user = this.state.users.map(user => (
      <h2>
        {user.id}
        {user.name}
        {user.class}
      </h2>
    ));
    */

    return (
      <React.Fragment>
        <h1>
          Hello {this.props.name} {this.props.last}
        </h1>
        {this.props.children} {/*<p>Deepbaran is a cool guy</p>*/}
        {this.state.users.map(user => (
          /*
          <h2 key={user.id}>
            {user.id}
            {user.name}
            {user.class}
          </h2> 
          */
          <Testing key={user.id} value={user.id}></Testing>
        ))}
        {/* {user} */}
      </React.Fragment>
    );
  }
}

export default CHeader;
