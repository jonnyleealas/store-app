const initialState = {
  cartItems: 0
}

export default function reducer ( state=initialState, action) {
  const { type, payload} = action;

  switch(type) {
    
    case 'INCREMENT':
      console.log(payload)
      return {...state, cartItems: state.cartItems + 1}

      case 'DECREMENT_CART':
      return { ...state, cartItems: state.cartItems - 1}

      
      default:
        return state;
  }
}

export const increment = (payload) => {
  return{
    type: 'INCREMENT',
    payload: payload
  }
}

export const decrement = () => {
  return{
    type: 'DECREMENT_CART'
  }
}