import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {FirstComponent} from './component/firstComponent';
import {ButtonComponent} from './component/buttonComponent';
import {ButtonListComponent} from './component/buttonListComponent';
import CourseList from './component/courseList';
import AllPosts from './component/allPosts';
import {HooksHandsOn} from './component/hooksHandsOn';
import {createStore} from 'redux';
import {rootReducer} from './reducers';
import {Provider} from 'react-redux';

// //Store

// //let store = createStore(reducer);

// //Actions

// //Actions are functions which tells what to be done- Return an object telling what type of action it is

// const increment = ()=>{
//   return {
//     type:'INCREMENT'
//   }

// }

// //Reducers
// //This is responsible for updating state of application in store. These are also fns which take initial state and actrion as an argumentr

// const incrementReduer = (state=0,action)=>{
//   switch(action.type){
//     case 'INCREMENT':
//     return state+1;
//     default:
//     return state


//   }

// }





// ///Store

// let store = createStore(incrementReduer);

// //Dispatch
// //Here we dispatch action, then reducers get invoked which in turn updates the state of application

// store.subscribe(()=>{console.log(store.getState())});
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());

let mystore = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={mystore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
