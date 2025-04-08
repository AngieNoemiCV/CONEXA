import React, { useState } from 'react';
import { db, collection, addDoc } from '../firebase';
import './Armados.css';

const Armados = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [errorTelefono, setErrorTelefono] = useState('');
  const [errorCorreo, setErrorCorreo] = useState('');

  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // URLs de las imágenes
  const imgPersonalizacion = "https://i.blogs.es/d15fd1/2560_3000-2/1366_2000.jpg";
  const imgProceso = "https://img.pccomponentes.com/pcblog/542/configuraciones-pc-gaming.jpg";

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (telefono.length !== 10 || !/^\d+$/.test(telefono)) {
      setErrorTelefono('El teléfono debe tener exactamente 10 dígitos.');
      return;
    }
  
    if (!regexCorreo.test(correo)) {
      setErrorCorreo('Por favor, ingresa un correo electrónico válido.');
      return;
    }
  
    if (!nombre || !correo || !telefono || !descripcion) {
      setMensaje('Por favor, completa todos los campos.');
      return;
    }
  
    try {
      const datosCliente = {
        nombre,
        correo,
        telefono,
        descripcion,
        servicio: 'armado_pc',
        fecha: new Date().toISOString(),
        estado: 'nuevo'
      };
    
      await addDoc(collection(db, 'solicitudes_servicios'), datosCliente);
      setMensaje('¡Solicitud enviada con éxito! Un asesor se pondrá en contacto contigo.');
      
      setNombre('');
      setCorreo('');
      setTelefono('');
      setDescripcion('');
      setErrorTelefono('');
      setErrorCorreo('');
    } catch (error) {
      console.error('Error al guardar en Firestore:', error);
      setMensaje('Hubo un error al enviar tu solicitud. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="armado-container">
      <section className="hero-section">
        <h1>Servicio Profesional de Armado de Computadoras</h1>
        <p className="intro-text">
          ¿Necesitas una computadora a la medida de tus necesidades? En <strong> CONEXA </strong> creamos equipos personalizados con componentes de alta calidad, optimizados para tu uso específico ya sea gaming, diseño, oficina o desarrollo.
        </p>
      </section>

      <section className="service-description">
        <h2>¿Qué ofrecemos en nuestro servicio de armado?</h2>
        
        <div className="service-card-with-image">
          <div className="service-card">
            <h3>Personalización Total</h3>
            <div className="service-content">
              <img src={imgPersonalizacion} alt="Personalización de PC" className="service-image" />
              <ul>
                <li><strong>Tú eliges las piezas:</strong> Selecciona cada componente según tus preferencias y presupuesto.</li>
                <li><strong>O nosotros te asesoramos:</strong> Si no estás seguro, nuestros expertos seleccionarán las mejores opciones según tus necesidades.</li>
                <li><strong>Equipos balanceados:</strong> Garantizamos que todos los componentes trabajen en armonía sin cuellos de botella.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="service-card-with-image">
          <div className="service-card">
            <h3>Proceso de Armado</h3>
            <div className="service-content">
              <img src={imgProceso} alt="Proceso de armado de PC" className="service-image" />
              <ul>
                <li><strong>Ensamblaje profesional:</strong> Realizado por técnicos certificados con años de experiencia.</li>
                <li><strong>Pruebas de estrés:</strong> Testeamos cada componente para garantizar estabilidad y rendimiento.</li>
                <li><strong>Cableado perfecto:</strong> Organización impecable para mejor flujo de aire y estética.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="advantages-section">
        <h2>Ventajas de armar tu PC con nosotros</h2>
        
        <div className="advantages-grid">
          <div className="advantage-card">
            <div className="advantage-icon">🛠️</div>
            <h3>Garantía por pieza y mano de obra</h3>
            <p>Cobertura completa en todos los componentes y en nuestro trabajo.</p>
          </div>

          <div className="advantage-card">
            <div className="advantage-icon">⚡</div>
            <h3>Armado rápido</h3>
            <p>Entrega en 48-72 horas hábiles una vez confirmados los componentes.</p>
          </div>

          <div className="advantage-card">
            <div className="advantage-icon">💰</div>
            <h3>Mejor precio que ensambladoras</h3>
            <p>Sin costos ocultos y con componentes de mejor calidad que PCs prearmadas.</p>
          </div>

          <div className="advantage-card">
            <div className="advantage-icon">🔧</div>
            <h3>Soporte post-venta</h3>
            <p>Asesoramiento gratuito por 3 meses después de la compra.</p>
          </div>
        </div>
      </section>

      <section className="process-section">
        <h2>¿Cómo funciona nuestro servicio?</h2>
        <ol className="process-steps">
          <li>
            <strong>Consulta inicial:</strong> Nos cuentas para qué necesitas el equipo (juegos, diseño, oficina, etc.) y tu presupuesto.
          </li>
          <li>
            <strong>Propuesta de configuración:</strong> Te enviamos opciones de componentes con sus características y precios.
          </li>
          <li>
            <strong>Ajustes finales:</strong> Personalizamos la configuración según tus comentarios.
          </li>
          <li>
            <strong>Armado y pruebas:</strong> Ensamblamos el equipo y realizamos pruebas exhaustivas.
          </li>
          <li>
            <strong>Entrega y capacitación:</strong> Te entregamos tu nueva PC con explicación de sus características.
          </li>
        </ol>
      </section>

      <section className="form-section">
        {!mostrarFormulario ? (
          <div className="cta-container">
            <h2>¿Listo para tener la computadora perfecta para ti?</h2>
            <button 
              className="cta-button"
              onClick={() => setMostrarFormulario(true)}
            >
              📩 Solicitar cotización ahora
            </button>
          </div>
        ) : (
          <div className="form-container">
            <h2>Solicitud de armado de computadora</h2>
            <p>Completa tus datos y te contactaremos para asesorarte</p>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nombre completo:</label>
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
                <label>Teléfono (10 dígitos):</label>
                <input
                  type="tel"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  required
                  maxLength={10}
                />
                {errorTelefono && <p className="error-message">{errorTelefono}</p>}
              </div>
              
              <div className="form-group">
                <label>Describe tus necesidades (ej: "PC para juegos con presupuesto de $20,000", "Equipo para edición de video", etc.):</label>
                <textarea
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                  required
                  rows="5"
                />
              </div>
              
              <div className="form-actions">
                <button type="submit" className="submit-button">
                  Enviar solicitud
                </button>
                <button 
                  type="button" 
                  className="cancel-button"
                  onClick={() => {
                    setMostrarFormulario(false);
                    setMensaje('');
                  }}
                >
                  Cancelar
                </button>
              </div>
            </form>
            
            {mensaje && <p className="form-message">{mensaje}</p>}
          </div>
        )}
      </section>
    </div>
  );
};

export default Armados;