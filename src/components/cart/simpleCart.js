import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { increment } from '../../store/cart.js';


export default function SimpleCart() {

  const dispatch = useDispatch();

  //state comes from index.js
  const currentCart = useSelector((state) => state.cart);
 console.log(currentCart)


  const addItem = () => {
    dispatch(increment());
  }


  return(
    <>
    <div>({currentCart.cartItems})</div>
      {/* <button onClick={addItem}>HELLO</button> */}
    </>
  )
}