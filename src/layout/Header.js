import React from 'react'
import { Link } from 'react-router-dom' 

import './Header.css'

export default function Header() {
  return (
    <div id="nav">
        <Link to="/">
          Home
        </Link> |
          
        <Link to="/about">
          About         
        </Link> |

        <Link to="/what">
          What          
        </Link>
    </div>
  )
}
