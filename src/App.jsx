import { useState } from "react";
import Form from "./components/Form";
import ContactList from "./components/ContactList";
import "./App.scss";
import Popup from "./components/Popup";

function App() {
  const [contacts, setContacts] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [editItem, setEditItem] = useState();

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const handleRemoveContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  const handleEditContact = (editedContact) => {
    setEditItem(editedContact);
    setIsShow(true);
  };

  const handleEditSave = (editItem, editedValue) => {
    setContacts((prevContacts) =>
      prevContacts.map((contact) =>
        contact.id === editItem.id ? editedValue : contact
      )
    );
    setIsShow(false)
  };

  const handleEditCancel = () => {
    setIsShow(false)
  }

  return (
    <>
      <div
        onClick={() => setIsShow(false)}
        className={isShow ? "disable" : "enable"}
      ></div>

        <h1 className="title">CONTACT LIST</h1>
      <div className="container">
        <Form isShow={isShow} handleAddContact={handleAddContact} />
        <ContactList
          contacts={contacts}
          handleRemoveContact={handleRemoveContact}
          handleEditContact={handleEditContact}
         
        />

        {isShow && (
          <Popup
            isShow={isShow}
            contact={editItem}
            handleEditSave={handleEditSave}
            handleEditCancel={handleEditCancel}
          />
        )}
      </div>
    </>
  );
}

export default App;
