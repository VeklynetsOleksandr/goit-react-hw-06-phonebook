import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filterReducer } from './reducers/reducers';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: reducers,
});
