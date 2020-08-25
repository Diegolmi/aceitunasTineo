import React from "react";
import img1 from "../../assets/img/PNG/DoyPackChico/Verdex100.jpg";
import { Link } from "react-router-dom";


const GaleriaImagenes = () => {
  return (
    <div className="galeria" id="productos">
      <h1 className="titulo-about">Nuestros Productos</h1>
      <div className="contenedor-imagenes">
        <div className="imagen">
          <img src={img1} alt="" />
          <div className="overlay3">
          <h4>Pack Chico</h4>
            <a  href="productos" className="button">Ver Más</a>
          </div>
        </div>
        <div className="imagen">
          <img src={img1} alt="" />
          <div className="overlay3">
          <h4>Pack Grande</h4>
            <a href="productos" className="button">Ver Más</a>
          </div>
        </div>
        <div className="imagen">
          <img src={img1} alt="" />
          <div className="overlay3">
          <h4>Sachet</h4>
            <a href="productos" className="button">Ver Más</a>
          </div>
        </div>
        <div className="imagen">
          <img src={img1} alt="" />
          <div className="overlay3">
          <h4>Frascos</h4>
            <Link to="productos" className="button">Ver Más</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GaleriaImagenes;
