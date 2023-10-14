import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const { items, filteredItems } = useSelector(store => store.contacts);
  return (
    <div className={css.container}>

      {items && (
        <ul className={css.list_group}>
          {(filteredItems ?? items).map(el => (
            <Contact
              contact={el}
              key={el.id}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
