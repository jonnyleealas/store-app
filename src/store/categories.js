import axios from 'axios';

const initialState = {
    categories: [],
    activeCategory: {}
}


export default function reducer( state = initialState, action){
  const {type, payload} = action;

  switch(type){
    case 'GET_CATEGORIES':
      console.log('payload',payload)

        return {...state, categories: payload, activeCategory: payload[0]}

  
    // case 'GET_PRODUCTS':
    //           return payload;
        
    case 'ACTIVE_CATEGORY':
        return { ...state, activeCategory: payload }

    
    default:
      return state;          
  }
}


export const activeCat = (payload) => {
  return{
    type: 'ACTIVE_CATEGORY',
    payload: payload
  }
} 

let api = 'https://api-js401.herokuapp.com/api/v1/categories';

  export const getCategories = () => async dispatch =>{
    const response = await axios.get(api);
    const items = response.data.results;
    dispatch({
      type: 'GET_CATEGORIES',
      payload: items
    });
}

// let api2 = `https://api-js401.herokuapp.com/api/v1/products`;
// export const getProducts = (_id) => async dispatch =>{
//   // const response = await axios.get(`${api}/${products}`);
//   const response = await axios.put(api2);
//   const items = response.data.results;
//   dispatch({
//     type: 'GET_PRODUCTS',
//     payload: items
//   });
// }





// anchor or click button for electronics
// when electronics is clicked take me to electronics products
// we need a button for food
// when food is clicked take me to food products
// import this file where we want to render
