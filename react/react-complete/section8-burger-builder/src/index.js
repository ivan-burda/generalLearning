import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

//Provider makes sure than any nested components have access to the Redux store
import { Provider } from 'react-redux';

//createStore - creates the redux store
//applyMiddleware - extension for redux which enables usage of custom functionality such as thunk
//compose - in this case used for enabling the redux tools for chrome
//combineReducers - used to combine multiple reducers into one
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Reducers
import burgerBuilderReducer from './store/reducers/burgerBuilder';
import orderReducer from './store/reducers/order';

//Enabling the chrome Redux tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Combining reducers into one
const rootReducer = combineReducers({
  burgerBuilder: burgerBuilderReducer,
  order: orderReducer,
})

//Creating a store
const store = createStore(
  rootReducer, 
  composeEnhancers(applyMiddleware(thunk))
  );

const app = (
  <Provider store = { store }>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  </Provider>
);


ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
