import React, { useEffect, useState } from "react";
import Contact from "./Contact";
import './ContactList.scss'
import { useSelector } from "react-redux";

function ContactList() {
  
  const contacts = useSelector(store=>store.ContactList.contacts)
  
  const [inputValue,setInputValue] = useState('')
  
  const [searchList,setSearchList] = useState([...contacts])  

  useEffect(()=>{
    setSearchList(contacts.filter(e=>e.name.includes(inputValue)))
  },[inputValue,contacts])


  return (
    <>
    <div>
    <h1 className="lists-title">All List</h1>
    <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} type="text"/>
    </div>
    <div className="contact-list">
      {searchList?.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
        />
      ))}
    </div>
    </>
  );
}

export default ContactList;
