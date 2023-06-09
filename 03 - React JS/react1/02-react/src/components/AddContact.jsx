import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    email: ""
  };

  add = e => {
    e.preventDefault(); //To prevent the page from getting reloaded after button click
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are mandatory");
      return;
    }
    this.props.addContactHandler(this.state);
    // console.log(this.state);
    this.setState({ name: "", email: "" }); //This will make the input fields empty once the data is added
  };

  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form action="" className="ui form" onSubmit={this.add}>
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
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddContact;
