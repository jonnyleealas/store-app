import axios from 'axios';

const initialState =[];


// {
//     categories:[],
//     // activeCategory: '',
// }

export default function reducer( state = initialState, action){
  const {type, payload} = action;

  switch(type){
    case 'GET':
        return payload;
        
    case 'ACTIVE_CATEGORY':
        return { categories: state.categories, activeCategory: payload }
    
    default:
      return state;   
          
  }
}
let api = 'https://api-js401.herokuapp.com/api/v1/todo';

  export const get = () => async dispatch =>{
    const response = await axios.get(api);
    const items = response.data.results;
    dispatch({
      type: 'GET',
      payload: items
    });
}

export const activeCat = (payload) => {
  return {
    type: 'ACTIVE_CATEGORY',
    payload: payload
  }
}

// anchor or click button for electronics
// when electronics is clicked take me to electronics products
// we need a button for food
// when food is clicked take me to food products
// import this file where we want to render
