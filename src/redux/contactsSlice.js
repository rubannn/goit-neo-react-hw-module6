import { createSlice } from "@reduxjs/toolkit";
import contacts from "../data/contacts.json";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [...contacts],
  },
  reducers: {
    addContact: (state, { payload }) => {
      state.items.push(payload);
    },

    deleteContact: (state, { payload: id }) => {
      state.items = state.items.filter((contact) => contact.id !== id);
    },
  },
});

export const { reducer } = contactsSlice;
export const { addContact, deleteContact } = contactsSlice.actions;
