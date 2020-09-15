import React from "react";
import img1 from "../../assets/img/PNG/DoyPackChico/Verdex100.jpg";


const GaleriaImagenes = () => {
  return (
    <div className="galeria" id="productos">
      <h1 className="titulo-about">Nuestros Productos</h1>
      <div className="contenedor-imagenes">
        <div className="imagen">
          <img src={img1} alt="" />
          <div className="overlay3">
          <h4>Pack Chico</h4>
            <a  href="/productos/packchico" className="button">Ver Más</a>
          </div>
        </div>
        <div className="imagen">
          <img src={img1} alt="" />
          <div className="overlay3">
          <h4>Pack Grande</h4>
            <a href="/productos/packgrande" className="button">Ver Más</a>
          </div>
        </div>
        <div className="imagen">
          <img src={img1} alt="" />
          <div className="overlay3">
          <h4>Sachet</h4>
            <a href="/productos/sachet" className="button">Ver Más</a>
          </div>
        </div>
        <div className="imagen">
          <img src={img1} alt="" />
          <div className="overlay3">
          <h4>Frascos</h4>
            <a href="/productos/frasco" className="button">Ver Más</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GaleriaImagenes;
