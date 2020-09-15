import React from "react";
import "./productos.css";
import DescarozadaSachet  from "../../assets/img/PNG/Sachet/DescarozadaSachet.jpg";
import RellenaSachet from "../../assets/img/PNG/Sachet/RellenaSachet.jpg";
import VerdeSachet from "../../assets/img/PNG/Sachet/VerdeSachet.jpg";

import { FaCheck } from 'react-icons/fa';

const DoyPackGrande = () => {
  return (
    <div className="product-container">
      
        <h1 className="title-product">Nuestros Productos</h1>
     
      <div className="container-info-product">
        <div className="image-container">
          <img src={VerdeSachet} alt="" />
        </div>
        <div>
          <h3 className="product-name">Aceitunas verdes</h3>
          <p>
          Ideales para acompañar tus picadas y pizzas.
          </p>
          <h3 className="product-name">presentacion</h3>
          <ul>
            <li><FaCheck className="icon-product"/> <span> 100g escurrido</span></li>
            <li><FaCheck className="icon-product"/> <span> 190g neto</span></li>
          </ul>
        </div>
      </div>
      <div className="container-info-product1">
        <div>
          <h3 className="product-name">Aceitunas verdes descarozadas</h3>
          <p>
           Usa tu imaginación en la cocina con unas ricas descarozadas en tus platos y ensaladas.
          </p>
          <h3 className="product-name">presentacion</h3>
          <ul>
          <li><FaCheck className="icon-product"/> <span> 100g escurrido</span></li>
            <li><FaCheck className="icon-product"/> <span> 190g neto</span></li>
          </ul>
        </div>
        <div className="image-container">
          <img src={DescarozadaSachet} alt="" />
        </div>
      </div>
      <div className="container-info-product">
        <div className="image-container">
          <img src={RellenaSachet} alt="" />
        </div>
        <div>
          <h3 className="product-name">Aceitunas rellenas con pasta de morrón</h3>
          <p>
          Ideales para tus picadas y pizzas, y obviamente para el pionono de Navidad y el vitel toné.
          </p>
          <h3 className="product-name">presentacion</h3>
          <ul>
          <li><FaCheck className="icon-product"/> <span> 100g escurrido</span></li>
            <li><FaCheck className="icon-product"/> <span> 190g neto</span></li>
          </ul>
        </div>
      </div>  
    </div>
  );
};

export default DoyPackGrande;