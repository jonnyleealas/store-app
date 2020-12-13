import React from 'react';
import {Provider} from 'react-redux';
import store from './store/index.js';
import NavBar from './components/header/header.js';
import Categories from './components/storefront/categories.js'
import Products from './components/storefront/product.js'
import Footer from './components/footer/footer.js';
import SimpleCart from './components/cart/simpleCart.js';


function App() {
  return (
    <>
    <Provider store={ store }>
      <NavBar />
      
      <Categories />
      <Products />
    </Provider>
    {/* <Footer /> */}
    </>
  );
}

export default App;
