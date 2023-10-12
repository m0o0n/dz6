import { useState } from 'react';
import FormCreateContact from '../Forms/CreateContact/CreateContact';
import Contact from '../Contact/Contact';
import FormFilterContact from '../Forms/Filter/Filter';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  createContactAction,
  deleteContact,
  updateContact,
} from 'store/contact/slice';

const ContactList = () => {
  const { contact } = useSelector(store => store.contact);
  const dispatch = useDispatch();
  const [filteredContact, setFilteredContact] = useState(null);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const createContact = dataByForm => {
    const isAlreadyExist = contact.find(el => el.name === dataByForm.name);
    if (isAlreadyExist)
      return alert(`${dataByForm.name} is already in contacts`);
    dispatch(createContactAction(dataByForm));
  };

  // const filterContact = filterQuery => {
  //   setFilteredContact(
  //     contact.filter(el =>
  //       el.name.toLowerCase().includes(filterQuery.toLowerCase())
  //     )
  //   );
  // };

  const filterContact = filterQuery => {
    setFilteredContact(
      filterQuery
        ? contact.filter(el =>
            el.name.toLowerCase().includes(filterQuery.toLowerCase())
          )
        : null
    );
  };

  const handleCheck = id => {
    dispatch(updateContact(id));
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <FormCreateContact createContact={createContact} />
      <h2>Contacts</h2>
      <FormFilterContact filterContact={filterContact} />
      {contact && (
        <ul className={css.list_group}>
          {(filteredContact ?? contact).map(el => (
            <Contact
              contact={el}
              key={el.id}
              handleDelete={handleDelete}
              handleCheck={handleCheck}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
