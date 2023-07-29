import React, { useRef, useState } from "react";
import "./Popup.scss"

function Popup({ contact, onCancel, isShow, handleEditSave, handleEditCancel }) {
    const [editedContact, setEditedContact] = useState(contact);
    const editStatus = useRef()

  

    const handleChange = (e) => {
      const { name, value } = e.target;
      setEditedContact({
        ...editedContact,
        [name]: value,
      });
    };
    
  
  return (
    <div className={isShow ? "popup" : "popup--block"}>
      <h2>Edit Contact</h2>
      <form className="popup__form">
      <input
          type="text"
          name="photoUrl"
          value={editedContact.photoUrl}
          placeholder="Photo Url"
          onChange={handleChange}
        />
        <input
          type="text"
          name="name"
          value={editedContact.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="surname"
          value={editedContact.surname}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          value={editedContact.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          value={editedContact.phone}
          onChange={handleChange}
          required
        />
        <input
          ref={editStatus}
          type="checkbox"
          name="status"
          value={editedContact.status}
          onChange={(e)=>setEditedContact({...editedContact,status:e.target.checked})}
          />
          <div className="popup__actions">
             <div className="popup__button" onClick={()=>handleEditSave(contact,editedContact)}>Save</div>
             <div className="popup__button popup__button--cancel" onClick={handleEditCancel}>Cancel</div>
          </div>
      </form>
    </div>
  );
}

export default Popup;
