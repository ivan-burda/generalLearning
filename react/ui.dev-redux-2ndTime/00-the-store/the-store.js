// ==============LIBRARY CODE==============
//--Store
function createStore(app) {
  let state;
  let listeners = [];

  const getState = () => state;
  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  const dispatch = (action) => {
    state = app(state, action);
    listeners.forEach((listener)=>listener());
  }

  return {
    getState,
    subscribe,
    dispatch
  };
}

// ==============APP CODE==============
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const ADD_GOAL = "ADD_GOAL";
const REMOVE_GOAL = "REMOVE_GOAL";

// --Reducers
function todos(state=[], action){
  switch(action.type){
    case ADD_TODO:
      return state.concat([action.todo]);
    case REMOVE_TODO:
      return state.filter((todo)=> todo.id !==action.id);
    case TOGGLE_TODO:
      return state.map((todo)=> todo.id !== action.id ? todo : 
      Object.assign({}, todo, {complete: !todo.complete}))
    default:
      return state;
  }
}

 function goals(state=[], action){
   switch(action.type){
     case ADD_GOAL:
       return state.concat([action.goal]);
     case REMOVE_GOAL:
       return state.filter((goal)=> goal.id!==action.id);
     default:
       return state;
   }
 }

 function app(state = {}, action){
  return  {
    todos: todos(state.todos, action),
    goals: goals(state.goals, action)
  }
 }

//--Initiate a store instance
const store = createStore(todos); //the argument passed into the createStore is the reducer

store.subscribe(()=>{
  console.log('The new state is:, ', store.getState());
})

//--Dispatching actions to modify the store state via reducers
store.dispatch({
  type: ADD_TODO,
  todo: {
    id: 0,
    name: "Learn Redux",
    complete: false,
  }
})


