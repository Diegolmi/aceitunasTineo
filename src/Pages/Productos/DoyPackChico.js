import React from "react";
import "./productos.css";
import Coberturax100 from "../../assets/img/PNG/DoyPackChico/Coberturax100.jpg";
import Descarozadax100 from "../../assets/img/PNG/DoyPackChico/Descarozadax100.jpg";
import Pepinillox100 from "../../assets/img/PNG/DoyPackChico/Pepinillox100.jpg";
import Premiumx100 from "../../assets/img/PNG/DoyPackChico/Premiumx100.jpg";
import Rellenax100 from "../../assets/img/PNG/DoyPackChico/Rellenax100.jpg";
import Rodajadax100 from "../../assets/img/PNG/DoyPackChico/Rodajadax100.jpg";
import Verdex100 from "../../assets/img/PNG/DoyPackChico/Verdex100.jpg";


import { FaCheck } from 'react-icons/fa';

const DoyPackChico = () => {
  return (
    <div className="product-container" id="packchico">
      
        <h1 className="title-product">Packs Chicos</h1>
     
      <div className="container-info-product">
        <div className="image-container">
          <img src={Coberturax100} alt="" />
        </div>
        <div>
          <h3 className="product-name">Cobertura para Pizza</h3>
          <p>
          Realza el sabor de tus pizzas con estas aceitunas en rodajas y tiras de morrón encurtido en salmuera. 
          </p>
          <h3 className="product-name">presentacion</h3>
          <ul>
            <li><FaCheck className="icon-product"/> <span> 100g escurrido</span></li>
            <li><FaCheck className="icon-product"/> <span> 200g neto</span></li>
          </ul>
        </div>
      </div>
      <div className="container-info-product1">
        <div>
          <h3 className="product-name">Aceitunas Verdes</h3>
          <p>
            Ideales para acompañar tus picadas y pizzas.
          </p>
          <h3 className="product-name">presentacion</h3>
          <ul>
            <li><FaCheck className="icon-product"/> <span> 100g escurrido</span></li>
            <li><FaCheck className="icon-product"/> <span> 200g neto</span></li>
          </ul>
        </div>
        <div className="image-container">
          <img src={Verdex100} alt="" />
        </div>
      </div>
      <div className="container-info-product">
        <div className="image-container">
          <img src={Rellenax100} alt="" />
        </div>
        <div>
          <h3 className="product-name">Aceitunas rellenas con pasta de morrón</h3>
          <p>
            Ideales para tus picadas y pizzas, y obviamente para el pionono de Navidad y el vitel toné.
          </p>
          <h3 className="product-name">presentacion</h3>
          <ul>
          <li><FaCheck className="icon-product"/> <span> 100g escurrido</span></li>
            <li><FaCheck className="icon-product"/> <span> 200g neto</span></li>
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
          <li><FaCheck className="icon-product"/> <span> 100g escurrido</span></li>
            <li><FaCheck className="icon-product"/> <span> 200g neto</span></li>
          </ul>
        </div>
        <div className="image-container">
          <img  src={Premiumx100} alt="" />
        </div>
      </div>
      <div className="container-info-product">
        <div className="image-container">
          <img src={Pepinillox100} alt="" />
        </div>
        <div>
          <h3 className="product-name">Pepinillos en vinagre</h3>
          <p>
          Pepinillos encurtidos, ideales para las picadas, ensaladas y sándwiches.
          </p>
          <h3 className="product-name">presentacion</h3>
          <ul>
          <li><FaCheck className="icon-product"/> <span> 100g escurrido</span></li>
            <li><FaCheck className="icon-product"/> <span> 200g neto</span></li>
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
          <li><FaCheck className="icon-product"/> <span> 100g escurrido</span></li>
            <li><FaCheck className="icon-product"/> <span> 200g neto</span></li>
          </ul>
        </div>
        <div className="image-container">
          <img src={Rodajadax100} alt="" />
        </div>
      </div>
      <div className="container-info-product">
        <div className="image-container">
          <img src={Descarozadax100} alt="" />
        </div>
        <div>
          <h3 className="product-name">Aceitunas Descarozadas</h3>
          <p>
           Las empanadas, pasteles de papa y ensaladas se van a distinguir con estas delicias en rodajas.
          </p>
          <h3 className="product-name">presentacion</h3>
          <ul>
          <li><FaCheck className="icon-product"/> <span> 100g escurrido</span></li>
            <li><FaCheck className="icon-product"/> <span> 200g neto</span></li>
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default DoyPackChico;
