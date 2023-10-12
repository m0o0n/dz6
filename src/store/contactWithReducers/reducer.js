import { createReducer } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { createContactAction } from './actions';
import { initialState } from './initialState';

export const reducerContact = createReducer(initialState, {
  [createContactAction]: (state, { type, payload }) => {
    return {
      ...state,
      contact: state.contact
        ? [
            ...state.contact,
            {
              ...payload,
              id: nanoid(),
              completed: false,
            },
          ]
        : [
            {
              ...payload,
              id: nanoid(),
              completed: false,
            },
          ],
    };
  },
});
