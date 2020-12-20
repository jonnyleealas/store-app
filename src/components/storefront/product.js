import React,{useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {If, Else, Then} from 'react-if';

import SimpleCart from '../cart/simpleCart.js';


import * as productActions  from '../../store/products.js'
import * as actions from '../../store/cart.js'
import Typography from '@material-ui/core/Typography';
// import * prodAction from '../products

export default function Products() {

    const dispatch = useDispatch();

    let productsMap = useSelector((state) => state.products);
    console.log('PRODUCTS MAP',productsMap)

    const currentCategory = useSelector( state => state.cats.activeCategory);
    
    productsMap = productsMap.filter(product => product.category === currentCategory.name);

    const addItem = (item) => {
      dispatch(actions.increment(item));// this increment cart.js
    
      //dispatch(productActions.decrementQuantity(item))//this comes from products actions
    }

  //   useEffect ( () => {
  //     dispatch(getProducts())
  // },[])

    
    return(
      <>
        {/* <Typography variant="h5">PRODUCTS:</Typography> */}
        <div>
            <ul>
                {productsMap.map((item) => (
                <li key={Math.random()}>
                <If condition={item.inStock <= 0}>
                  <Then>
                    Name:{item.name}, 
                    Price: {item.price}
                    In Stock: {item.inStock}
                  </Then>
                    <Else>
                      Name:{item.name}, 
                      Price: {item.price}
                      In Stock: {item.inStock}
                      <span>
                        <button onClick={()=>addItem(item)}>Add to cart</button>
                      </span>

                    </Else>
                </If>
              </li> 
            ))}
            </ul> 
            <SimpleCart />
        </div>
      </>
    )
  }
