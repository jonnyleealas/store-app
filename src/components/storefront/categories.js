import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { initialize, activeCat } from '../../store/categories.js'


export default function Categories() {

    const dispatch = useDispatch();

    let categoriesMap = useSelector((state) => state.cats.categories);
    const currentCategory = useSelector( state => state.cats.activeCategory);
    
    const initCats = () => {
        dispatch(initialize());
    }
    initCats();

    const active = (payload) => {
        dispatch(activeCat(payload));
    } 
    console.log(categoriesMap)

    function handleClick(item){
        console.log('click',currentCategory)
        active(item.displayName)
    }


    return(
        <>
        <div>
            <p >{currentCategory}ACTIVE</p>
            <ul>
                {categoriesMap.map((item) => (
                <li onClick={() => handleClick(item)}>
                {item.name}
                </li>
            ))}
            </ul> 
        </div>
        
        <h2>HELLO</h2>
        </>
    )
}

