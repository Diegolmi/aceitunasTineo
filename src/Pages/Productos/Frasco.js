import React from "react";
import "./productos.css";
import AjiFrasco from "../../assets/img/PNG/Frascos/Frasco_ají.png";
import DescarozadaFrasco from "../../assets/img/PNG/Frascos/Frasco_descarozada.png";
import NegraFrasco from "../../assets/img/PNG/Frascos/Frasco_negra.png";
import PepinilloFrasco from "../../assets/img/PNG/Frascos/Frasco_pepinillo.png";
import RodajaFrasco from "../../assets/img/PNG/Frascos/Frasco_rodajada.png";
import VerdeFrasco from "../../assets/img/PNG/Frascos/Frasco_Verde.png";

import { FaCheck } from "react-icons/fa";

const Frasco = () => {
  return (
    <div className="product-container">
      <h1 className="title-product">Nuestros Productos</h1>

      <div className="container-info-product">
        <div className="image-container">
          <img src={VerdeFrasco} alt="" />
        </div>
        <div>
          <h3 className="product-name">Aceitunas verdes</h3>
          <p>Ideales para acompañar tus picadas y pizzas.</p>
          <h3 className="product-name">presentacion</h3>
          <ul>
            <li>
              <FaCheck className="icon-product" /> <span> 220g escurrido</span>
            </li>
            <li>
              <FaCheck className="icon-product" /> <span> 350g neto</span>
            </li>
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
          <li>
              <FaCheck className="icon-product" /> <span> 220g escurrido</span>
            </li>
            <li>
              <FaCheck className="icon-product" /> <span> 350g neto</span>
            </li>
          </ul>
        </div>
        <div className="image-container">
          <img src={DescarozadaFrasco} alt="" />
        </div>
      </div>
      <div className="container-info-product">
        <div className="image-container">
          <img src={RodajaFrasco} alt="" />
        </div>
        <div>
          <h3 className="product-name">Aceitunas verdes rodajadas</h3>
          <p>
          Las empanadas, pasteles de papa y ensaladas se van a distinguir con estas delicias en rodajas.
          </p>
          <h3 className="product-name">presentacion</h3>
          <ul>
            <li>
              <FaCheck className="icon-product" /> <span> 170g escurrido</span>
            </li>
            <li>
              <FaCheck className="icon-product" /> <span> 350g neto</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-info-product1">
        <div>
          <h3 className="product-name">Aceitunas negras naturales</h3>
          <p>
          Un sabor único que marca un antes y un después en tu paladar. Súper carnosas, probalas!
          </p>
          <h3 className="product-name">presentacion</h3>
          <ul>
          <li>
              <FaCheck className="icon-product" /> <span> 220g escurrido</span>
            </li>
            <li>
              <FaCheck className="icon-product" /> <span> 350g neto</span>
            </li>
          </ul>
        </div>
        <div className="image-container">
          <img src={NegraFrasco} alt="" />
        </div>
      </div>
      <div className="container-info-product">
        <div className="image-container">
          <img src={PepinilloFrasco} alt="" />
        </div>
        <div>
          <h3 className="product-name">Pepinillos en vinagre</h3>
          <p>
          Pepinillos encurtidos, ideales para las picadas, ensaladas y sándwiches.
          </p>
          <h3 className="product-name">presentacion</h3>
          <ul>
          <li>
              <FaCheck className="icon-product" /> <span> 220g escurrido</span>
            </li>
            <li>
              <FaCheck className="icon-product" /> <span> 350g neto</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-info-product1">
        <div>
          <h3 className="product-name">Ajíes en vinagre</h3>
          <p>
          Usalos en tus ensaladas, picadas y pizzas. Van bien con todo!
          </p>
          <h3 className="product-name">presentacion</h3>
          <ul>
            <li>
              <FaCheck className="icon-product" /> <span> 110g escurrido</span>
            </li>
            <li>
              <FaCheck className="icon-product" /> <span> 220g neto</span>
            </li>
          </ul>
        </div>
        <div className="image-container">
          <img src={AjiFrasco} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Frasco;
