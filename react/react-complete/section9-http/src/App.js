import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      //basename should be used if my react app is on the server served from a subdirectory. In that case the value of basename should be the subdir name
      //<BrowserRouter basename="/my-app-subdir-name">
      <BrowserRouter>
      <div className="App">
        <Blog />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
