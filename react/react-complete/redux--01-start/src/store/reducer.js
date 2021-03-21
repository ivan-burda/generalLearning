const initialState = {
  counter: 0,
  results: []
}

const reducer = (state = initialState, action) =>{
  switch(action.type){
    case 'INCREMENT': return{
      ...state,
      counter: state.counter + 1
    };
    case 'DECREMENT': return{
      ...state,
      counter: state.counter -1
    }
    ;
    case 'ADD': return{
      ...state,
      counter: state.counter + action.val
    }
    ;
    case 'SUBTRACT': return{
      ...state,
      counter: state.counter - action.val
    };
    case 'STORE_RESULT': return{
      ...state,
      results: state.results.concat({id: new Date(), value: state.counter}) //contact(), unlike push(), returns a new array rather than manipulating the original one.
    }
    case 'DELETE_RESULT':
      // const id = 2;
      // const newArray = [...state.results];
      // newArray.splice(id, 1);
      const updateArray = state.results.filter((result)=> result.id !== action.resultElementId);
    return{
      ...state,
      results: updateArray
    }
  }
  return state;
}

export default reducer;