import React, { useState, useEffect } from 'react';
import './Home.css'

import Booklist from '../../components/Booklist'
import logo from '../../assets/logo.svg'

export default function Home(props) {

  const [showNewBookModal, setShowNewBookModal] = useState(false)

  return (
    <div id="home">
      <div className="modal-container">
       
      </div>

      <div className="modal-container">
      
      </div>

      <div className="page-titles">
      
        <img src={logo} className="app-logo" alt="logo" />
        
        <h1>Library. <span>Dark.</span></h1>
        
        <h3>The Odin Project</h3>
        <h3>Front-End Framework: React Library</h3>
      
      </div>
      
      <div className="page-functions">
        <button>Add New Book</button>
      </div>
      
      <div id="page-cards">
        
      </div>
    </div>
  )
}
