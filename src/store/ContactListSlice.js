import { createSlice } from "@reduxjs/toolkit";

const ContactListSlice = createSlice({
    name:'contactList',
    initialState:{
        contacts:[],
        editContact:{},
        isShow:false,
    },
    reducers:{
        addContact(state,action){
            state.contacts.push(action.payload)
        },

        editContact(state,action){
            state.editContact = action.payload 
            state.isShow = true
        },

        saveEditContact(state,action    ){
            state.contacts = state.contacts.map(contact => contact.id === state.editContact.id?action.payload:contact)
            state.isShow = false
        },

        deleteContact(state,action){
           state.contacts = state.contacts.filter((contact) => contact.id !== action.payload.id)
        },

        IsHidePopup(state){
            state.isShow = false
        }
    }
})

export const {addContact,deleteContact,editContact,IsHidePopup,saveEditContact} = ContactListSlice.actions;
export default ContactListSlice.reducer