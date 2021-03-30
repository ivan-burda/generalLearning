export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
  return {
    type: INCREMENT
  };
}

export const decrement = () => {
  return {
    type: DECREMENT
  };
}

export const add = (value) => {
  return {
    type: ADD,
    val: value
  };
}

export const subtract = (value) => {
  return {
    type: SUBTRACT,
    val: value
  };
}

export const saveResult = (res) => {
  return {
    type: STORE_RESULT,
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
    type: DELETE_RESULT,
    resultElId: resElId
  };
}