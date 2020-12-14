import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { increment, decrement } from '../../store/cart.js';
import * as actions from '../../store/cart.js';


export default function SimpleCart() {

  const dispatch = useDispatch();

  //state comes from index.js
  const currentCart = useSelector((state) => state.cart);
 console.log(currentCart)


  const addItem = () => {
    dispatch(actions.increment());
  }

  const deleteItem = () => {
    dispatch(actions.decrement());
  }

  return(
    <>
    <div>({currentCart.cartItems})</div>
    <h4>{currentCart.cartItems.length}</h4>
      <button onClick={addItem}>HELLO</button>
      <button onClick={deleteItem}>BYE</button>

    </>
  )
}