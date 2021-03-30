import * as actionTypes from '../actions/actionTypes';

const initialState = {
  results: []
}

const reducer = (state = initialState, action) =>{
  switch(action.type){
    case actionTypes.STORE_RESULT: return{
      ...state,
      results: state.results.concat({id: new Date(), value: action.result}) //contact(), unlike push(), returns a new array rather than manipulating the original one.
    }
    case actionTypes.DELETE_RESULT:
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