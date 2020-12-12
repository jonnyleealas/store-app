const initialState = {
  products:[{
    name:"Electronics",
    displayName: "cat 1",
    description: "do stuff",
  },
  {
    name:"Food",
    displayName: "cat 2",
    description: "do stuff", 
  },
  {
    name:"Furniture",
    displayName: "cat 3",
    description: "do stuff",
  }],
  activeCategory: 'cat 1',
}

export default function reducer( state = initialState, action){
const {type, payload} = action;

  switch(type){
    case 'INITIALIZE':
        return{ products: state.products }
        
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


// anchor or click button for electronics
// when electronics is clicked take me to electronics products
// we need a button for food
// when food is clicked take me to food products
// import this file where we want to render
