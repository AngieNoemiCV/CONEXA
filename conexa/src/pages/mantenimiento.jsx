import React, { useState } from 'react';
import './Mantenimiento.css';
import { db, collection, addDoc } from '../firebase';

const Mantenimiento = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [npiezas, setNPiezas] = useState(1);
  const [mensaje, setMensaje] = useState('');
  const [errorTelefono, setErrorTelefono] = useState('');
  const [errorCorreo, setErrorCorreo] = useState('');

  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const incrementarPiezas = () => {
    setNPiezas(prev => prev + 1);
  };

  const decrementarPiezas = () => {
    setNPiezas(prev => (prev > 1 ? prev - 1 : 1));
  };

  const handlePiezasChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^[1-9]\d*$/.test(value)) {
      setNPiezas(value === '' ? 1 : parseInt(value, 10));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
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
        npiezas,
        tipo: 'mantenimiento',
        fecha: new Date().toISOString(),
      };
    
      await addDoc(collection(db, 'solicitudes de mantenimiento'), datosCliente);
      alert('¡Solicitud enviada con éxito! Estaremos en contacto contigo lo más pronto posible.');
      
      setNombre('');
      setCorreo('');
      setTelefono('');
      setDescripcion('');
      setNPiezas(1);
      setMostrarFormulario(false);
    } catch (error) {
      console.error('Error al guardar en Firestore:', error);
      setMensaje('Hubo un error al enviar tu solicitud. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="mantenimiento-container">
      <section className="hero-section">
        <h1>¿Por qué contratar nuestro servicio de mantenimiento para tu computadora?</h1>
        <p className="intro-text">
          Mantener tu equipo en óptimas condiciones <strong>no es un lujo, es una necesidad</strong>. Ya sea una computadora de escritorio o una laptop, el polvo, el desgaste natural y la falta de cuidados pueden generar fallos costosos, pérdida de productividad e incluso la pérdida irreversible de tus datos.
        </p>
        <p className="company-intro">
          En <span className="company-name">CONEXA</span>, ofrecemos mantenimiento preventivo y correctivo para alargar la vida de tu equipo, mejorar su rendimiento y evitar gastos innecesarios.
        </p>
      </section>

      <section className="benefits-section">
        <h2>Beneficios de nuestro servicio</h2>
        
        <div className="benefit-card">
          <h3>1. Mayor velocidad y eficiencia</h3>
          <ul>
            <li>Eliminamos <strong>archivos basura</strong>, software obsoleto y optimizamos el sistema.</li>
            <li><strong>Actualizamos controladores</strong> y sistemas operativos para un rendimiento fluido.</li>
            <li>Ideal para <strong>evitar lentitud</strong> en laptops y equipos de escritorio por falta de mantenimiento.</li>
          </ul>
        </div>

        <div className="benefit-card">
          <h3>2. Protección contra el sobrecalentamiento</h3>
          <ul>
            <li><strong>Limpieza profunda</strong> de ventiladores y disipadores (¡el polvo es el enemigo silencioso!).</li>
            <li>Aplicación de <strong>pasta térmica nueva</strong> en CPUs/GPUs para un mejor enfriamiento.</li>
            <li>Evita <strong>apagados repentinos</strong> y daños por altas temperaturas (especialmente crítico en laptops).</li>
          </ul>
        </div>

        <div className="benefit-card">
          <h3>3. Extiende la vida útil de tu equipo</h3>
          <ul>
            <li>Revisión de <strong>componentes críticos</strong>: discos duros, fuentes de poder, tarjetas madre.</li>
            <li>Prevenimos fallos por desgaste antes de que ocurran.</li>
            <li><strong>Ahorras dinero</strong>: Un mantenimiento cuesta menos que una reparación mayor o comprar equipo nuevo.</li>
          </ul>
        </div>

        <div className="benefit-card">
          <h3>4. Seguridad y prevención de desastres</h3>
          <ul>
            <li><strong>Diagnóstico</strong> de discos duros/SSD para evitar pérdida de información.</li>
            <li>Eliminación de <strong>virus, spyware y ransomware</strong> que ponen en riesgo tus archivos.</li>
            <li><strong>Backup básico</strong> de datos importantes (opcional).</li>
          </ul>
        </div>

        <div className="benefit-card">
          <h3>5. Mantenimiento físico profesional</h3>
          <ul>
            <li><strong>Equipos de escritorio</strong>: Limpieza interna, revisión de conexiones y cableado.</li>
            <li><strong>Laptops</strong>: Atención especial a baterías, teclados y sistemas de ventilación compactos.</li>
            <li>Usamos <strong>herramientas y productos especializados</strong> para no dañar componentes delicados.</li>
          </ul>
        </div>
      </section>

      <section className="frequency-section">
        <h2>¿Cada cuánto se debe hacer mantenimiento?</h2>
        <div className="frequency-grid">
          <div className="frequency-item">
            <h3>Mantenimiento básico (software)</h3>
            <p>Cada <strong>3-6 meses</strong></p>
          </div>
          <div className="frequency-item">
            <h3>Mantenimiento físico (hardware)</h3>
            <p>Cada <strong>6-12 meses</strong> (o antes si el equipo está en ambientes polvosos)</p>
          </div>
        </div>
      </section>

      <section className="offer-section">
        <div className="special-offer">
          <span className="offer-badge">✨ No dudes más</span>
          <h2>¿Te interesa nuestro servicio?</h2>
          <button 
            className="cta-button"
            onClick={() => setMostrarFormulario(true)}
          >
            📝 Te invitamos a completar nuestro formulario y un asesor se pondrá en contacto contigo!
          </button>
          <p className="offer-text">Evita que tu computadora falle en el peor momento.</p>
        </div>
      </section>

      {mostrarFormulario && (
        <div className="formulario-overlay">
          <div className="formulario-container">
            <button 
              className="cerrar-formulario"
              onClick={() => setMostrarFormulario(false)}
            >
              ×
            </button>
            
            <h2>Solicitud de servicio de mantenimiento</h2>
            <p>Por favor completa tus datos y nos pondremos en contacto contigo</p>
            
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
                <label>Número de equipos:</label>
                <div className="contador-piezas">
                  <button 
                    type="button" 
                    className="contador-btn" 
                    onClick={decrementarPiezas}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={npiezas}
                    onChange={handlePiezasChange}
                    className="contador-input"
                  />
                  <button 
                    type="button" 
                    className="contador-btn" 
                    onClick={incrementarPiezas}
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="form-group">
                <label>¿Quieres dar detalles? Agrega marca, algún problema que tenga etc:</label>
                <textarea
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                  required
                  rows="4"
                />
              </div>
              
              <button type="submit" className="enviar-formulario">
                Enviar solicitud
              </button>
            </form>
            
            {mensaje && <p className="mensaje-formulario">{mensaje}</p>}
          </div>
        </div>
      )}

      <section className="why-us-section">
        <h2>¿Por qué elegirnos?</h2>
        <ul className="why-us-list">
          <li> <strong>Técnicos certificados</strong> con experiencia en marcas como Dell, HP, Lenovo, ASUS, etc.</li>
          <li> <strong>Servicio a domicilio</strong> (opcional) para mayor comodidad.</li>
          <li> <strong>Garantía por escrito</strong> en nuestros trabajos.</li>
        </ul>
        <p className="final-cta">💻 <strong>No esperes a que tu equipo falle...</strong> ¡Protege tu inversión hoy!</p>
      </section>
    </div>
  );
};

export default Mantenimiento;