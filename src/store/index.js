import { createStore, combineReducers } from 'redux';

import categoriesReducer from './categories.js';

const reducers = combineReducers ({
  cats: categoriesReducer
})

export default createStore(reducers);
