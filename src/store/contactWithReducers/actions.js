import { createAction } from '@reduxjs/toolkit';

// export const createContact = value => ({
//   type: CREATE_CONTACT,
//   payload: value,
// });
// export const deleteContact = value => ({
//   type: DELETE_CONTACT,
//   payload: value,
// });

export const createContactAction = createAction('contact/add_contact');
// console.log('createContactAction :>>', createContactAction.toString());
