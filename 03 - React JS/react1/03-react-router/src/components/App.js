import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 } from "uuid";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  //With this code we are checking if there is anything stored in the localStorage or not.
  //If there is something stored then that will be set as contacts state after page refresh and if nothing is there then empty array will assigned.
  const savedContacts = localStorage.getItem(LOCAL_STORAGE_KEY)
    ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    : [];

  const [contacts, setContacts] = useState(savedContacts);

  const addContactHandler = contact => {
    setContacts([...contacts, { id: v4(), ...contact }]);
  };

  const removeContactHandler = id => {
    const newContactList = contacts.filter(contact => contact.id !== id);
    setContacts(newContactList);
  };

  // useEffect(() => {
  //   const retrievedContacts = JSON.parse(
  //     localStorage.getItem(LOCAL_STORAGE_KEY)
  //   );
  //   console.log(retrievedContacts);
  //   if (retrievedContacts) setContacts([...retrievedContacts]);
  // }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route
            path="/"
            element={
              <ContactList
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            }
          />
          <Route path="/contact/:id" element={<ContactDetail />} />
          {/*We need to put all components in Route that are going to be used with some react-router-dom method so that react-router can track them.*/}
          {/* This path thakes the id parameter */}
        </Routes>
        {/* <AddContact addContactHandler={addContactHandler} /> */}
        {/* <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
      </Router>
    </div>
  );
}

export default App;

//React internally uses React.createElement in order to create a component.
//So, each time we visit the route or url to a particular component React re-renders that component every time using React.createElemetn.
//This will cause a performance issue. Because we just want to update the component which is created once. We do not want to create the component everytime.
//That's why we use the render prop to pass the props to the components in route.
