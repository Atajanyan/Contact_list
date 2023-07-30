import React from "react";
import Contact from "./Contact";
import './ContactList.scss'
import { useSelector } from "react-redux";

function ContactList() {

  const contacts = useSelector(store=>store.ContactList.contacts)
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
        />
      ))}
    </div>
  );
}

export default ContactList;
