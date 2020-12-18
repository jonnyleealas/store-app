import React, { useEffect } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/categories.js'


export default function Categories() {

    const dispatch = useDispatch();

    const categories = useSelector((state) => state.cats);
    console.log(categories);

    const currentCategory = useSelector( state => state.cats.activeCategory);
    
    // const initCats = (item) => {
    //     dispatch(actions.get(item));
    // }

    // const active = (payload) => {
    //     dispatch(actions.activeCat(payload));
    // } 

    function handleClick(item){
        dispatch(actions.getProducts())
        // active(item.category)
        console.log('fudkadfs', item)
    }

    useEffect ( () => {
        dispatch(actions.get())
    },[])

    

    return(
        <>
            <h2>OUR CATEGORIES: </h2>
            <ul >
                {categories.map( (item) => 
                    <li key={item._id} onClick={handleClick}> 
                        {item.name}
                    </li>              
                )}      
            </ul>
        </>
    )
}

