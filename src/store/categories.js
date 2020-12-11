const initialState = {
  categories: [{
      name: 'electronics',
      displayName: 'thing1',
      description: 'it does stuff' 
  }]
};

export default function reducer( state = initialState, action){
  const {type, payload} = action;


  switch(type){
      case 'INITIALIZE':
          return{categories: state.categories}
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

export const initialize = ()=>{
  return{
      type: 'INITIALIZE',
      // payload: categories
  }

}





// anchor or click button for electronics
// when electronics is clicked take me to electronics products
// we need a button for food
// when food is clicked take me to food products
// import this file where we want to render
// use dispatch and useSelector
// use dispatch allows us to use some actions
// dispatch and action


