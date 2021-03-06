const initialState = {
  products:[{
    name:"TV",
    displayName: "ELECTRONICS",
    description: "do",
    quantity: 5
  },
  {
    name:"DVD",
    displayName: "ELECTRONICS",
    description: "fruit",
    quantity: 1
    },
  {
    name:"Computer",
    displayName: "ELECTRONICS",
    description: "do stuff",
    quantity: 3
  },

  {
    name:"Apple",
    displayName: "FOOD",
    description: "do",
    quantity: 5
  },
  {
    name:"Orange",
    displayName: "FOOD",
    description: "fruit",
    quantity: 1
    },
  {
    name:"Banana",
    displayName: "FOOD",
    description: "do stuff",
    quantity: 3
  },
  {
    name:"Table",
    displayName: "FURNITURE",
    description: "do",
    quantity: 5
  },
  {
    name:"Chair",
    displayName: "FURNITURE",
    description: "fruit",
    quantity: 1
    },
  {
    name:"Couch",
    displayName: "FURNITURE",
    description: "do stuff",
    quantity: 3
  }] 
}
  

export default function reducer( state = initialState, action){
const {type, payload} = action;

  switch(type){
    case 'INITIALIZE':
        return{ products: state.products }

    case 'DECREMENT':
        return {...state, products: state.products}
    //everytime this is call is take one from quantity ( -1),
    //then write 
        
        default:
          return state;   
          
  }
}

  export const initialize = (product)=>{
    return{
        type: 'INITIALIZE',
        payload: product
  }
}

  export const decrementQuantity = (product) => {
    return{
      type: 'DECREMENT',
      payload: product
    }
  }



// anchor or click button for electronics
// when electronics is clicked take me to electronics products
// we need a button for food
// when food is clicked take me to food products
// import this file where we want to render



//if products.quantity > 0, return.