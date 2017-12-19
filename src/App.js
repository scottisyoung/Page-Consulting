import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Navbar from '../src/components/Navbar/Navbar.js';
import Home from '../src/components/Home/Home.js';
import About from '../src/components/About/About.js';
import Blog from '../src/components/Blog/Blog.js';
import FAQ from '../src/components/FAQ/FAQ.js';
import Contact from '../src/components/Contact/Contact.js';

class App extends Component {
  render() {
    return (
      <div>
        
        <Navbar />
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='about' component={About}/>
              <Route path='blog' component={Blog}/>
              <Route path='faq' component={FAQ}/>
              <Route path='contact' component={Contact}/>
          </Switch>

      </div>
    );
  }
}

export default App;
