const initialState = {
  products: [{
    name: "TV",
    displayName: "ELECTRONICS",
    description: "do",
    quantity: 5,
    sold_out: 'Sold Out'
  },
  {
    name: "DVD",
    displayName: "ELECTRONICS",
    description: "fruit",
    quantity: 1,
    sold_out: 'Sold Out'
  },
  {
    name: "Computer",
    displayName: "ELECTRONICS",
    description: "do stuff",
    quantity: 3,
    sold_out: 'Sold Out'
  },

  {
    name: "Apple",
    displayName: "FOOD",
    description: "do",
    quantity: 5,
    sold_out: 'Sold Out'
  },
  {
    name: "Orange",
    displayName: "FOOD",
    description: "fruit",
    quantity: 1,
    sold_out: 'Sold Out'
  },
  {
    name: "Banana",
    displayName: "FOOD",
    description: "do stuff",
    quantity: 3,
    sold_out: 'Sold Out'
  },
  {
    name: "Table",
    displayName: "FURNITURE",
    description: "do",
    quantity: 5,
    sold_out: 'Sold Out'
  },
  {
    name: "Chair",
    displayName: "FURNITURE",
    description: "fruit",
    quantity: 1,
    sold_out: 'Sold Out'
  },
  {
    name: "Couch",
    displayName: "FURNITURE",
    description: "do stuff",
    quantity: 3,
    sold_out: 'Sold Out'
  }]
}


export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'INITIALIZE':
      return { products: state.products }

    case 'DECREMENT':
      let newItemsArray = state.products.map((item) => {
        // payload is onClick and item.name is our state.products.object
        if (payload.name === item.name) {
          item.quantity--
          return item
        } else {
          return item
        }
      })
      // console.log('NEW STATE LOG',newItemsArray)
      return { ...state, products: newItemsArray }

    case 'INCREMENT_PRODUCT':
      let newAddProductsArray = state.products.map((item) => {
        // payload is onClick and item.name is our state.products.object
        if (payload.name === item.name) {
          item.quantity++
          return item
        } else {
          return item
        }
      })
      console.log('NEW ADD PRODUCT LIST', newAddProductsArray)
      return { ...state, products: newAddProductsArray }

    default:
      return state;

  }

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



// anchor or click button for electronics
// when electronics is clicked take me to electronics products
// we need a button for food
// when food is clicked take me to food products
// import this file where we want to render



//if products.quantity > 0, return.




/**
 * when I add to car populate added item in cart list
 * add 1 to car
 * add a button to item that deletes item from cart
 * delete 1 from cart
 * add 1 to product.quantity
 *
 * If i add product to cart
 * add button adds 1 to cart
 * deletes 1 from product.quantity
 *
 * If I delete product from cart
 * -- from cart
 * ++ produce.quantity
 *
 */