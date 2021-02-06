import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation/>
          <Switch>
            <Route path="/" exact component ={App}/>
            <Route path="/courses"  component ={Courses}/>
            <Route path="/users" exact component={Users} />
            <Redirect from="/all-courses" to="/courses/"/>
            <Route render={()=><h1>404 Page Not Found</h1>}/>
          </Switch>
          <ol style={{textAlign: 'left'}}>
            <li><s>Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)</s></li>
            <li><s>Add a simple navigation with two links => One leading to "Users", one leading to "Courses"</s></li>
            <li><s>Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)</s></li>
            <li><s>Pass the course ID to the "Course" page and output it there</s></li>
            <li><s>Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)</s></li>
            <li><s>Load the "Course" component as a nested component of "Courses"</s></li>
            <li><s>Add a 404 error page and render it for any unknown routes</s></li>
            <li><s>Redirect requests to /all-courses to /courses (=> Your "Courses" page)</s></li>
          </ol>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
