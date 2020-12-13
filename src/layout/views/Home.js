import React, { useState, useEffect } from 'react';
import './Home.css'

import Booklist from '../../components/Booklist'

export default function Home() {
  return (
    <div id="home">
      <div className="modal-container">
      
      </div>

      <div className="modal-container">
      
      </div>

      <div id="page-titles">
      <img
        id="vue-logo"
        alt="Vue logo"
        src=""
      />
      <h1>Library. <span>Dark.</span></h1>
      <h3>The Odin Project</h3>
      <h3>Front-End Framework Project: Vue Library</h3>
    </div>
    <div id="page-functions">
      <button>Add New Book</button>
    </div>
    <div id="page-cards">
      
    </div>
    </div>
  )
}
