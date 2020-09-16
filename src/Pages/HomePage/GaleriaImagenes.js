import React from "react";
import Descarozadax100 from "../../assets/img/PNG/DoyPackChico/Descarozadax100.jpg";
import Picklex180 from "../../assets/img/PNG/DoyPackGrande/Picklex180.jpg";
import AjiFrasco from "../../assets/img/PNG/Frascos/Frasco_ají.png";
import VerdeSachet from "../../assets/img/PNG/Sachet/VerdeSachet.jpg";


const GaleriaImagenes = () => {
  return (
    <div className="galeria" id="productos">
      <h1 className="titulo-about">Nuestros Productos</h1>
      <div className="contenedor-imagenes">
        <div className="imagen">
          <img src={Descarozadax100} alt="" />
          <div className="overlay3">
          <h4>Pack Chico</h4>
            <a  href="/productos/packchico" className="button">Ver Más</a>
          </div>
        </div>
        <div className="imagen">
          <img src={Picklex180} alt="" />
          <div className="overlay3">
          <h4>Pack Grande</h4>
            <a href="/productos/packgrande" className="button">Ver Más</a>
          </div>
        </div>
        <div className="imagen">
          <img src={VerdeSachet} alt="" />
          <div className="overlay3">
          <h4>Sachet</h4>
            <a href="/productos/sachet" className="button">Ver Más</a>
          </div>
        </div>
        <div className="imagen">
          <img src={AjiFrasco} alt="" />
          <div className="overlay3">
          <h4>Frascoss</h4>
            <a href="/productos/frasco" className="button">Ver Más</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GaleriaImagenes;
