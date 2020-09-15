import React from "react";
import "./productos.css";
import Descarozadax160  from "../../assets/img/PNG/DoyPackGrande/Descarozadax160.jpg";
import Negrax180 from "../../assets/img/PNG/DoyPackGrande/Negrax180.jpg";
import Picklex180 from "../../assets/img/PNG/DoyPackGrande/Picklex180.jpg";
import Premiumx180 from "../../assets/img/PNG/DoyPackGrande/Premiumx180.jpg";
import Rellenax180 from "../../assets/img/PNG/DoyPackGrande/Rellenax180.jpg";
import Rodajadax160 from "../../assets/img/PNG/DoyPackGrande/Rodajadax160.jpg";
import Verdex180 from "../../assets/img/PNG/DoyPackGrande/Verdex180.jpg";

import { FaCheck } from 'react-icons/fa';

const DoyPackGrande = () => {
  return (
    <div className="product-container">
      
        <h1 className="title-product">Packs Grandes</h1>
     
      <div className="container-info-product">
        <div className="image-container">
          <img src={Verdex180} alt="" />
        </div>
        <div>
          <h3 className="product-name">Aceitunas verdes</h3>
          <p>
            Ideales para acompañar tus picadas y pizzas.
          </p>
          <h3 className="product-name">presentacion</h3>
          <ul>
            <li><FaCheck className="icon-product"/> <span> 180g escurrido</span></li>
            <li><FaCheck className="icon-product"/> <span> 300g neto</span></li>
          </ul>
        </div>
      </div>
      <div className="container-info-product1">
        <div>
          <h3 className="product-name">Aceitunas verdes Premium</h3>
          <p>
            Aceitunas verdes muy carnosas. Sólo para fanáticos.
          </p>
          <h3 className="product-name">presentacion</h3>
          <ul>
          <li><FaCheck className="icon-product"/> <span> 180g escurrido</span></li>
            <li><FaCheck className="icon-product"/> <span> 300g neto</span></li>
          </ul>
        </div>
        <div className="image-container">
          <img src={Premiumx180} alt="" />
        </div>
      </div>
      <div className="container-info-product">
        <div className="image-container">
          <img src={Descarozadax160} alt="" />
        </div>
        <div>
          <h3 className="product-name">Aceitunas verdes descarozadas</h3>
          <p>
            Usa tu imaginación en la cocina con unas ricas descarozadas en tus platos y ensaladas.
          </p>
          <h3 className="product-name">presentacion</h3>
          <ul>
          <li><FaCheck className="icon-product"/> <span> 160g escurrido</span></li>
            <li><FaCheck className="icon-product"/> <span> 300g neto</span></li>
          </ul>
        </div>
      </div>
      <div className="container-info-product1">
        <div>
          <h3 className="product-name">Aceitunas verdes rodajadas</h3>
          <p>
          Las empanadas, pasteles de papa y ensaladas se van a distinguir con estas delicias en rodajas.
          </p>
          <h3 className="product-name">presentacion</h3>
          <ul>
          <li><FaCheck className="icon-product"/> <span> 160g escurrido</span></li>
            <li><FaCheck className="icon-product"/> <span> 300g neto</span></li>
          </ul>
        </div>
        <div className="image-container">
          <img  src={Rodajadax160} alt="" />
        </div>
      </div>
      <div className="container-info-product">
        <div className="image-container">
          <img src={Rellenax180} alt="" />
        </div>
        <div>
          <h3 className="product-name">Aceitunas rellenas con pasta de morrón</h3>
          <p>
          Ideales para tus picadas y pizzas, y obviamente para el pionono de Navidad
          </p>
          <h3 className="product-name">presentacion</h3>
          <ul>
          <li><FaCheck className="icon-product"/> <span> 180g escurrido</span></li>
            <li><FaCheck className="icon-product"/> <span> 300g neto</span></li>
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
          <li><FaCheck className="icon-product"/> <span> 180g escurrido</span></li>
            <li><FaCheck className="icon-product"/> <span> 300g neto</span></li>
          </ul>
        </div>
        <div className="image-container">
          <img src={Negrax180} alt="" />
        </div>
      </div>
      <div className="container-info-product">
        <div className="image-container">
          <img src={Picklex180} alt="" />
        </div>
        <div>
          <h3 className="product-name">Pickles mixtos en vinagre</h3>
          <p>
          Una variedad de vegetales encurtidos perfectos para tus ensaladas y picadas.
          </p>
          <h3 className="product-name">presentacion</h3>
          <ul>
          <li><FaCheck className="icon-product"/> <span> 180g escurrido</span></li>
            <li><FaCheck className="icon-product"/> <span> 300g neto</span></li>
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default DoyPackGrande;