const initialState = {
  cartItems: [], // create a variable and then some logic, use varable return and change state
  cartTotalQty: 0 // create a var and some logic use var to change state
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {

    case 'INCREMENT_CART':
      // this is so there aren't duplicate list items in cart
      // we reset the quantity based on the previous state
      const newCartItemToAdd = { ...payload };
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
      let cartTotal = newTotal.reduce(function (a, b) {
        console.log('CART ADD A B', a, b)
        return a + b;
      }, 0);
      console.log('Cart total in inc',cartTotal);

      // console.log("new total should be a number", newTotal)

      return { ...state, cartItems: newCartList, cartTotalQty: cartTotal }
    // return {...state, cartItems: state.cartItems +1}

    case 'DECREMENT_CART':
      /**
       * High level
       * check if item is in cart
       * return state of cart --
       * return new state of stock ++ * 
       */


      // const newCartItems = state.cartItems.map((item) => item.name == newStockPayload.name && item.quantity > 0 ? {name:item.name, quantity:item.quantity--} : item);
      // const newStockPayload = { ...payload };
      // const newCartItems = state.cartItems.map(item => {
      //   let newItem = item;
      //   if (item.name == newStockPayload.name && item.quantity > 0) {
      //     newItem = { name: item.name, quantity: item.quantity-- }
      //   }
      //   console.log({item, newItem} )
      //   return newItem;
      // })
      // const newCartTotals = newCartItems.reduce(function (a, b) {
       
      //   return a + b.quantity;
      // }, 0);



      // return { ...state, cartItems: newCartItems, cartTotalQty: newCartTotals }
      const newCartPayload = { ...payload };
      if (!state.cartItems.find(item => item.name == newCartPayload.name)) {
        newCartPayload.quantity = 0;
        state.cartItems.push(newCartPayload);
      }

      const cartQuantity = state.cartItems.map((item) => {
        // payload is onClick and item.name is our state.products.object
        if (newCartPayload.name === item.name && item.quantity > 0){
          item.quantity--
          return item
        } else {
          return item
        }
      })

  
      let cartMap = cartQuantity.map(item => item.quantity);
      
      let newCartTotal = cartMap.reduce(function (a, b) {
        console.log('CART ADD A B', a, b)
        return a + b;
      }, 0);
      

      // console.log("new total should be a number", newTotal)

      return { ...state, cartItems: cartQuantity, cartTotalQty: newCartTotal }



    default:
      return state;
  }
}

export const increment = (payload) => {
  return {
    type: 'INCREMENT_CART',
    payload: payload
  }
}

export const removeFromCart = (payload) => {
  console.log('EXPORT CONST DECREMENET:', payload)
  return {
    type: 'DECREMENT_CART',
    payload: payload
  }
}