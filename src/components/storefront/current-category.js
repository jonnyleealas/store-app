import React from "react";
import { useSelector } from 'react-redux';
import * as actions from '../../store/categories.js'


export default function CurrentCategory() {

    const activeCategory = useSelector(state => state.cats.activeCategory);
    console.log('CURRENT CATEGORY',activeCategory);

    return(
        <>
          <h3>Current Category: {activeCategory.name}</h3>
        </>
    )
}

