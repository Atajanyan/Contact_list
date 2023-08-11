import { createSlice } from "@reduxjs/toolkit";

const initialForm = {
    name: '',
    surname: '',
    email: '',
    phone: '',
    photoUrl: '',
    status: false,
    isFavorite:false,
  };

const ContactListSlice = createSlice({
  name: "contactList",
  initialState: {
    contact: initialForm,
    contacts: [],
    editContact: {},
    isShow: false,
  },
  reducers: {
    change(state, action) {
      if (action.payload.name === "status") {
        state.contact = {
          ...state.contact,
          [action.payload.name]: action.payload.checked,
        };
      } else {
        state.contact = {
          ...state.contact,
          [action.payload.name]: action.payload.value,
        };
      }
    },

    addFavorite(state,action){
        state.contacts = state.contacts.map(contact => 
            contact.id === action.payload.id?{...contact,isFavorite:!contact.isFavorite}:contact)
    },

    addContact(state, action) {
      state.contacts.push(action.payload);
      state.contact = initialForm
    },

    editContact(state, action) {
      state.editContact = action.payload;
      state.isShow = true;
    },

    saveEditContact(state, action) {
      state.contacts = state.contacts.map((contact) =>
        contact.id === state.editContact.id ? action.payload : contact
      );
      state.isShow = false;
    },

    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload.id
      );
    },

    IsHidePopup(state) {
      state.isShow = false;
    },

  },
  
});

export const {
  addContact,
  deleteContact,
  editContact,
  IsHidePopup,
  saveEditContact,
  change,
  addFavorite,
} = ContactListSlice.actions;
export default ContactListSlice.reducer;
