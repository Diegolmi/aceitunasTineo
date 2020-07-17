import React from 'react';
import './ContactForm.css';
import Button from 'react-bootstrap/Button';
import { GoLocation } from 'react-icons/go';
import { FiPhoneCall } from 'react-icons/fi';
import { FaEnvelopeOpenText, FaFacebookSquare, FaInstagram } from 'react-icons/fa';

const ContactForm = () => {
    return (
        <div className="body-contact">
        <div className="content">
            <h1 className="logo-contact">Contactanos</h1>

            <div className="contact-wrapper">
                <div className="contact-form">
                    {/* <h3>contactanos</h3> */}
                    <form>
                        <p>
                            <label>Nombre Completo</label>
                            <input type="text"/>
                        </p>
                        <p>
                            <label>Email</label>
                            <input type="email"/>
                        </p>
                        <p>
                            <label>Telefono</label>
                            <input type="tel"/>
                        </p>
                        <p>
                            <label>Asunto</label>
                            <input type="text"/>
                        </p>
                        <p className="block">
                            <label>Consulta</label>
                            <textarea name="Consulta" rows="3"></textarea>
                        </p>
                        <p className="block">
                            <button type="submit">
                                Enviar Consulta
                            </button>
                        </p>
                    </form>
                </div>
                <div className="contact-info">
                    <h4>mas info</h4>
                    <ul>
                        <li><GoLocation /> direccion</li>
                        <li> <FiPhoneCall /> (011) 4458-1135</li>
                        <li><FaEnvelopeOpenText /> email contacto</li>
                    </ul>
                    <p>Tineo Argentina</p>
                    <p>Seguinos en Nuestras Redes Sociales: </p>
                    <div className="redes-sociales">
                    <Button target="_blank" href="https://www.facebook.com/TineoArg" className="redes-sociales-boton mx-2"><FaFacebookSquare /></Button>
                    <Button target="_blank" href="https://www.instagram.com/tineoarg/" className="redes-sociales-boton mx-2"><FaInstagram /></Button>
                    </div>
                </div>

            </div>

            
        </div>
        </div>
    )
}


export default ContactForm;