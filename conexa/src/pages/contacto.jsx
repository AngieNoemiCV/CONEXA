import React from 'react';
import { FaWhatsapp, FaEnvelope, FaFacebook} from 'react-icons/fa'; // Importa los iconos
import './Contacto.css'; // Asegúrate de crear este archivo CSS para los estilos

const Contacto = () => {
  return (
    <div className="contacto-container">
      <h1>¿En qué podemos ayudarte?</h1>

      <div className="contenido-principal">
        {/* Sección izquierda */}
        <div className="seccion-izquierda">
          <h2>Atención a Clientes</h2>
          <p>
            Te ayudamos con dudas sobre tus estados de cuenta, formas de pago, ayuda técnica y más.
          </p>
          <div className="canales-contacto">
            {/* Primera fila (3 iconos) */}
            <div className="fila-iconos">
              <a href="https://wa.me/5213122427856?text=Quisiera%20información%20para%20la%20contratación%20de%20internet." target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="icono" />
              </a>
              <a href="mailto:conexacolima@gmail.com?subject=Soporte Conexa&body=Hola, necesito ayuda con..." target="_blank" rel="noopener noreferrer" onClick={(e) => {
                if (!window.confirm("Se abrirá tu cliente de correo predeterminado. ¿Deseas continuar?")) {
                  e.preventDefault(); // Cancela la acción si el usuario no confirma
                }
              }}>
                <FaEnvelope className="icono" />
              </a>
              <a
                href="https://www.facebook.com/www.conexa.com.mx?locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="icono" />
              </a>
            </div>
          </div>
        </div>

        {/* Sección derecha */}
        <div className="seccion-derecha">
          <h2>Para contratar algun servicio</h2>
          <div className="info-contacto">
            <p><strong>Lamar al:</strong> 312-688-2709</p>
            <p><strong>WhatsApp:</strong> 312-242-7856</p>
            <p><strong>Correo:</strong> conexacolima@gmail.com</p>
            <p>
              <strong>Facebook:</strong>{" "}
              <a
                href="https://www.facebook.com/www.conexa.com.mx?locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.facebook.com/www.conexa.com.mx
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Sección inferior */}
      <div className="seccion-inferior">
        <h2>Asesoría y Cargos Recurrentes</h2>
        <div className="info-asesoria">
          <p>
            <strong>Asesoría de tu cuenta Conexa:</strong> 312 688 2709<br />
            <strong>Horario:</strong> Lunes a Viernes de 9:00am a 2:00pm y de 5:00pm a 7:00pm 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacto;