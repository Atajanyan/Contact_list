import React from "react";
import Contact from "./Contact";
import './ContactList.scss'

function ContactList({
  contacts,
  handleRemoveContact,
  handleEditContact,
  handleEditOk,
  isShow,
  editItem,
}) {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          handleRemoveContact={handleRemoveContact}
          handleEditContact={handleEditContact}
          handleEditOk={handleEditOk}
          isShow={isShow}
        />
      ))}
    </div>
  );
}

export default ContactList;
