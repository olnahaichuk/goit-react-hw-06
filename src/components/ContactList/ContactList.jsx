import css from './ContactList.module.css'
import Contact from "../Contact/Contact"; 

const ContactList = ({contacts , onDeleteContact}) => {
  return (
      <div className={css.contactList}>
          {contacts.map(contact =>
              (<Contact key={contact.id} contact ={contact} onDeleteContact={onDeleteContact} />))}
    
    </div>
  )
}

export default ContactList
