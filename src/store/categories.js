import axios from 'axios';

const initialState = 
  [];




// {
//     categories:[],
//     // activeCategory: '',
// }

export default function reducer( state = initialState, action){
  const {type, payload} = action;

  switch(type){
    case 'GET':
        return payload;

  
          case 'GET_PRODUCTS':
              return payload;
        
    // case 'ACTIVE_CATEGORY':
    //     return { categories: state.categories, activeCategory: payload }
    
    default:
      return state;   
          
  }
}
let api = 'https://api-js401.herokuapp.com/api/v1/categories/';

  export const get = () => async dispatch =>{
    const response = await axios.get(api);
    const items = response.data.results;
    dispatch({
      type: 'GET',
      payload: items
    });
}

let api2 = 'https://api-js401.herokuapp.com/api/v1/products/';
export const getProducts = (payload) => async dispatch =>{
  // const response = await axios.get(`${api}/${products}`);
  const response = await axios.get(`${api2}/${payload.category}`);
  const items = response.data.results;
  dispatch({
    type: 'GET_PRODUCTS',
    payload: items
  });
}

// export const activeCat = (payload) => {
//   return{
//     type: 'ACTIVE_CATEGORY',
//     payload: payload
//   }
// } 



// anchor or click button for electronics
// when electronics is clicked take me to electronics products
// we need a button for food
// when food is clicked take me to food products
// import this file where we want to render
