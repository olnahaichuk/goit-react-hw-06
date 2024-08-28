import {  useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import {  setContact } from './redux/contacts/contactsReducer';


const dataUsers = [
    {
      id: 'id-1',
      name: 'Rosie Simpson', number: '459-12-56'
    },
    {
      id: 'id-2',
      name: 'Hermione Kline', number: '443-89-12'
    },
    {
      id: 'id-3',
      name: 'Eden Clements', number: '645-17-79'
    },
    {
      id: 'id-4',
      name: 'Annie Copeland', number: '227-91-26'
    },
]
function App() {
  const dispatch = useDispatch();

  
  const selectContacts = useSelector(state => state.contacts.contacts);




 useEffect(() => {
   const savedContacts = localStorage.getItem('contacts');
   const parsedContact = JSON.parse(savedContacts)
   if (Array.isArray(parsedContact)  && parsedContact.length > 0 ) {
      dispatch(setContact(parsedContact));
    } else {
      
     dispatch(setContact(dataUsers));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(selectContacts))
  },[selectContacts]);
  
  return (
    <div className='wrapper'>
     <h1>Phonebook</h1>
    <ContactForm />
    <SearchBox />
      <ContactList  />
</div>
  )
}

export default App
