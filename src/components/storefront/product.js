import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { initialize } from '../../store/products.js'

export default function Products() {

    const dispatch = useDispatch();

    let productsMap = useSelector((state) => state.products.products);
    const currentCategory = useSelector( state => state.cats.activeCategory);
    
    const initProds = () => {
        dispatch(initialize());
    }
    initProds();

    productsMap = productsMap.filter(product => product.displayName === currentCategory);

    return(
      <>
        <h1>PRODUCT:</h1>
        <div>
            {/* <p >{currentCategory}ACTIVE</p> */}
            <ul>
                {productsMap.map((item) => (
                <li key={Math.random()}>
                {item.name}
                </li>
            ))}
            </ul> 
        </div>
      </>
    )
}

