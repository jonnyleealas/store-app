const initialState = {
    categories:[{
      name:"Electronics",
      displayName: "ELECTRONICS",
      description: "do stuff",
      isActive: false
    },
    {
      name:"Food",
      displayName: "FOOD",
      description: "do stuff",
      isActive: false
    },
    {
      name:"Furniture",
      displayName: "FURNITURE",
      description: "do stuff",
      isActive: false
    }],
    activeCategory: '',
}

export default function reducer( state = initialState, action){
  const {type, payload} = action;

  switch(type){
    case 'INITIALIZE':
        return{ categories: state.categories, activeCategory: state.activeCategory}
        
    case 'ACTIVE_CATEGORY':
        return { categories: state.categories, activeCategory: payload }
    
    // case 'INCREMENT':
    //     return {}
      
    
    default:
      return state;   
          
  }
}

  export const initialize = (category)=>{
    return{
        type: 'INITIALIZE',
        payload: category
  }
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
