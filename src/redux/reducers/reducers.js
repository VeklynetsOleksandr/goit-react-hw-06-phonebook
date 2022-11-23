import { createReducer } from '@reduxjs/toolkit';
import { addContact, changeFilter, removeContact } from 'redux/actions/actions';
import { ContactForm } from 'components/ContactForm/ContactForm';

function getContacts() {
  const storageContacts = localStorage.getItem('contacts');
  const parsedContacts = JSON.parse(storageContacts);
  return parsedContacts;
}

const preloadedState = {
  contacts: {
    items: getContacts(),
    filter: '',
  },
};

export const contactsReducer = createReducer(
  preloadedState.contacts,
  builder => {
    builder
      .addCase(addContact, (state, action) => {
        const { items } = state;
        const { name } = action.payload;

        if (items) {
          if (
            items.length > 0 &&
            items.find(
              contact => contact.name.toLowerCase() === name.toLowerCase()
            )
          ) {
            alert(name + ' is already in contacts');

            return;
          }
          if (items.length > 0) {
            localStorage.setItem(
              'contacts',
              JSON.stringify([...items, action.payload])
            );

            state.items = [...items, action.payload];
            console.log(ContactForm);
            return;
          }
        }

        if (!items) {
          localStorage.setItem('contacts', JSON.stringify([action.payload]));

          state.items = [action.payload];

          return;
        }

        if (items.length === 0) {
          localStorage.setItem('contacts', JSON.stringify([action.payload]));

          state.items = [action.payload];

          return;
        }
        return;
      })

      .addCase(removeContact, (state, action) => {
        const { id } = action.payload;
        const { items } = state;

        state.items = items.filter(contact => contact.id !== id);
        localStorage.setItem(
          'contacts',
          JSON.stringify(items.filter(contact => contact.id !== id))
        );
      });
  }
);

export const filterReducer = createReducer(preloadedState.contacts, builder => {
  builder.addCase(changeFilter, (state, action) => {
    const { value } = action.payload;
    state.filter = value;
  });
});
