import React, { useState, useRef, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/img/logoTineo.png';
import {  Link } from "react-router-dom";
import './NavbarPage.css';



const NavbarPage = () => {

  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 200;
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
    <Navbar className={navBackground ?  "navbar-back-scroll fixed-top" : "navbar-page fixed-top" } collapseOnSelect expand="lg">
    {navBackground ? <Navbar.Brand href="/"><img className="logo-nav" src={logo} alt=""/></Navbar.Brand>  : null}
    <Navbar.Toggle className="toggle-navbar" aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Link to="/" className="link-nav">Inicio</Link>
        <Link to="/" className="link-nav">Quienes Somos</Link>
        <Link to="/productos" className="link-nav">Productos</Link>
        <Link to="/contacto" className="link-nav">Contacto</Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar> 
  );
}
 
export default NavbarPage;