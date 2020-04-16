import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {FirstComponent} from './component/firstComponent';
import {ButtonComponent} from './component/buttonComponent';
import {ButtonListComponent} from './component/buttonListComponent';
import CourseList from './component/courseList';

ReactDOM.render(
    <ButtonListComponent />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
