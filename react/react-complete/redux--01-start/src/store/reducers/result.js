import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  results: []
}

const deleteResult = (state, action) => {
  // const id = 2;
  // const newArray = [...state.results];
  // newArray.splice(id, 1);
  const updateArray = state.results.filter((result)=> result.id !== action.resultElementId);
  return updateObject(state, {results: updateArray});
};

const reducer = (state = initialState, action) =>{
  switch(action.type){
    case actionTypes.STORE_RESULT: 
      return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})}); //contact(), unlike push(), returns a new array rather than manipulating the original one.

    case actionTypes.DELETE_RESULT:
      return deleteResult(state, action);
  }
  return state;
}

export default reducer;