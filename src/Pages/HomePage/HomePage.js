import React from "react";
import "./HomePage.css";
import logo from "../../assets/img/PORTADA_Mesa-de-trabajo1.png";
import GaleriaImagenes from "./GaleriaImagenes";
import About from "../../components/About/About";
import ContactForm from "../SeccionContacto/ContactForm";
// import Carousel from "./Carousel";


const HomePage = () => {
  return (
    <>
    <div className="seccion-principal" id="inicio">
      {/* <Carousel /> */}
      <div className="seccion-logo">
      <img className="img-fluid logo-seccion-principal animate__animated animate__fadeInLeftBig" src={logo} alt="" />
      </div>
      
    </div>
    <About />
    <GaleriaImagenes />
    <ContactForm />
    </>
  );
};

export default HomePage;
