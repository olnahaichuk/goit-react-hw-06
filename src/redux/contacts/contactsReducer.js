import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  contacts: [],
};

const profileSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
    setContact: (state, action) => {
      state.contacts = action.payload;
    },
  },
});

export const contactsReducer = profileSlice.reducer;
export const { addContact, deleteContact, setContact } = profileSlice.actions;

