import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { increment } from '../../store/cart.js';


export default function SimpleCart() {

  const dispatch = useDispatch();

  const currentCart = useSelector((state) => state.cart);
 console.log(currentCart)


  const addItem = () => {
    dispatch(increment());
  }

  console.log(onClick)
  return(
    <>
    <div>{currentCart.cart}</div>
    <button onClick={addItem}>HELLO</button>
    </>
  )
}