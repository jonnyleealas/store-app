const initialState = {
  cartItems: [],
  cartTotalQty: 0
}

export default function reducer ( state=initialState, action) {
  const { type, payload } = action;

  switch(type) {
    
    case 'INCREMENT':
    // this is do there arent duplicate list items in cart
    // we reset the quantity based on the previous state
    const newCartItemToAdd = {...payload};
    if (!state.cartItems.find(item => item.name == newCartItemToAdd.name)) {
        newCartItemToAdd.quantity = 0;
        state.cartItems.push(newCartItemToAdd);
      }

      const newCartList = state.cartItems.map((item) => {
        // payload is onClick and item.name is our state.products.object
        if (newCartItemToAdd.name === item.name) {
          item.quantity++
          return item
        } else {
          return item
        }
      })
    
      // new cart list is an array of objects.
      // we do "map", so we can get just the quanties of each object item.
      // we get an array of numbers = ["6", "1", "2", "4"];
      // then we call reduce, to sum all of those quantities to get the total number of item quantities
      // this is final cart total
      let newTotal = newCartList.map(item => item.quantity).reduce(function(a, b){
          return a + b;
      }, 0);
      // console.log("new total should be a number", newTotal)
      return {...state, cartItems: newCartList, cartTotalQty: newTotal}
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