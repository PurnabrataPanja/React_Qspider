import React from 'react'
import './global.css'
import { Link, Outlet } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
          <li><Link to="/help">HELP</Link></li>
        </ul>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Nav