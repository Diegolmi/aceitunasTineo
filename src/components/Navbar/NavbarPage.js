import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/img/logoTineo.png';
import {  Link } from "react-router-dom";
import './NavbarPage.css';



const NavbarPage = () => {
    return ( 
    <Navbar className="navbar-page" collapseOnSelect expand="lg">
    <Navbar.Brand href="/"><img className="logo-nav" src={logo} alt=""/></Navbar.Brand> 
    <Navbar.Toggle className="toggle-navbar" aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/" className="link-nav">Inicio</Nav.Link>
        <Nav.Link className="link-nav">Quienes Somos</Nav.Link>
        <Nav.Link className="link-nav">Productos</Nav.Link>
        <Nav.Link href="/contacto" className="link-nav">Contacto</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar> 
  );
}
 
export default NavbarPage;