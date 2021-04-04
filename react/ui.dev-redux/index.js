



{
  type: 'REMOVE_TODO',
  id: 0,
}

{
  type: 'TOGGLE_TODO',
  id: 0,
}

{
  type: 'ADD_GOAL',
  goal: {
    id: 0,
    name: 'Run a marathon'
  }
}

{
  type: 'REMOVE_GOAL',
  id: 0
}


/*Pure function
1. They always return the same resutls if the same argumetnsa rea passed in
2. They dpeend only on the argumetns passed int o them
3. They should never produce any side effects (no state mutation, no ajax request, no manipulating the dom, etc.)
*/

//Reducer function - it takes the state and the action and reduces them to a brand new state which it returns
function todos(state = [], action){
  if(action.type === 'ADD_TODO'){
    return state.concat([action.todo])
  };

  return state;
}

//Create store
function createStore (reducer) {
  //The store should have four parts
  //1 The state
  let state;

  //2 Get the state
  const getState = () => state;

  //3 Listen to the changes on the state
  let listeners = [];
  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l)=> l !== listener);
    }
  }
  //4 Update the state
  const dispatch = (action) => {
    //call todos to get the new state so that we can update the state inside of createStore
    state = reducer(state, action);
    //loop over listeners and invoke them
    listeners.forEach((listener)=>listener());


  }

  return {
    getState,
    subscribe,
    dispatch
  }
};


//Create store and dispatch action to change the state
//The argument take by the createStore is our reducer function
const store = createStore(todos);
store.dispatch(
  {
    type: 'ADD_TODO',
    todo: {
      id: 0,
      name: 'Learn redux',
      complete: false,
    }
  }
);


