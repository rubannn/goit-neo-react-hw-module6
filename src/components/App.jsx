import { useEffect, useState } from "react";

import "./App.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";


const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];


const getItemsFromStorage = () => {
  const contacts = localStorage.getItem("contacts");
  if (contacts) {
    return JSON.parse(contacts);
  }
  localStorage.setItem("contacts", JSON.stringify(defaultContacts));
  return defaultContacts;
}

const setItemsToStorage = (items) => {
  localStorage.setItem("contacts", JSON.stringify(items));
}

function App() {
  const [filter, setFilter] = useState("");
  const [contacts, setContacts] = useState(getItemsFromStorage);

  useEffect(() => {
    setItemsToStorage(contacts);
  }, [contacts]);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const onAddContact = (contact) => {
    setContacts((prev) => [...prev, contact]);
  };
  const onDeleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };
  return (
    <div className="page">
      <h1>Phonebook</h1>

      <div className="layout">
        <div className="left">
          <ContactForm onSubmit={onAddContact} />
        </div>

        <div className="right">
          {contacts.length > 0 ? (
            <>
              <SearchBox value={filter} onChange={setFilter} />
              <ContactList
                contacts={filteredContacts}
                onDelete={onDeleteContact}
              />
            </>
          ) : (
            <h3>No records</h3>
          )}
        </div>
      </div>
    </div>
  );

}

export default App;
