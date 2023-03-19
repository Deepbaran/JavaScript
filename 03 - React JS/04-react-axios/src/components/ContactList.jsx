import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = props => {
  const deleteContactHandler = id => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map(contact => {
    return (
      <div className="ui items">
        <ContactCard
          contact={contact}
          clickHandler={deleteContactHandler}
          key={contact.id}
        ></ContactCard>
      </div>
    );
  });

  return (
    <div className="main" style={{ marginTop: "50px" }}>
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </h2>
      <div className="ui celled container">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
