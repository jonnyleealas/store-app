import axios from 'axios';

let api = 'https://api-js401.herokuapp.com/api/v1/products';
const initialState = []


export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    
    case 'GET_PRODUCTS':
      
    console.log('HELLO WORLD',payload)

      return payload;
    // case 'DECREMENT':
    //   const productsPayload = { ...payload }
    //   let newItemsArray = productsPayload.map((item) => {
    //     // payload is onClick and item.name is our state.products.object
    //     if (payload.name === item.name) {
    //       item.quantity--
    //       return item
    //     } else {
    //       return item
    //     }
    //   })

      //console.log('NEW STATE LOG',newItemsArray)
      //return { ...state, products: newItemsArray }

    // case 'INCREMENT_PRODUCT':
    //   let newAddProductsArray = state.products.map((item) => {
    //     // payload is onClick and item.name is our state.products.object
    //     if (payload.name === item.name) {
    //       item.quantity++
    //       return item
    //     } else {
    //       return item
    //     }
    //   })
      // console.log('NEW ADD PRODUCT LIST', newAddProductsArray)
      //return { ...state, products: newAddProductsArray }

    default:
      return state;

  }

}

export const getProducts = () => async dispatch =>{
  const response = await axios.get(api);
  const items = response.data.results;
  dispatch({
    type: 'GET_PRODUCTS',
    payload: items
  });
}

export const initialize = (product) => {
  return {
    type: 'INITIALIZE',
    payload: product
  }
}
// decrement stock
export const decrementQuantity = (product) => {
  return {
    type: 'DECREMENT',
    payload: product
  }
}

export const incrementProduct = (product) => {
  return {
    type: 'INCREMENT_PRODUCT',
    payload: product
  }
}

