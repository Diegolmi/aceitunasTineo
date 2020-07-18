import React from "react";
import "./HomePage.css";
import logo from "../../assets/img/logoTineo.png";

const HomePage = () => {
  return (
    <div className="seccion-principal">
        <img className="logo-seccion-principal animate__animated animate__fadeInLeftBig" src={logo} alt="" />
    </div>
  );
};

export default HomePage;
