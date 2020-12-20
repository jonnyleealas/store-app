import React from 'react';
import Categories from './categories.js'
import Products from './product.js'
import CurrentCategory from './current-category.js'

// import SimpleCart from './components/cart/simpleCart.js';


function StoreFront() {
  return (
    <>
      <Categories />
      <CurrentCategory />
      <Products />
    </>
  );
}

export default StoreFront;
