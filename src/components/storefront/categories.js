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

    function handleClick(item){
        active(item.displayName)
    }

    return(
        <>
        <h1>Our Categories</h1>
            <div >
                <p >Active Category: {currentCategory} </p>
                <ul>
                    {categoriesMap.map((item) => (
                    <li key={Math.random()} onClick={() => handleClick(item)}>
                    {item.name}
                    </li>
                ))}
                </ul> 
            </div>
        </>
    )
}

