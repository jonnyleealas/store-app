import React,{useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
<<<<<<< HEAD
import { initialize, decrementQuantity } from '../../store/products.js'
=======
import {If, Else, Then} from 'react-if';
>>>>>>> jonny2

import SimpleCart from '../cart/simpleCart.js';


import { initialize, decrementQuantity, incrementProduct } from '../../store/products.js'
import * as actions from '../../store/cart.js'
<<<<<<< HEAD
=======
import Typography from '@material-ui/core/Typography';
>>>>>>> jonny2
// import * prodAction from '../products

export default function Products() {

    const dispatch = useDispatch();

    let productsMap = useSelector((state) => state.products.products);
    const currentCategory = useSelector( state => state.cats.activeCategory);
    
  

    productsMap = productsMap.filter(product => product.displayName === currentCategory);

    const addItem = (item) => {
      dispatch(actions.increment(item));// this increment cart.js
<<<<<<< HEAD
      console.log('HEREEEEE', actions.increment(item))
=======

    
      dispatch(decrementQuantity(item))
      // dispatch product decrement
>>>>>>> jonny2
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
<<<<<<< HEAD
                Name:{item.name}, 
                Description: {item.description}
                Quantity: {item.quantity}
                <span>
                  <button onClick={()=> {addItem(item); decrementQuantity(item)}}>Add to cart</button>
                </span>
                </li> 
=======
                <If condition={item.quantity === 0}>
                  <Then>
                    Name:{item.name}, 
                    Description: {item.description}
                    Quantity: {item.sold_out}
                  </Then>
                    <Else>
                      Name:{item.name}, 
                      Description: {item.description}
                      Quantity: {item.quantity}
                      <span>
                        <button onClick={()=>addItem(item)}>Add to cart</button>
                      </span>

                    </Else>
                </If>
              </li> 
>>>>>>> jonny2
            ))}
            </ul> 
            <SimpleCart />
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