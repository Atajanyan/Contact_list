import React, { useState } from "react";
import Contact from "./Contact";
import { useSelector } from "react-redux";
import Search from "./Search";
import Pagination from "./Pagination";
import "./ContactList.scss";

function ContactList({ favorites }) {
  const contacts = useSelector((store) => store.ContactList.contacts);
  const [searchList, setSearchList] = useState(favorites || [...contacts]);
  const [inputValue, setInputValue] = useState("");
  const [pagination, setPagination] = useState(0);
  const [page, setPage] = useState(1);
  const contactsInPage = 2;

  return (
    <>
      <div>
        <h1 className="lists-title">{favorites ? "Favorites" : "All List"}</h1>
        <Search
          inputValue={inputValue}
          setInputValue={setInputValue}
          contacts={contacts}
          searchList={favorites || contacts}
          setSearchList={setSearchList}
        />
      </div>
      <div className="contact-list">
        {(searchList.length > contactsInPage
          ? searchList.slice(pagination, contactsInPage + pagination)
          : searchList
        ).map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
      {searchList.length? <Pagination
          inputValue={inputValue}
          page={page}
          setPage={setPage}
          contactInPage={contactsInPage}
          setPagination={setPagination}
          searchList={searchList}
        />:''}
    </>
  );
}

export default ContactList;
