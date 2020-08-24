import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from 'react-router-dom'
import './FooterPage.css';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import Logo from '../../assets/img/logoTineo.png';

const FooterPage = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4 footer-body">
      <MDBContainer fluid className="text-center text-md-left footer-body-with">
        <MDBRow>
          <MDBCol md="4"> 
            <img className="logo-tineo-footer img-fluid" src={Logo} alt="Tineo_Logo"/>
          </MDBCol>
          <MDBCol md="4">
            <h5 className="title">Contenido</h5>
            <ul>
              <li className="list-unstyled">
                <Link className="link-footer" to="/">Inicio</Link>
              </li>
              <li className="list-unstyled">
                <Link className="link-footer" to="/">Quienes Somos</Link>
              </li>
              <li className="list-unstyled">
                <Link className="link-footer" to="/productos">Productos</Link>
              </li>
              <li className="list-unstyled">
                <Link className="link-footer" to="/contacto">Contacto</Link>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="4">
            <h5 className="title">Redes Sociales:</h5>
            <ul>
              <li className="list-unstyled">
                <a className="link-footer" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/TineoArg"><FaFacebookSquare className="footer-icon" /></a>
              </li>
              <li className="list-unstyled">
                <a className="link-footer" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/tineoarg/"><FaInstagram className="footer-icon" /></a>
              </li>
              
              
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright  <a className="link-footer" href="https://www.mdbootstrap.com">Tineo Argentina </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;