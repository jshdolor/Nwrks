import React, { Component } from 'react';
import {Navbar, Nav} from  '../../Plugins/BootstrapReact';
import {Link} from 'react-router-dom';


class Header extends Component {

    render() {
        return (
          <Navbar bg="light" expand="lg">
          <Link to={'/'}><Navbar.Brand as='div'>Home</Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        );
      }

}
export default Header;