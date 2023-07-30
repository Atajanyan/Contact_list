import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid'; 
import './Form.scss'
import { useDispatch } from "react-redux";
import { addContact } from "../store/ContactListSlice";

let validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function Form() {
  const initialForm = {
    name: '',
    surname: '',
    email: '',
    phone: '',
    photoUrl: '',
    status: false,
  };


  const dispatch = useDispatch()

  const status = useRef()

  let [contactInfo, setContactInfo] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactInfo({
      ...contactInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contactInfo.name && contactInfo.surname && contactInfo.phone) {
      if(!validEmail.test(contactInfo.email)){
          alert('Fill in valid email')
      }else{
        const newContact = {
          id: uuidv4(),
          ...contactInfo,
        };
        dispatch(addContact(newContact))
        setContactInfo(initialForm);
        status.current.checked = false
      }
    }else{
      alert('Fill all required fields *')
    }
 
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__inputs">
      <label htmlFor="photo">
        photo Url
        <input
          type="text"
          name="photoUrl"
          placeholder="Photo URL"
          value={contactInfo.photoUrl}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="name">
        name *
        <input
         type="text"
         name="name"
         placeholder="Name"
         value={contactInfo.name}
         onChange={handleChange}
         required
        />
      </label>
      <label htmlFor="surname">
        surname *
        <input
        type="text"
        name="surname"
        placeholder="Surname"
        value={contactInfo.surname}
        onChange={handleChange}
        required
        />
      </label>
      <label htmlFor="phone">
        phone number *
        <input
           type="number"
           name="phone"
           placeholder="phone number"
           value={contactInfo.phone}
           onChange={handleChange}
           required
        />
      </label>
      <label htmlFor="email">
        email *
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={contactInfo.email}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="status" className="form__inputs__checkbox">
        status online / offline
        <input
           ref={status}
           type="checkbox"
           name="status"
           placeholder="Status"
           value={contactInfo.status}
            onChange={(e)=>setContactInfo({...contactInfo,status:e.target.checked})}
        />
      </label>
      </div>
      <button className="form__button" type="submit">Add Contact</button>
    </form>
  );
}

export default Form;
