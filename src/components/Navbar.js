import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import Sticky from 'react-stickynode';
import { Link } from 'gatsby'
import { FaBlog } from "react-icons/fa";
import './all.css';

const NavbarTop = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }
  render() {
    return (
        <Sticky innerZ={999999999} enabled={true} top={0}>
        <Navbar expand="lg">
          <Navbar.Brand href="#home">
            <img 
              style={{
                width: '40px',
                marginRight: `10px`,
                verticalAlign: `middle`,
              }} 
              alt ="logo"
              src="img/fav.png"
            />
              Soft Themez Pro
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto osahan-center-nav">
                <Nav.Link href="#page-top">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#video">Video</Nav.Link>
                <Nav.Link href="#screens">Screens</Nav.Link>
                <Nav.Link href="#testimonials">Testimonials</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <Nav.Link href="#team">Team</Nav.Link>
                <Nav.Link href="#blog">Blog</Nav.Link>
                <Nav.Link href="#trial">Trial</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <ul className="navbar-nav ml-auto navbar-nav-right d-none d-sm-block">
              <li className="nav-item">
                <Link className="js-scroll-trigger menu-btn" to="/blog">
                   Our Blogs <FaBlog/>
                </Link>
              </li>
            </ul>
          </Navbar>
        </Sticky>
    )
  }
}

export default NavbarTop
 