import css from './ContactForm.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup";
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsReducer';

const phoneRegExp = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/

const validationSchema = Yup.object({
        name: Yup.string()
            .required('Name is required!')
            .min(3, "Too short!")
            .max(50, "too long!")
            .required("Required!"),
        number: Yup.string()
            .required('Must be number')
            .min(7, "Number must be 7 characters")
            .matches(phoneRegExp, 'Correct format xxx-xx-xx')
            .max(10, "Number must be 10 characters")
})

const ContactForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values , {resetForm}) => {
        const newContact = {
            id: nanoid(),
            name: values.name,
            number: values.number,
        };
        dispatch(addContact(newContact));
        resetForm();
    }
    
  
    return (
        <Formik
        initialValues={{ name: '', number:'', } }validationSchema = {validationSchema}
        onSubmit={handleSubmit}>
            <Form className={css.form}>
                <div className={css.nameLabel}>
                <label htmlFor="name">Name</label>
                <Field name='name' type="text" id="name"></Field>
                <ErrorMessage name="name">
                 {msg => <div className={css.error}>{msg}</div>}
                 </ErrorMessage>
                </div>
                <div className={css.numberLabel}>
                    <label htmlFor='number'>Number</label>
                <Field type="text" id="number" name="number"></Field>
                    <ErrorMessage name="number" >
                    {msg => <div className={css.error}>{msg}</div>}</ErrorMessage>
                </div>
                <button type="submit" className={css.submitBtn}>Add new contact</button>
            </Form>
            
        </Formik>
  )
}

export default ContactForm
