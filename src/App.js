import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import AllPosts from './component/allPosts';
import { ButtonListComponent } from './component/buttonListComponent';
import CourseList from './component/courseList';
import FirstComponent from './component/firstComponent';

function App() {
  return (
   <Router>
   <div >
      <ul>
        <li>
          <Link to="/posts">All Posts</Link>
        </li>
        <li>
          <Link to="/basic">Basic Component</Link>
        </li>
        <li>
          <Link to="/buttons">Button Component</Link>
        </li>
        <li>
          <Link to="/courses">Course</Link>
        </li>
        </ul>
<Switch>
<       Route exact path="/posts/:id" component={AllPosts}/>
        <Route path = "/basic" component={FirstComponent}/>
        <Route path = "/buttons" component={ButtonListComponent}/>
        <Route path = "/courses/" component = {CourseList}/>
       
        </Switch>
    </div>
    </Router>
  );
}

export default App;
