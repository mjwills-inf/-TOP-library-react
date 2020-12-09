import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Header from './layout/Header';
import About from './layout/views/About';
import What from './layout/views/What';
import Home from './layout/views/Home';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/about">
            <About />            
          </Route>

          <Route path="/what">
            <What />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
