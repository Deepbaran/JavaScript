import React, { Component } from "react";

class EditContact extends Component {
  constructor(props) {
    super(props);
    // const { id, name, email } = props.location.state.contact; //This is not supported anymore
    // this.state = {
    //   id: id,
    //   name: name,
    //   email: email
    // }
    //AS the key and value name are same, so using ES6 we can write it like below.
    // this.state = {
    //   id,
    //   name,
    //   email
    // };
  }

  update = e => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are mandatory");
      return;
    }
    this.props.updateContactHandler(this.state);
    this.setState({ name: "", email: "" });
  };

  render() {
    return (
      <div className="ui main">
        <h2>Edit Contact</h2>
        <form action="" className="ui form" onSubmit={this.update}>
          <div className="field">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              id=""
              placeholder="Name"
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              id=""
              placeholder="Email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
          </div>
          <div>
            <button type="submit" className="ui button blue">
              Update
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditContact;
