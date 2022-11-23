import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const removeContact = createAction(
  'contacts/contactRemove',
  function prepare(id) {
    return {
      payload: {
        id,
      },
    };
  }
);

export const changeFilter = createAction(
  'filter/filterChanged',
  function prepare(value) {
    return {
      payload: {
        value,
      },
    };
  }
);

export const addContact = createAction(
  'contacts/contactAdd',
  function prepare(value) {
    const { number, name } = value;
    return {
      payload: {
        name,
        number,
        id: nanoid(),
      },
    };
  }
);
