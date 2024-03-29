import React from 'react';
import {Provider} from 'react-redux';
import store from './store/index.js';
import NavBar from './components/header/header.js';
import StoreFront from './components/storefront/storeFront.js'

// import Footer from './components/footer/footer.js';
// import SimpleCart from './components/cart/simpleCart.js';


function App() {
  return (
    <>
    <Provider store={ store }>
      <NavBar />
      <StoreFront /> 
      </Provider>
    </>
  );
}

export default App;
