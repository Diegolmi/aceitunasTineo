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
      
        <h1 className="title-product">Nuestros Productos</h1>
     
      <div className="container-info-product">
        <div className="image-container">
          <img src={Descarozadax160} alt="" />
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
          <img src={Negrax180} alt="" />
        </div>
      </div>
      <div className="container-info-product">
        <div className="image-container">
          <img src={Picklex180} alt="" />
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
          <img  src={Premiumx180} alt="" />
        </div>
      </div>
      <div className="container-info-product">
        <div className="image-container">
          <img src={Rellenax180} alt="" />
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
          <img src={Rodajadax160} alt="" />
        </div>
      </div>
      <div className="container-info-product">
        <div className="image-container">
          <img src={Verdex180} alt="" />
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

export default DoyPackGrande;