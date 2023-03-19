import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactCard = props => {
  const { id, name, email } = props.contact;

  return (
    <div className="item" style={{ marginTop: "50px" }}>
      <img src={user} alt="user" className="ui avatar image" />
      <div className="content">
        <Link to={`/contact/${id}`} state={props.contact}>
          <div className="header"> {name} </div>
          <div>{email}</div>
        </Link>
      </div>
      <Link to="/edit" state={props.contact}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHandler(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
