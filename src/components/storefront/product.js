import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { initialize, decrementQuantity } from '../../store/products.js'

import Typography from '@material-ui/core/Typography';
import * as actions from '../../store/cart.js'
// import * prodAction from '../products

export default function Products() {

    const dispatch = useDispatch();

    let productsMap = useSelector((state) => state.products.products);
    const currentCategory = useSelector( state => state.cats.activeCategory);
    
    const initProds = () => {
        dispatch(initialize());
    }
    initProds();

    productsMap = productsMap.filter(product => product.displayName === currentCategory);

    const addItem = (item) => {
      dispatch(actions.increment(item));// this increment cart.js
      console.log('HEREEEEE', actions.increment(item))
    }
    
    // const minusOne = (item) => {
    //   dispatch(decrementQuantity(item));
    //     console.log('DISPATCH DECREMENT', decrementQuantity(item)); 
    // }

    return(
      <>
        {/* <Typography variant="h5">PRODUCTS:</Typography> */}
        <div>
            {/* <p >{currentCategory} ACTIVE</p> */}
            <ul>
                {productsMap.map((item) => (
                <li key={Math.random()}>
                Name:{item.name}, 
                Description: {item.description}
                Quantity: {item.quantity}
                <span>
                  <button onClick={()=> {addItem(item); decrementQuantity(item)}}>Add to cart</button>
                </span>
                </li> 
            ))}
            </ul> 
        </div>
        <>
       <ul>
         {/* {props.displayProducts.map(product => { 
          return( 
          <li key={product.name}> 
           {product.name}
           {product.description}
           {product.price}
           {console.log('INVENTORY', product.inventory)}
           <button onClick={() => props.addProductsToCart(product)}>Add to your Cart!</button>
           </li> 
             );
        })} */}
      </ul>
      </>
      </>
    )
}