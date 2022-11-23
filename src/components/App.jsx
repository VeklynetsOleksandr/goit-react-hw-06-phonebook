import { ContactForm } from './ContactForm/ContactForm';
import { ContainerPhonebook } from './ContainerPhonebook/ContainerPhonebook';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export function App() {
  return (
    <ContainerPhonebook>
      <h2>Phonebook</h2>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </ContainerPhonebook>
  );
}
