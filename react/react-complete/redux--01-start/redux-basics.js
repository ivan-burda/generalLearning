const redux = require('redux'); //This is a node.js way of importing
const createStore = redux.createStore;

const initialState = {
  counter: 0,
};

//Reducer
const rootReducer = (state = initialState, action) =>{
  if(action.type === 'INC_COUNTER'){
    return{ //Always make sure to copy the original state by desctructuring it. If I want to mutate an object within the state I also have to copy-desctructure it
      ...state,
      //...state.myDeeperObject,
      counter: state.counter + 1
    }
  }
  if(action.type === 'ADD_COUNTER'){
    return{
      ...state,
      counter: state.counter + action.value
    }
  }
  return state;
};


//Store
const store = createStore(rootReducer);
console.log(store.getState());

//Subscription
store.subscribe(()=>{
  console.log('[Subscription]', store.getState());
})

//Dispatching an action
store.dispatch({type: 'INC_COUNTER'}); //The name for the type can be whatever I want, short, descriptive
store.dispatch({type: 'ADD_COUNTER', value: 10}); //Instead of passing in just value there could be an object such as data: {}
console.log(store.getState());

