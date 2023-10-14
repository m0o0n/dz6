import { createSlice } from '@reduxjs/toolkit';
import { createObjectContact } from './helpers';

const initialState = {
  items: [],
  filteredItems: null,
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    createContactAction: {
      prepare: createObjectContact,
      reducer: (state, { payload }) => {
        state.items
          ? state.items.push(payload)
          : (state.items = [payload]);
      },
    },
    deleteContact: (state, { payload }) => {
      state.items = state.items.filter(el => el.id !== payload);
    },

    filterContact: (state, {payload}) => {
      state.filteredItems = payload
      ? state.items.filter(el =>
          el.name.toLowerCase().includes(payload.toLowerCase())
        )
      : null
    }
  },
});

export const contactReducer = contactSlice.reducer;
export const { createContactAction, deleteContact, filterContact } =
  contactSlice.actions;
