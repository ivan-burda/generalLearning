import * as actionTypes from './actionTypes';

export const saveResult = (res) => {
  return {
    type: actionTypes.STORE_RESULT,
    result: res,
  };
}

//This is a utility async action which is possible because of redux-thunk. Once it finishes, it runs a synchronous action saveResult which modifies the state in the store.
//Only synchronous action can modify the state in store.
export const storeResult = (res) => {
  return (dispatch) => {
    setTimeout(()=>{
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