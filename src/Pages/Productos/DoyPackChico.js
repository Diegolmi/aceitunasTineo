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
      
        <h1 className="title-product">Nuestros Productos</h1>
     
      <div className="container-info-product">
        <div className="image-container">
          <img src={Coberturax100} alt="" />
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
          <img src={Descarozadax100} alt="" />
        </div>
      </div>
      <div className="container-info-product">
        <div className="image-container">
          <img src={Pepinillox100} alt="" />
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
      <div className="container-info-product1">
        <div>
          <h3 className="product-name">Aceitunas Premium</h3>
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
          <img  src={Premiumx100} alt="" />
        </div>
      </div>
      <div className="container-info-product">
        <div className="image-container">
          <img src={Rellenax100} alt="" />
        </div>
        <div>
          <h3 className="product-name">Aceitunas Negras</h3>
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
          <h3 className="product-name">Aceitunas Rodajadas</h3>
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
          <img src={Rodajadax100} alt="" />
        </div>
      </div>
      <div className="container-info-product">
        <div className="image-container">
          <img src={Verdex100} alt="" />
        </div>
        <div>
          <h3 className="product-name">Aceitunas Descarozadas</h3>
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

export default DoyPackChico;
