import { nanoid } from '@reduxjs/toolkit';

export const createObjectContact = data => {
  return {
    payload: {
      ...data,
      id: nanoid(),
      completed: false,
    },
  };
};
