import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { increment, decrement } from '../../store/cart.js';
import * as actions from '../../store/cart.js';
import { addToCart } from '../../store/products.js';


export default function SimpleCart() {

  const dispatch = useDispatch();

  //state comes from index.js
  const currentCart = useSelector((state) => state.cart.cartItems);
  
  const addingToCart = useSelector((state) => state.products.products);
  console.log(addingToCart)

  // currentCart = currentCart.filter(product => product.name === addingToCart);
  

  const addItem = () => {
    dispatch(actions.increment());
  }

  const deleteItem = () => {
    dispatch(actions.decrement());
  }

  // const toCart = (item) => {
  //   dispatch(addToCart(item));
  // }

  return(
    <>
    <div>({addItem()})</div>
      <button onClick={addItem}>HELLO</button>
      <button onClick={deleteItem}>BYE</button>
      <ul>
        {addingToCart.map((item) => (
        <li>
          {item.name}
        </li>
        ))}
      </ul>

    </>
  )
}