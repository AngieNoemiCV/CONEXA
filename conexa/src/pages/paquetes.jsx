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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar que el teléfono tenga exactamente 10 dígitos
    if (telefono.length !== 10 || !/^\d+$/.test(telefono)) {
      setErrorTelefono('El teléfono debe tener exactamente 10 dígitos.');
      return;
    } else {
      setErrorTelefono(''); // Limpiar el mensaje de error si es válido
    }

    // Validar que el correo electrónico sea válido
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar correos
    if (!regexCorreo.test(correo)) {
      setErrorCorreo('Por favor, ingresa un correo electrónico válido.');
      return;
    } else {
      setErrorCorreo(''); // Limpiar el mensaje de error si es válido
    }

    // Validar que todos los campos estén llenos
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
      setMensaje('¡Gracias! Nos pondremos en contacto contigo pronto.');
      setNombre('');
      setCorreo('');
      setTelefono('');
      setPaqueteSeleccionado('');
    } catch (error) {
      setMensaje('Hubo un error al enviar tu solicitud. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="paquetes-container">
      <h1>Paquetes Disponibles</h1>
      <div className="paquete">
        <p>🔹 Paquete - 5 MG - $350/mes</p>
        <button onClick={() => setPaqueteSeleccionado('5 MG - $350/mes')}>Contratar</button>
      </div>
      <div className="paquete">
        <p>🔹 Paquete - 10 MG - $580/mes</p>
        <button onClick={() => setPaqueteSeleccionado('10 MG - $580/mes')}>Contratar</button>
      </div>
      <div className="paquete">
        <p>🔹 Paquete - 15 MG - $730/mes</p>
        <button onClick={() => setPaqueteSeleccionado('15 MG - $730/mes')}>Contratar</button>
      </div>
      <div className="paquete">
        <p>🔹 Paquete - 20 MG - $1044/mes</p>
        <button onClick={() => setPaqueteSeleccionado('20 MG - $1044/mes')}>Contratar</button>
      </div>

      {/* Formulario para contratar */}
      {paqueteSeleccionado && (
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
          <button type="submit">Enviar solicitud</button>
        </form>
      )}

      {/* Mensaje de confirmación o error */}
      {mensaje && <p className="mensaje">{mensaje}</p>}
    </div>
  );
};

export default Paquetes;