import API from 'goals-todos-api';

//Action types
export const RECEIVE_DATA = 'RECEIVE_DATA';

//Actions
function receiveData(todos, goals){
  return {
    type: RECEIVE_DATA,
    goals,
    todos,
  }
};

//Async actions
export function handleInitialData (){
  return (dispatch) => {
      //Promise.all is used to wait for multiple async actions to finish and only then do something
      return Promise.all([
      API.fetchTodos(),
      API.fetchGoals(),
    ]).then(([todos, goals])=>{
      dispatch(receiveData(todos, goals));
    });
  }
}