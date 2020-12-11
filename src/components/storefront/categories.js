import React from "react";


import { useDispatch, useSelector } from 'react-redux';
import {initialize} from '../../store/categories.js'

// bring in action to use in dispatch
// we can use a star to bring everything in: potato.something---> inside of a dispatch to use our reducer

export default function Categories() {


    return(
        <h1>
            HELLO WORLD
        </h1>
    )
}
