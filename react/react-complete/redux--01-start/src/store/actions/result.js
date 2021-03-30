import * as actionTypes from './actionTypes';

export const saveResult = (res) => {
  //This is also a place to have data transformation logic, such as:
  const updatedResult = res * 2;
  return {
    type: actionTypes.STORE_RESULT,
    result: updatedResult,
  };
}

//This is a utility async action which is possible because of redux-thunk. Once it finishes, it runs a synchronous action saveResult which modifies the state in the store.
//Only synchronous action can modify the state in store.
//Logics for transformation sync data should rather be in a reducer file
export const storeResult = (res) => {
  return (dispatch, getState) => {  //getState is option to retrieve the original state if needed within the function
    setTimeout(()=>{
      const oldCounter = getState().ctr.counter;
      console.log(oldCounter);
      dispatch(saveResult(res))
    }, 2000);
  }
}

export const deleteResult = (resElId) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId: resElId
  };
}