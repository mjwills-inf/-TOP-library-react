import './App.css';
import './assets/reset.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import {books as bookData} from './assets/books';

import Header from './layout/Header';
import About from './layout/views/About';
import What from './layout/views/What';
import Home from './layout/views/Home';


function App() {

  const [books, setBooks] = useState([])

  useEffect(() => {
    fetchBookData()
  });

  const fetchBookData = () => {
    setBooks(bookData)
  }

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
