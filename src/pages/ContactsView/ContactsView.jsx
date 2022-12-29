import ContactList from 'components/ContactList';
import Form from 'components/Form';
import Filter from 'components/Filter';

const ContactsView = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsView;