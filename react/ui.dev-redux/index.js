//LIBRARY CODE
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


//APP CODE

//Action types
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

const ADD_GOALD = 'ADD_GOALD';
const REMOVE_GOALD = 'REMOVE_GOALD';

//Action creators
//They are used to describe any possible action which we want to make the state of our store
//These are the only events in our entire application that will change the state of our store
function addTodoAction (todo) {
  return {
    type: ADD_TODO,
    todo,
  }
};

function removeTodoAction (id) {
  return {
    type: REMOVE_TODO,
    id,
  }
};

function toggleTodoAction (id) {
  return {
    type: TOGGLE_TODO,
    id,
  }
};

function addGoalAction (goal) {
  return {
    type: ADD_GOAL,
    goal,
  }
};

function removeGoalAction (id) {
  return {
    type: REMOVE_GOAL,
    id,
  }

}

/*Pure function
1. They always return the same resutls if the same argumetnsa rea passed in
2. They dpeend only on the argumetns passed int o them
3. They should never produce any side effects (no state mutation, no ajax request, no manipulating the dom, etc.)
*/

//Reducer function - it takes the state and the action and reduces them to a brand new state which it returns
//Based on the action called the reducer modifies the state in the defined way
function todos(state = [], action){
  switch(action.type){
    case ADD_TODO : 
      return state.concat([action.todo]);
    case REMOVE_TODO :
      return state.filter((todo)=> todo.id !== action.id);
    case TOGGLE_TODO :
      return state.map((todo)=> todo.id !== action.id ? todo : 
      Object.assign({}, todo, {complete: !todo.complete})
    );
    default: return state;
  };
}

//Another reducer
function goals (state = [], action){
  switch(action.type){
    case ADD_GOAL:
      return state.concat([action.goal]);
    case REMOVE_GOAL:
      return state.filter((goal)=> goal.id !== action.id);
    default: return state;
  }
}

//Combine the individual reducers which we have in the application
//This combined reduced is passed in to the store 
//The state = {} is used here instead of state = [], because here the state is an object {} of individual reducers
function app (state = {}, action){
  return {
    todos: todos(state.todos, action),
    goals: goals(state.goals, action)
  }
}

//Create store and dispatch action to change the state
//The argument take by the createStore is our reducer function
const store = createStore(app);



//Some events I am dispatching
store.dispatch(addTodoAction({
  id: 0,
  name: 'Walk the dog',
  complete: false,
}));

store.dispatch(addTodoAction({
  id: 1,
  name: 'Wash the car',
  complete: false,
}));

store.dispatch(addTodoAction({
  id: 2,
  name: 'Go to the gym',
  complete: false,
}));

store.dispatch(removeTodoAction(1));

store.dispatch(toggleTodoAction(0));

store.dispatch(addGoalAction({
  id: 0,
  name: 'Learn redux', 
}));

store.dispatch(addGoalAction({
  id: 1,
  name: 'Lose 20 pounds', 
}));

store.dispatch(removeGoalAction(0));



