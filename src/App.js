import React,{Suspense}from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import AllPosts from './component/allPosts';
import { ButtonListComponent } from './component/buttonListComponent';
import CourseList from './component/courseList';
//import FirstComponent from './component/firstComponent';
const FirstComponent = React.lazy(()=>(import('./component/firstComponent')));

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
        <Route exact path="/posts/" component={AllPosts}/>
        <Route path = "/basic" render={(props)=>(
          <Suspense fallback={<div>Loading...</div>}>
             <FirstComponent textValue={"This value is coming from APP as props"} {...props}/>
        </Suspense>
        )}
      />
        <Route path = "/buttons" component={ButtonListComponent}/>
        <Route path = "/courses/" component = {CourseList}/>
       
        </Switch>
    </div>
    </Router>
  );
}

export default App;
