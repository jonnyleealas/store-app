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
    // initCats();

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
                <ul>{initCats()}
                    {categoriesMap.map((item) => {
                        return (
                            <li key={Math.random()} onClick={() => handleClick(item)}>
                        {item.name}
                        </li>
                    //if the quantity is 0 don't return/or return null.
                    )
                    
                }
                )}
                </ul> 
                <h2 >{currentCategory} </h2>
            </div>
        </>
    )
}

