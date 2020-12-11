import { createStore, combineReducers } from 'redux';

import categoriesCounter from './categories.js';

const reducers = combineReducers ({
  cats: categoriesCounter
})

export default createStore(reducers);
