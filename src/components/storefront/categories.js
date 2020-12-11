import React from "react";


import { useDispatch, useSelector } from 'react-redux';
import {initialize, renderName } from '../../store/categories.js'

// bring in action to use in dispatch
// we can use a star to bring everything in: potato.something---> inside of a dispatch to use our reducer

export default function Categories() {

    const dispatch = useDispatch();

    const bananas = useSelector((state) => state.cats);

    const state = () => {
        dispatch(initialize() );
    }

    const name = () => {
        dispatch(renderName());
    }


    return(
        <>
            <h1>{bananas.name}</h1>
            <h2 name={name}>HELLO</h2>
        </>
    )
}
