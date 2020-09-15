import React, { useState, useRef, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/img/logoTineo.png';
import {  Link } from "react-router-dom";
import './NavbarPage.css';



const NavbarPage = () => {

  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 800;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);


    return ( 
    <Navbar className="navbar-page fixed-top"  collapseOnSelect expand="lg">
    {navBackground ? (<Navbar.Brand href="/"><img className="logo-nav" src={logo} alt=""/></Navbar.Brand>) : (<Navbar.Brand href="/"></Navbar.Brand>)}
    <Navbar.Toggle className="toggle-navbar" aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/" className="link-nav">Inicio</Nav.Link>
        <Nav.Link href="#about" className="link-nav">Quienes Somos</Nav.Link>
        <NavDropdown className="link-nav" title="Productos" id="collasible-nav-dropdown">
          <NavDropdown.Item className="link-nav" href="/productos/packchico">Pack Chico</NavDropdown.Item>
          <NavDropdown.Item className="link-nav" href="/productos/packgrande">Pack Grande</NavDropdown.Item>
          <NavDropdown.Item className="link-nav" href="/productos/sachet">Sachet</NavDropdown.Item>
          <NavDropdown.Item className="link-nav" href="/productos/frasco">Frasco</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#contacto" className="link-nav">Contacto</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar> 

  );
}
 
export default NavbarPage;