import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { increment, decrement } from '../../store/cart.js';
import * as actions from '../../store/cart.js';
import { decrementQuantity, incrementProduct } from '../../store/products.js'


export default function SimpleCart() {

  const dispatch = useDispatch();

  //state comes from index.js
  const currentCart = useSelector((state) => state.cart);
 console.log("currentCart :::", currentCart)


  const addItem = (item) => {
    dispatch(incrementProduct(item));
  }

  const deleteItem = (item) => {
    console.log('DELETE BITCH',item)
    dispatch(actions.removeFromCart(item));
   
    dispatch(incrementProduct(item))

  }


  return(
    <>
    <div>({currentCart.cartTotalQty})</div>
    <ul>
    {currentCart.cartItems.map((item) => (
      <li key={Math.random()}>
      Name:{item.name}, 
      {/* Description: {item.description},
      Qty of item: {item.quantity} */}
      <button onClick={() => deleteItem(item)}>Remove item</button>
      </li>
    ))}
    </ul>
    {/* <h4>{currentCart.cartItems.length}</h4> */}
      {/* <button onClick={addItem}>HELLO</button>
      <button onClick={deleteItem}>BYE</button>

      console.log('FUCK YEAH',currentCart.cartItems) */}
    </>
  )
}