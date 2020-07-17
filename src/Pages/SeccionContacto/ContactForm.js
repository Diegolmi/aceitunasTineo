import React from 'react';
import './ContactForm.css';
import Button from 'react-bootstrap/Button';
import { GoLocation } from 'react-icons/go';
import { FiPhoneCall } from 'react-icons/fi';
import { FaEnvelopeOpenText, FaFacebookSquare, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useForm } from 'react-hook-form'

const ContactForm = () => {
    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }


    return (
        <div className="body-contact">
        <div className="content">
            <h1 className="logo-contact my-5">Contactanos</h1>

            <div className="contact-wrapper">
                <div className="contact-form">
                    {/* <h3>contactanos</h3> */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p>
                            <label>Nombre</label>
                            <input
                                type="text"
                                name="nombre"
                                ref={register({
                                    required: {
                                        value: true, 
                                        message: 'Nombre es requerido'
                                        }, 
                                    maxLength: {
                                        value: 15, 
                                        message: 'No más de 15 carácteres!'
                                        },
                                    minLength: {
                                        value: 2, 
                                        message: 'Mínimo 2 carácteres'
                                        }
                                    })}
                            />
                            <span className="text-danger text-small d-block mb-2">
                                {errors.nombre && errors.nombre.message}
                            </span>

                        </p>
                        <p>
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                ref={register({
                                    required: {
                                        value: true, 
                                        message: 'Email es requerido'
                                        }, 
                                    })}
                            />
                            <span className="text-danger text-small d-block mb-2">
                                {errors.email && errors.email.message}
                            </span>
                        </p>
                        <p>
                            <label>Telefono</label>
                            <input
                                type="tel"
                                name="telefono"
                                ref={register({
                                    required: {
                                        value: true, 
                                        message: 'Telefono o celular es requerido'
                                        }, 
                                    })}
                            />
                            <span className="text-danger text-small d-block mb-2">
                                {errors.telefono && errors.telefono.message}
                            </span>
                        </p>
                        <p>
                            <label>Asunto</label>
                            <input
                                type="text"
                                name="asunto"
                                ref={register({
                                    required: {
                                        value: true, 
                                        message: 'el Asunto es requerido'
                                        }, 
                                    })}
                            />
                            <span className="text-danger text-small d-block mb-2">
                                {errors.asunto && errors.asunto.message}
                            </span>
                        </p>
                        <p className="block">
                            <label>Consulta</label>
                            <textarea 
                                name="consulta"
                                rows="3" 
                                ref={register({
                                    required: {
                                        value: true, 
                                        message: 'Consulta es requerido'
                                        }, 
                                    maxLength: {
                                        value: 200, 
                                        message: 'No más de 200 carácteres!'
                                        },
                                    minLength: {
                                        value: 2, 
                                        message: 'Mínimo 2 carácteres'
                                        }
                                    })}
                            
                            />
                            <span className="text-danger text-small d-block mb-2">
                                {errors.consulta && errors.consulta.message}
                            </span>
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
                        <li> <FiPhoneCall /> Atención al consumidor (011) 4458-1135</li>
                        <li><FaEnvelopeOpenText /> email contacto</li>
                        <li><FaWhatsapp /> Atención comercial +54 1158735826</li>
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