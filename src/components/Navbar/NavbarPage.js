import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/img/logoTineo.png';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './NavbarPage.css';

////

const NavbarPage = () => {
    return ( 
    <Navbar className="navbar-page" collapseOnSelect expand="lg">
    <Navbar.Brand href="#home"><img className="logo-nav" src={logo} alt=""/></Navbar.Brand> 
    <Navbar.Toggle className="toggle-navbar" aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Router>
        <Link className="link-nav">Inicio</Link>
        <Link className="link-nav">Quienes Somos</Link>
        <Link className="link-nav">Productos</Link>
        <Link className="link-nav">Contacto</Link>
        </Router>
      </Nav>
    </Navbar.Collapse>
  </Navbar> 
  );
}
 
export default NavbarPage;