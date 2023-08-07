import { configureStore } from "@reduxjs/toolkit";
import ContactListReducer from "./ContactListSlice";

export default configureStore({
    reducer:{
        ContactList:ContactListReducer,
    }
})