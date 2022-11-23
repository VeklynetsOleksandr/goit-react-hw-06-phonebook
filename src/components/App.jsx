import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContainerPhonebook } from './ContainerPhonebook/ContainerPhonebook';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';

export const App = () => {
  const storageContacts = localStorage.getItem('contacts');
  const parsedContacts = JSON.parse(storageContacts);

  const templateContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState(() => parsedContacts || templateContacts || []);
  const [filter, setFilter] = useState('');

  

  const handleSubmit = ({ name, number }, { resetForm }) => {
    if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(name + ' is already in contacts');
      return;
    }

    const contact = {
      name,
      number,
      id: nanoid(),
    };

    setContacts([contact, ...contacts]);

    resetForm();
    return;
  };

  const filterContacts = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));

    return;
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  useEffect(() => {
    if (contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
    
  }, [contacts]);

  const filteredContacts = getFilteredContacts();
  console.log(contacts.length)

    return (
      <ContainerPhonebook>
        <h2>Phonebook</h2>
        <ContactForm handleSubmit={handleSubmit} />

        <h2>Contacts</h2>
        {contacts.length > 0 ? (
          <>
            <Filter filterContacts={filterContacts} />
            <ContactList values={filteredContacts} deleteContact={deleteContact} />
          </>) : (
          <h4>Phonebook is empty</h4>
        )}
      </ContainerPhonebook>
    );
}
