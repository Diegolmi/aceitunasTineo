import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="contenedor-about" id="about">
      <h1 className="titulo-about">Quienes Somos</h1>
      <div className="container-text-about">
        <p className="text-about">
          Somos una PyME familiar argentina en su segunda generación. Desde hace
          más de 30 años brindando productos frescos de nuestro país, con
          sabores distinguidos y a precios accesibles.
            <br/>
            <br/>
          <blockquote>En cada paso, <span>Tineo</span> {' '}
          piensa en vos.</blockquote>
        </p>
        
      </div>
      
      
    </div>
  );
};
export default About;
