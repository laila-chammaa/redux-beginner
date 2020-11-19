import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from "redux";
import allReducer from "./reducers";
import {Provider} from 'react-redux';


// STORE (GLOBALIZED STATE): takes in a reducer
let store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//displaying in the console
//subscriptions are called after the root reducer has returned the new state
// store.subscribe(()=> console.log(store.getState()));

// // DISPATCH: sending an action to reducer
// store.dispatch(increment());
// store.dispatch(decrement());



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);