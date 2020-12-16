const initialState = {
  cartItems: [],
  cartTotalQty: 0
}

export default function reducer ( state=initialState, action) {
  const { type, payload } = action;

  switch(type) {
    
    case 'INCREMENT':
    // this is do there arent duplicate list items in cart
      if (!state.cartItems.includes(payload)) {
        payload.quantity = 0;
        state.cartItems.push(payload);
      }

      let newCartList = state.cartItems.map((item) => {
        // payload is onClick and item.name is our state.products.object
        if (payload.name === item.name) {
          item.quantity++
          return item
        } else{
          return item
        }
      })
      // console.log('NEW ADD PRODUCT LIST', newCartList)

      // new cart list is an array of objects.
      // we do "map", so we can get just the quanties of each object item.
      // we get an array of numbers = ["6", "1", "2", "4"];
      // then we call reduce, to sum all of those quantities to get the total number of item quantities
      // this is final cart total
      let newtotal = newCartList.map(item => item.quantity).reduce(function(a, b){
          return a + b;
      }, 0);
      console.log("new total should be a number", newtotal)
      return {...state, cartItems: newCartList, cartTotalQty: newtotal}
      // return {...state, cartItems: state.cartItems +1}

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