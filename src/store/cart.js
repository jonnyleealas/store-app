const initialState = {
  carItems: 0
}

export default function reducer ( state=initialState, action) {
  const { type, payload} = action;

  switch(type) {
    case 'INCREMENT':
      return { ...state, carItems: state.carItems + 1}

      case 'DECREMENT':
      return { ...state, carItems: state.carItems - 1}

      
      default:
        return state;
  }
}

export const increment = () => {
  return{
    type: 'INCREMENT'
  }
}

export const decrement = () => {
  return{
    type: 'DECREMENT'
  }
}