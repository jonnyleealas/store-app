import React, { useEffect } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/categories.js'


export default function Categories() {

    const dispatch = useDispatch();

    const items = useSelector((state) => state.cats);
    console.log(items)

    const currentCategory = useSelector( state => state.cats.activeCategory);
    
    // const initCats = (item) => {
    //     dispatch(actions.get(item));
    // }

    // const active = (payload) => {
    //     dispatch(actions.activeCat(payload));
    // } 

    // function handleClick(item){
        
    //     active(item.displayName)
    //     // console.log('fudkadfs', item)
    // }

    useEffect ( () => {
        dispatch(actions.get())
    },[])

    

    return(
        <>
            <h2>WHATS UP</h2>
            <ul >
                {items.map( (item) => 
                    <li key={item._id}> 
                        HELLO: {item.text}
                    </li>              
                )}      
            </ul>
        </>
    )
}

