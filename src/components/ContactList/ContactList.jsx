import css from './ContactList.module.css'
import Contact from "../Contact/Contact"; 
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsReducer';

const ContactList = () => {
  const dispatch = useDispatch();
  
  const contacts = useSelector(state => state.contacts.contacts);
  const selectNameFilter = useSelector(state => state.filters.filterValue);

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));

  }
    const filteredContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(selectNameFilter.toLowerCase())
  );
  
  return (
      <div className={css.contactList}>
          {filteredContact.map(contact =>
          (<Contact key={contact.id}
            contact={contact}
            onDeleteContact={handleDeleteContact} />))}
    
    </div>
  )
}

export default ContactList
