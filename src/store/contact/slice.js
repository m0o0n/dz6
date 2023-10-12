import { createSlice } from '@reduxjs/toolkit';
import { createObjectContact } from './helpers';
import { initialState } from './initialState';

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    createContactAction: {
      prepare: createObjectContact,
      reducer: (state, { payload }) => {
        state.contact
          ? state.contact.push(payload)
          : (state.contact = [payload]);
      },
    },
    deleteContact: (state, { payload }) => {
      state.contact = state.contact.filter(el => el.id !== payload);
    },
    updateContact: (state, { payload }) => {
      state.contact = state.contact.map(el =>
        el.id === payload ? { ...el, completed: !el.completed } : el
      );
    },
  },
});

export const contactReducer = contactSlice.reducer;
export const { createContactAction, deleteContact, updateContact } =
  contactSlice.actions;
