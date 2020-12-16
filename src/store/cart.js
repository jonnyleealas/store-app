const initialState = {
  cartItems: [], // create a variable and then some logic, use varable return and change state
  cartTotalQty: 0 // create a var and some logic use var to change state
}

export default function reducer ( state=initialState, action) {
  const { type, payload } = action;

  switch(type) {
    
    case 'INCREMENT_CART':
    // this is so there aren't duplicate list items in cart
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
      let newTotal = newCartList.map(item => item.quantity);
      console.log(newTotal);
      let cartTotal = newTotal.reduce(function(a, b){
        console.log('CART ADD A B',a, b)
        return a + b;
    }, 0);
    console.log(cartTotal);

      // console.log("new total should be a number", newTotal)
      return {...state, cartItems: newCartList, cartTotalQty: cartTotal}
      // return {...state, cartItems: state.cartItems +1}

      case 'DECREMENT_CART':

        const newCartItemToDelete = {...payload};
        if (!state.cartItems.find(item => item.name == newCartItemToDelete.name)) {
            newCartItemToDelete.quantity = 1;
            // state.cartItems.push(newCartItemToDelete);
          }
    
          const decrementCartList = state.cartItems.map((item) => {
            // payload is onClick and item.name is our state.products.object
            if (newCartItemToDelete.name === item.name) {
              item.quantity--
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
          let decrementTotal = decrementCartList.map(item => item.quantity);
          
          let decrementCartTotal = decrementTotal.reduce(function(a, b){
            console.log('MATH A B',a, b)
            return a - b;
        },0);
        
    console.log('DEREMENT CART',decrementCartTotal)
          // console.log("new total should be a number", newTotal)
      
      return { ...state, cartItems: decrementCartList, cartTotalQty: decrementCartTotal}

      
      default:
        return state;
  }
}

export const increment = (payload) => {
  return{
    type: 'INCREMENT_CART',
    payload: payload
  }
}

export const decrement = () => {
  return{
    type: 'DECREMENT_CART'
  }
}