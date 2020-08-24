import React from "react";
import "./HomePage.css";
import logo from "../../assets/img/logoTineo.png";
import GaleriaImagenes from "./GaleriaImagenes";
import About from "../../components/About/About";
import ContactForm from "../SeccionContacto/ContactForm";
// import Carousel from "./Carousel";


const HomePage = () => {
  return (
    <>
    <div className="seccion-principal">
      {/* <Carousel /> */}
      <div className="seccion-logo">
      <img className="logo-seccion-principal animate__animated animate__fadeInLeftBig" src={logo} alt="" />
      </div>
      <div className="seccion-logo">
      <img className="logo-seccion-principal animate__animated animate__fadeInRightBig" src={logo} alt="" />
      </div>
    </div>
    <About />
    <GaleriaImagenes />
    <ContactForm />
    </>
  );
};

export default HomePage;
