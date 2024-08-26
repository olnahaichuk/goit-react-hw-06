import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css'


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
  
 const [contacts, setContacts] = useState(() => {
        const savedContacts = localStorage.getItem('contacts');
        return savedContacts ? JSON.parse(savedContacts) : dataUsers;
 });
  
  const [filter, setFilter] = useState('');
   
  const handleFilterChange = (filterValue) => {
    setFilter(filterValue);
  }

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts), [contacts])
  })
  
    

  const deleteContact = (contactId) => {
    const updatedContact = contacts.filter(contact => contact.id !== contactId);
    setContacts(updatedContact);
  }
  const addContact = (newContact) => {
    setContacts(oldContacts => [...oldContacts, newContact]);
  }
  
  return (
    <div className='wrapper'>
     <h1>Phonebook</h1>
    <ContactForm onAddContact ={addContact} />
    <SearchBox filter = {filter} onFilterChange = {handleFilterChange} />
      <ContactList  contacts={filteredContacts} onDeleteContact ={deleteContact} />
</div>
  )
}

export default App
