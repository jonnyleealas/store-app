import React,{useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { initialize, decrementQuantity, incrementProduct } from '../../store/products.js'
import * as actions from '../../store/cart.js'
import Typography from '@material-ui/core/Typography';
// import * prodAction from '../products

export default function Products() {

    const dispatch = useDispatch();

    let productsMap = useSelector((state) => state.products.products);
    const currentCategory = useSelector( state => state.cats.activeCategory);
    
  

    productsMap = productsMap.filter(product => product.displayName === currentCategory);

    const addItem = (item) => {
      dispatch(actions.increment(item));// this increment cart.js

      // console.log('ADD ITEM DISPATCHER', actions.increment(item))
      dispatch(decrementQuantity(item))
      // dispatch product decrement
    }

    // useEffect((item) => {
    // },[addItem]);

    
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
                  <button onClick={()=>addItem(item)}>Add to cart</button>
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