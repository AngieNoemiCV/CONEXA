import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { db, collection, addDoc } from '../firebase'; // Asegúrate de que la ruta sea correcta
import './paquetes.css';
const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Paquetes = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [paqueteSeleccionado, setPaqueteSeleccionado] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [errorTelefono, setErrorTelefono] = useState('');
  const [errorCorreo, setErrorCorreo] = useState('');
  const [mostrarFormulario, setMostrarFormulario] = useState(false); // Estado para controlar la visibilidad del formulario

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validaciones previas (teléfono, correo, campos vacíos)
    if (telefono.length !== 10 || !/^\d+$/.test(telefono)) {
      setErrorTelefono('El teléfono debe tener exactamente 10 dígitos.');
      return;
    } else {
      setErrorTelefono('');
    }
  
    if (!regexCorreo.test(correo)) {
      setErrorCorreo('Por favor, ingresa un correo electrónico válido.');
      return;
    } else {
      setErrorCorreo('');
    }
  
    if (!nombre || !correo || !telefono || !paqueteSeleccionado) {
      setMensaje('Por favor, completa todos los campos.');
      return;
    }
  
    const datosCliente = {
      nombre,
      correo,
      telefono,
      paquete: paqueteSeleccionado,
      fecha: new Date().toLocaleString(),
    };
  
    try {
      // Guardar los datos en Firestore
      await addDoc(collection(db, 'solicitudes de paquetes'), datosCliente);
      alert('¡Solicitud enviada con éxito! Estaremos en contacto contigo lo más pronto posible.'); // Mostrar alerta
      setNombre('');
      setCorreo('');
      setTelefono('');
      setPaqueteSeleccionado('');
      setMostrarFormulario(false);
    } catch (error) {
      setMensaje('Hubo un error al enviar tu solicitud. Inténtalo de nuevo.');
    }
  };

  const handleContratarClick = (paquete) => {
    setPaqueteSeleccionado(paquete); // Establecer el paquete seleccionado
    setMostrarFormulario(true); // Mostrar el formulario
  };

  return (
    <div className="paquetes-container">
      {/* Lema inspirador */}
      <div className="lema">
        <h2>¡Conéctate a la velocidad que necesitas!</h2>
        <p>
          En un mundo donde la conexión lo es todo, ofrecemos paquetes de Internet diseñados para
          adaptarse a tu estilo de vida. Ya sea para trabajar, estudiar, jugar o disfrutar de tu
          entretenimiento favorito, tenemos el plan perfecto para ti.
        </p>
      </div>

      {/* Consejos para elegir el mejor paquete */}
      <div className="consejos">
        <h2>Consejos para elegir el mejor paquete según tus necesidades</h2>
        <ul>
          <li>
            <strong>Si solo navegas por internet, revisas redes sociales y ves videos ocasionales →</strong> 5 Mbps
          </li>
          <li>
            <strong>Si haces videollamadas, usas Netflix o YouTube en HD y conectas un par de dispositivos →</strong> 10 Mbps
          </li>
          <li>
            <strong>Si descargas archivos frecuentemente, juegas en línea o haces streaming en Full HD →</strong> 15 Mbps
          </li>
          <li>
            <strong>Si tienes varios dispositivos conectados al mismo tiempo, haces teletrabajo o quieres calidad en 4K →</strong> 20 Mbps
          </li>
        </ul>
      </div>

      {/* Lista de paquetes */}
      <h1>Paquetes Disponibles</h1>
      <p className="mensaje-precios">
        *** Precios sugeridos por el proveedor, exclusivo para usuarios y clientes domésticos. El precio puede variar dependiendo de la instalación y el material utilizado. ***
      </p>
      <div className="paquete">
        <p>🔹 Paquete - 5 Mbps - $350/mes</p>
        <button onClick={() => handleContratarClick('5 MG - $350/mes')}>Contratar</button>
      </div>
      <div className="paquete">
        <p>🔹 Paquete - 10 Mbps - $580/mes</p>
        <button onClick={() => handleContratarClick('10 MG - $580/mes')}>Contratar</button>
      </div>
      <div className="paquete">
        <p>🔹 Paquete - 15 Mbps - $730/mes</p>
        <button onClick={() => handleContratarClick('15 MG - $730/mes')}>Contratar</button>
      </div>
      <div className="paquete">
        <p>🔹 Paquete - 20 Mbps - $1044/mes</p>
        <button onClick={() => handleContratarClick('20 MG - $1044/mes')}>Contratar</button>
      </div>

      {/* Formulario para contratar (solo se muestra si mostrarFormulario es true) */}
      {mostrarFormulario && (
        <form onSubmit={handleSubmit} className="formulario-contratar">
          <h2>Contratar: {paqueteSeleccionado}</h2>
          <div className="form-group">
            <label>Nombre:</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Correo electrónico:</label>
            <input
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
            {errorCorreo && <p className="error-message">{errorCorreo}</p>}
          </div>
          <div className="form-group">
            <label>Número telefónico:</label>
            <input
              type="tel"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
              maxLength={10} // Limita el campo a 10 caracteres
            />
            {errorTelefono && <p className="error-message">{errorTelefono}</p>}
          </div>
          <button type="submit" className="btn-enviar-solicitud">Enviar solicitud</button>
        </form>
      )}

      {/* Mensaje de confirmación o error */}
      {mensaje && <p className="mensaje">{mensaje}</p>}
    </div>
  );
};

export default Paquetes;