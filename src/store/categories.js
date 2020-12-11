const initialState = {
    
      name: 'electronics',
      displayName: 'thing1',
      description: 'it does stuff' 
  }


export default function reducer( state = initialState, action){
  const {type, payload} = action;


  switch(type){
      case 'INITIALIZE':
          return{ categories: parseInt(payload, 10)}

      case 'RENDER_NAME':
          return {...state, renderName: state.name}
          default:
              return state;   

  }
}
/* categories.map((item)=>{
  render(
      <div>
      {categorName: item.name}
      </div>
  )
})
*/

export const initialize = (number)=>{
  number = parseInt(number, 10)
  return{
      type: 'INITIALIZE',
      payload: number
 }
}

export const renderName = () => {
  return {
    type: 'RENDER_NAME'
  }
}

// anchor or click button for electronics
// when electronics is clicked take me to electronics products
// we need a button for food
// when food is clicked take me to food products
// import this file where we want to render
// use dispatch and useSelector
// use dispatch allows us to use some actions
// dispatch and action;


