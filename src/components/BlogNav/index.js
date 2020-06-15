import React from 'react'
import './style.sass'
import {Container } from 'react-bootstrap'
import { Link } from 'gatsby'

const NavBar = ({ blogtitle }) => (
  <div className="nav-wrapper">
    <Container>
      <nav className="navbar">
        <div className="blogid">
          <Link className="navbar-brand" to="/">
            <img alt="Logo" src="../../img/fav.png" />
            <h2> {blogtitle != null ? blogtitle : 'Soft Themez Pro - Blogs'} </h2>
          </Link>
        </div>
        <div className="navlinks">
          <ul>
            <li>
              <Link to="/blog">Blogs</Link>
            </li>
            <li>
              <Link className="gohome" to="/">Back To Home</Link>
            </li>
          </ul>
        </div>
      </nav>
    </Container>
  </div>
)

export default NavBar
