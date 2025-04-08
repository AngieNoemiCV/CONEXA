import React, { useState } from 'react';
import { db, collection, addDoc } from '../firebase';
import './Camaras.css';

const Camaras = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    tipoPropiedad: '',
    areas: [],
    numCamaras: 1,
    caracteristicas: [],
    almacenamiento: '',
    presupuesto: '',
    descripcion: ''
  });

  const [errors, setErrors] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    tipoPropiedad: '',
    areas: '',
    descripcion: ''
  });

  const [mensajeExito, setMensajeExito] = useState('');
  const [mensajeError, setMensajeError] = useState('');

  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexTelefono = /^\d{10}$/;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      const { [name]: currentValues = [] } = formData;
      let newValues;
      
      if (checked) {
        newValues = [...currentValues, value];
      } else {
        newValues = currentValues.filter(item => item !== value);
      }
      
      setFormData(prev => ({
        ...prev,
        [name]: newValues
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      nombre: '',
      correo: '',
      telefono: '',
      tipoPropiedad: '',
      areas: '',
      descripcion: ''
    };

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre completo es requerido';
      isValid = false;
    }

    if (!formData.correo) {
      newErrors.correo = 'El correo electrónico es requerido';
      isValid = false;
    } else if (!regexCorreo.test(formData.correo)) {
      newErrors.correo = 'Ingresa un correo electrónico válido';
      isValid = false;
    }

    if (!formData.telefono) {
      newErrors.telefono = 'El teléfono es requerido';
      isValid = false;
    } else if (!regexTelefono.test(formData.telefono)) {
      newErrors.telefono = 'El teléfono debe tener 10 dígitos';
      isValid = false;
    }

    if (!formData.tipoPropiedad) {
      newErrors.tipoPropiedad = 'Selecciona un tipo de propiedad';
      isValid = false;
    }

    if (formData.areas.length === 0) {
      newErrors.areas = 'Selecciona al menos un área a vigilar';
      isValid = false;
    }

    if (!formData.descripcion.trim()) {
      newErrors.descripcion = 'Describe tus necesidades específicas';
      isValid = false;
    } else if (formData.descripcion.trim().length < 20) {
      newErrors.descripcion = 'La descripción debe tener al menos 20 caracteres';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensajeExito('');
    setMensajeError('');
    
    if (validateForm()) {
      try {
        const datosCliente = {
          nombre: formData.nombre,
          correo: formData.correo,
          telefono: formData.telefono,
          tipoPropiedad: formData.tipoPropiedad,
          areas: formData.areas,
          numCamaras: formData.numCamaras,
          caracteristicas: formData.caracteristicas,
          almacenamiento: formData.almacenamiento,
          presupuesto: formData.presupuesto,
          descripcion: formData.descripcion,
          tipo: 'instalacion_camaras',
          fecha: new Date().toISOString(),
        };
      
        await addDoc(collection(db, 'solicitudes_camaras'), datosCliente);
        
        setMensajeExito('Cotización solicitada. Nos pondremos en contacto contigo pronto.');
        
        setTimeout(() => {
          setShowForm(false);
          setFormData({
            nombre: '',
            correo: '',
            telefono: '',
            tipoPropiedad: '',
            areas: [],
            numCamaras: 1,
            caracteristicas: [],
            almacenamiento: '',
            presupuesto: '',
            descripcion: ''
          });
          setMensajeExito('');
        }, 3000);
        
      } catch (error) {
        console.error('Error al guardar en Firestore:', error);
        setMensajeError('Hubo un error al enviar tu solicitud. Por favor inténtalo de nuevo.');
      }
    }
  };

  const handleNumCamaras = (increment) => {
    setFormData(prev => ({
      ...prev,
      numCamaras: Math.max(1, prev.numCamaras + (increment ? 1 : -1))
    }));
  };

  return (
    <div className="service-page">
      <h1>Instalación de Cámaras de Seguridad</h1>
      <p>
        Si estás considerando instalar cámaras de seguridad, estás en el lugar correcto. Aquí te explicamos por qué son esenciales, los tipos disponibles y todo lo que necesitas saber para proteger tu hogar o negocio.
      </p>

      <section className="benefits-section">
        <h2>¿Por qué Instalar Cámaras de Seguridad?</h2>
        <div className="service-cards">
          <div className="service-card">
            <div className="card-icon">👁️</div>
            <h3>Disuasión de Robos</h3>
            <p>Reduce hasta un 60% los intentos de robo con cámaras visibles.</p>
            <p className="highlight">Los delincuentes evitan propiedades vigiladas.</p>
          </div>
          
          <div className="service-card">
            <div className="card-icon">📱</div>
            <h3>Monitoreo Remoto</h3>
            <p>Vigila tu propiedad desde tu celular las 24/7.</p>
            <p className="highlight">Recibe alertas ante movimientos sospechosos.</p>
          </div>
          
          <div className="service-card">
            <div className="card-icon">🔍</div>
            <h3>Evidencia Digital</h3>
            <p>Grabaciones útiles para identificar intrusos.</p>
            <p className="highlight">Respaldan denuncias y reclamaciones de seguros.</p>
          </div>
          
          <div className="service-card">
            <div className="card-icon">👪</div>
            <h3>Protección Familiar</h3>
            <p>Supervisa a niños, mascotas o ancianos.</p>
            <p className="highlight">Mayor seguridad para empleados en negocios.</p>
          </div>
          
          <div className="service-card">
            <div className="card-icon">🎙️</div>
            <h3>Control de Accesos</h3>
            <p>Algunas cámaras permiten hablar con visitantes.</p>
            <p className="highlight">Ideal para recibir paquetes o verificar visitas.</p>
          </div>
        </div>
      </section>

      <section className="types-section">
        <h2>📷 Tipos de Cámaras de Seguridad</h2>
        <div className="table-container">
          <table className="cameras-table">
            <thead>
              <tr>
                <th>Tipo de Cámara</th>
                <th>Mejor Para</th>
                <th>Ventajas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Cámaras IP (Wi-Fi)</strong></td>
                <td>Hogares y negocios pequeños</td>
                <td>Fácil instalación, acceso remoto, alta calidad</td>
              </tr>
              <tr>
                <td><strong>Cámaras con Cable (CCTV)</strong></td>
                <td>Negocios grandes, exteriores</td>
                <td>Mayor estabilidad, resistentes a interferencias</td>
              </tr>
              <tr>
                <td><strong>Cámaras Inalámbricas</strong></td>
                <td>Lugares sin cableado</td>
                <td>Instalación flexible, sin obras</td>
              </tr>
              <tr>
                <td><strong>Cámaras con Visión Nocturna</strong></td>
                <td>Vigilancia nocturna</td>
                <td>Grabación en oscuridad con infrarrojos</td>
              </tr>
              <tr>
                <td><strong>Cámaras con Reconocimiento Facial</strong></td>
                <td>Seguridad avanzada</td>
                <td>Detecta rostros conocidos y envía alertas</td>
              </tr>
              <tr>
                <td><strong>Cámaras Ocultas (Domo/Bala)</strong></td>
                <td>Vigilancia discreta</td>
                <td>Diseño pequeño, difícil de detectar</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="selection-section">
        <h2>🛠 ¿Cómo Elegir la Mejor Cámara para Ti?</h2>
        <ul>
          <li>Define tu presupuesto (desde opciones económicas hasta sistemas profesionales).</li>
          <li>Elige entre Wi-Fi o cableado según tu necesidad de estabilidad.</li>
          <li>Revisa la resolución (Full HD 1080p o 4K para mayor claridad).</li>
          <li>Verifica el almacenamiento (nube, tarjeta SD o DVR).</li>
          <li>Considera instalación profesional si necesitas un sistema complejo.</li>
        </ul>
      </section>

      <section className="cta-section">
        {mensajeExito && (
          <div className="mensaje-exito">
            {mensajeExito}
          </div>
        )}
        {mensajeError && (
          <div className="mensaje-error">
            {mensajeError}
          </div>
        )}

        <h2>🚀 ¿Listo para Proteger tu Hogar o Negocio?</h2>
        <p>
          En <strong>CONEXA</strong>, te ofrecemos:
        </p>
        <ul>
          <li>✔ Asesoría gratuita para elegir el mejor sistema.</li>
          <li>✔ Instalación profesional con garantía.</li>
          <li>✔ Soporte 24/7 en caso de fallas.</li>
        </ul>
        
        {!showForm ? (
          <>
            <p>
              Si estás interesado en nuestro servicio, completa nuestro formulario y uno de nuestros especialistas se comunicará contigo.
            </p>
            <button className="cta-button" onClick={() => setShowForm(true)}>
              Solicitar cotización ahora
            </button>
          </>
        ) : (
          <div className="inline-form">
            <form onSubmit={handleSubmit}>
              <h3>Solicita tu cotización</h3>
              
              <div className="form-group">
                <label>Nombre completo*</label>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Ej: Juan Pérez García"
                  value={formData.nombre}
                  onChange={handleChange}
                  className={errors.nombre ? 'error-input' : ''}
                />
                {errors.nombre && <span className="error-message">{errors.nombre}</span>}
              </div>
              
              <div className="form-group">
                <label>Correo electrónico*</label>
                <input
                  type="email"
                  name="correo"
                  placeholder="Ej: contacto@empresa.com"
                  value={formData.correo}
                  onChange={handleChange}
                  className={errors.correo ? 'error-input' : ''}
                />
                {errors.correo && <span className="error-message">{errors.correo}</span>}
              </div>
              
              <div className="form-group">
                <label>Teléfono*</label>
                <input
                  type="tel"
                  name="telefono"
                  placeholder="Ej: 5551234567"
                  value={formData.telefono}
                  onChange={handleChange}
                  maxLength="10"
                  className={errors.telefono ? 'error-input' : ''}
                />
                {errors.telefono && <span className="error-message">{errors.telefono}</span>}
              </div>
              
              <div className="form-group">
                <label>Tipo de propiedad*</label>
                <select 
                  name="tipoPropiedad"
                  value={formData.tipoPropiedad}
                  onChange={handleChange}
                  className={errors.tipoPropiedad ? 'error-input' : ''}
                >
                  <option value="">Selecciona una opción</option>
                  <option value="casa">Casa habitación</option>
                  <option value="departamento">Departamento</option>
                  <option value="negocio">Negocio local</option>
                  <option value="oficina">Oficinas</option>
                  <option value="industrial">Área industrial</option>
                </select>
                {errors.tipoPropiedad && <span className="error-message">{errors.tipoPropiedad}</span>}
              </div>
              
              <div className="form-group">
                <label>Áreas a vigilar* (selecciona todas las que apliquen)</label>
                <div className={`checkbox-group ${errors.areas ? 'error-checkbox' : ''}`}>
                  <label>
                    <input 
                      type="checkbox" 
                      name="areas"
                      value="entrada"
                      onChange={handleChange}
                      checked={formData.areas.includes('entrada')}
                    /> Entrada principal
                  </label>
                  <label>
                    <input 
                      type="checkbox" 
                      name="areas"
                      value="estacionamiento"
                      onChange={handleChange}
                      checked={formData.areas.includes('estacionamiento')}
                    /> Estacionamiento
                  </label>
                  <label>
                    <input 
                      type="checkbox" 
                      name="areas"
                      value="interior"
                      onChange={handleChange}
                      checked={formData.areas.includes('interior')}
                    /> Pasillos/Interiores
                  </label>
                  <label>
                    <input 
                      type="checkbox" 
                      name="areas"
                      value="exterior"
                      onChange={handleChange}
                      checked={formData.areas.includes('exterior')}
                    /> Áreas exteriores
                  </label>
                </div>
                {errors.areas && <span className="error-message">{errors.areas}</span>}
              </div>
              
              <div className="form-group">
                <label>Número de cámaras estimadas</label>
                <div className="number-input">
                  <button type="button" onClick={() => handleNumCamaras(false)}>-</button>
                  <span>{formData.numCamaras}</span>
                  <button type="button" onClick={() => handleNumCamaras(true)}>+</button>
                </div>
              </div>
              
              <div className="form-group">
                <label>Características técnicas deseadas</label>
                <div className="checkbox-group">
                  <label>
                    <input 
                      type="checkbox" 
                      name="caracteristicas"
                      value="visionNocturna"
                      onChange={handleChange}
                      checked={formData.caracteristicas.includes('visionNocturna')}
                    /> Visión nocturna
                  </label>
                  <label>
                    <input 
                      type="checkbox" 
                      name="caracteristicas"
                      value="audio"
                      onChange={handleChange}
                      checked={formData.caracteristicas.includes('audio')}
                    /> Audio bidireccional
                  </label>
                  <label>
                    <input 
                      type="checkbox" 
                      name="caracteristicas"
                      value="deteccionMovimiento"
                      onChange={handleChange}
                      checked={formData.caracteristicas.includes('deteccionMovimiento')}
                    /> Detección de movimiento
                  </label>
                  <label>
                    <input 
                      type="checkbox" 
                      name="caracteristicas"
                      value="altaResolucion"
                      onChange={handleChange}
                      checked={formData.caracteristicas.includes('altaResolucion')}
                    /> Alta resolución (4K+)
                  </label>
                </div>
              </div>
              
              <div className="form-group">
                <label>Tipo de almacenamiento preferido</label>
                <select 
                  name="almacenamiento"
                  value={formData.almacenamiento}
                  onChange={handleChange}
                >
                  <option value="">Selecciona una opción</option>
                  <option value="nube">Almacenamiento en la nube</option>
                  <option value="tarjeta">Tarjeta SD</option>
                  <option value="dvr">DVR/NVR local</option>
                  <option value="nas">NAS empresarial</option>
                  <option value="hibrido">Híbrido</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Presupuesto estimado</label>
                <select 
                  name="presupuesto"
                  value={formData.presupuesto}
                  onChange={handleChange}
                >
                  <option value="">Selecciona un rango</option>
                  <option value="1000-2000">$1,000 - $2,000 MXN</option>
                  <option value="2000-3500">$2,000 - $3,500 MXN</option>
                  <option value="3500-5000">$3,500 - $5,000 MXN</option>
                  <option value="5000-10000">$5,000 - $10,000 MXN</option>
                  <option value="10000-20000">$10,000 - $20,000 MXN</option>
                  <option value="20000-30000">$20,000 - $30,000 MXN</option>
                  <option value="30000+">Más de $30,000 MXN</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Requisitos especiales*</label>
                <textarea
                  name="descripcion"
                  placeholder="Ej: Necesito reconocimiento facial para empleados, integración con sistema de alarma existente, cámaras resistentes a lluvia..."
                  value={formData.descripcion}
                  onChange={handleChange}
                  rows="4"
                  className={errors.descripcion ? 'error-input' : ''}
                ></textarea>
                {errors.descripcion && <span className="error-message">{errors.descripcion}</span>}
              </div>
              
              <div className="form-actions">
                <button type="submit" className="submit-btn">Enviar solicitud</button>
                <button 
                  type="button" 
                  className="cancel-btn"
                  onClick={() => setShowForm(false)}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        )}
        
        <p className="security-message">
          🔒 No esperes a que ocurra un incidente. La seguridad de tu familia y patrimonio no tiene precio.
        </p>
      </section>
    </div>
  );
};

export default Camaras;