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
          <img src={DescarozadaSachet} alt="" />
        </div>
        <div>
          <h3 className="product-name">Cobertura para Pizza</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            odit! Laudantium illo reiciendis doloribus veritatis quasi
            laboriosam nesciunt distinctio reprehenderit dolorum debitis, nemo
            id corrupti nisi odit dolorem quas aperiam?
          </p>
          <h3 className="product-name">presentacion</h3>
          <ul>
            <li><FaCheck className="icon-product"/> <span> 100gm</span></li>
            <li><FaCheck className="icon-product"/> <span> 100gm</span></li>
            <li><FaCheck className="icon-product"/> <span> 100gm</span></li>
          </ul>
        </div>
      </div>
      <div className="container-info-product1">
        <div>
          <h3 className="product-name">Aceitunas Verdes</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            odit! Laudantium illo reiciendis doloribus veritatis quasi
            laboriosam nesciunt distinctio reprehenderit dolorum debitis, nemo
            id corrupti nisi odit dolorem quas aperiam?
          </p>
          <h3 className="product-name">presentacion</h3>
          <ul>
            <li><FaCheck className="icon-product"/> <span> 100gm</span></li>
            <li><FaCheck className="icon-product"/> <span> 100gm</span></li>
            <li><FaCheck className="icon-product"/> <span> 100gm</span></li>
          </ul>
        </div>
        <div className="image-container">
          <img src={RellenaSachet} alt="" />
        </div>
      </div>
      <div className="container-info-product">
        <div className="image-container">
          <img src={VerdeSachet} alt="" />
        </div>
        <div>
          <h3 className="product-name">Aceitunas C/ Morron</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            odit! Laudantium illo reiciendis doloribus veritatis quasi
            laboriosam nesciunt distinctio reprehenderit dolorum debitis, nemo
            id corrupti nisi odit dolorem quas aperiam?
          </p>
          <h3 className="product-name">presentacion</h3>
          <ul>
            <li><FaCheck className="icon-product"/> <span> 100gm</span></li>
            <li><FaCheck className="icon-product"/> <span> 100gm</span></li>
            <li><FaCheck className="icon-product"/> <span> 100gm</span></li>
          </ul>
        </div>
      </div>  
    </div>
  );
};

export default DoyPackGrande;