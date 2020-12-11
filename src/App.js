import React from 'react';
import {Provider} from 'react-redux';
import store from './store/index.js';
import NavBar from './components/header/header.js';
import Categories from './components/storefront/categories.js'


function App() {
  return (
    <>
    <Provider store={ store }>
      <NavBar />
      <Categories />
    </Provider>
    </>
  );
}

export default App;
