import React from "react";
import ContactCard from "./ContactCard";

const ContactList = props => {
  console.log(props);

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

  return <div className="ui container">{renderContactList}</div>;
};

export default ContactList;
