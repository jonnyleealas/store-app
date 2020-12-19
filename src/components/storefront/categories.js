import React, { useEffect } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/categories.js'


export default function Categories() {

    const dispatch = useDispatch();

    const categories = useSelector(state => state.cats.categories);
    console.log(categories);

    const activeCategory = useSelector( state => state.cats.activeCategory);
    
    function handleClick(item){
        // dispatch(actions.getProducts(item))
        dispatch(actions.activeCat(item));
        console.log('fudkadfs', item)
    }

    useEffect ( () => {
        dispatch(actions.getCategories())
    },[])

    return(
        <>
            <h2>OUR CATEGORIES: </h2>
            <ul >
                {categories.map( (item) => 
                    <li key={item._id} onClick={() => handleClick(item)}> 
                        {item.name}
                    </li>              
                )}      
            </ul>
        </>
    )
}

