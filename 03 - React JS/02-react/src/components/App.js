import React, { useState, useEffect } from "react";
import { v4 } from "uuid";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  // const contacts = [
  //   {
  //     id: "1",
  //     name: "Deep",
  //     email: "deep@gmail.com"
  //   },
  //   {
  //     id: "2",
  //     name: "Baran",
  //     email: "baran@gmail.com"
  //   }
  // ];
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  //useState will have what will be the initial value of the state contacts, which is defined as empty array here.
  //To change it's value we will use setContacts

  const addContactHandler = contact => {
    console.log(contact);
    //update the state
    setContacts([...contacts, { id: v4(), ...contact }]);
    //setContacts(All the previous values, new value)
    //We add all the previous values in setState otherwise we will lose the previous values once the state gets updated.
    //As containers is initialized as an empty array using useState, so always pass an array to setState
  };

  const removeContactHandler = id => {
    const newContactList = contacts.filter(contact => contact.id !== id);
    setContacts(newContactList);
  };

  //To store the data/persist the data once a change occurs, we will use the local storage.
  //So, when the value changes, useEffect helps to render the component again.
  //It takes a callback and dependenciesas an array.
  //Dependencies are nothing but the states and if those states change then useEffect helps in rendering the components.
  //useEffect will run the callback as soon as the dependencies change.

  //load the data stored in the localStorage when needed to re-render the components
  useEffect(() => {
    const retrievedContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    ); //Parding the JSON string
    if (retrievedContacts) setContacts([...retrievedContacts]);
  }, []); //Keeping the dependencies as empty because we want this to run whenever the component gets mounted

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    //localStorage takes a key-value pair.
    //We need to pass the value as a String. So we converted the contacts array to a JSON string.
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;

//<Header />
//<Header> props.children </Header>
