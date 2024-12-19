import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface ContactsState {
  contacts: Contact[];
}

const initialState: ContactsState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action: PayloadAction<{ name: string; email: string; phone: string }>) {
      const newContact = {
        id: state.contacts.length + 1,
        ...action.payload,
      };
      state.contacts.push(newContact);
    },
    editContact(state, action: PayloadAction<Contact>) {
      const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
    },
    removeContact: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, editContact, removeContact } = contactSlice.actions;
export default contactSlice.reducer;
