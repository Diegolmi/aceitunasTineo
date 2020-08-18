import React from "react";
import img1 from "../../assets/img/PNG/Doy pack grande/Negra x180.png";
import { Link } from "react-router-dom";


const GaleriaImagenes = () => {
  return (
    <div className="galeria">
      <h1 className="titulo-producto">Nuestros Productos</h1>
      <div className="contenedor-imagenes">
        <div className="imagen">
          <img src={img1} alt="" />
          <div className="overlay">
          <h4>Cobertura para Pizza</h4>
            <Link  to="productos" className="button">Ver Más</Link>
          </div>
        </div>
        <div className="imagen">
          <img src={img1} alt="" />
          <div className="overlay1">
          <h4>Aceitunas Verdes</h4>
            <Link to="productos" className="button">Ver Más</Link>
          </div>
        </div>
        <div className="imagen">
          <img src={img1} alt="" />
          <div className="overlay2">
          <h4>Aceitunas C/ Morron</h4>
            <Link to="productos" className="button">Ver Más</Link>
          </div>
        </div>
        <div className="imagen">
          <img src={img1} alt="" />
          <div className="overlay3">
          <h4>Aceitunas Premium</h4>
            <Link to="productos" className="button">Ver Más</Link>
          </div>
        </div>
        <div className="imagen">
          <img src={img1} alt="" />
          <div className="overlay4">
          <h4>Aceitunas Negras</h4>
            <Link to="productos" className="button">Ver Más</Link>
          </div>
        </div>
        <div className="imagen">
          <img src={img1} alt="" />
          <div className="overlay5">
          <h4>Aceitunas en Rodajas</h4>
            <Link to="productos" className="button">Ver Más</Link>
          </div>
        </div>
        <div className="imagen">
          <img src={img1} alt="" />
          <div className="overlay6">
          <h4>Aceituna Descarozada</h4>
            <Link to="productos" className="button">Ver Más</Link>
          </div>
        </div>
        <div className="imagen">
          <img src={img1} alt="" />
          <div className="overlay7">
          <h4>Pickles</h4>
            <Link to="productos" className="button">Ver Más</Link>
          </div>
        </div>
        <div className="imagen">
          <img src={img1} alt="" />
          <div className="overlay8">
          <h4>Pepinillos</h4>
            <Link to="productos" className="button">Ver Más</Link>
          </div>
        </div>
        <div className="imagen">
          <img src={img1} alt="" />
          <div className="overlay9">
            <h4>Ajies</h4>
            <Link to="productos" className="button">Ver Más</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GaleriaImagenes;
