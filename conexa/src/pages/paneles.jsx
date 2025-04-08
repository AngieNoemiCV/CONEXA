import React, { useState } from 'react';
import './Paneles.css';
import { db, collection, addDoc } from '../firebase';

const Paneles = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    electrodomesticos: '',
    descripcion: ''
  });
  const [mensajeError, setMensajeError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensajeError('');
    
    try {
      // Guardar los datos en Firestore
      await addDoc(collection(db, 'solicitudes_paneles'), {
        nombre: formData.nombre,
        correo: formData.correo,
        telefono: formData.telefono,
        electrodomesticos: formData.electrodomesticos,
        descripcion: formData.descripcion,
        fecha: new Date().toISOString(),
        tipo: 'cotizacion_paneles_solares'
      });
      
      alert('Cotización solicitada. Un asesor se contactará contigo para diseñar tu sistema solar personalizado.');
      setShowForm(false);
      setFormData({
        nombre: '',
        correo: '',
        telefono: '',
        electrodomesticos: '',
        descripcion: ''
      });
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setMensajeError('Hubo un error al enviar tu solicitud. Por favor intenta nuevamente.');
    }
  };
  return (
    <div className="service-page">
      <h1>Sistemas de Energía Solar</h1>
      <p>
        Reduce tu factura eléctrica hasta un 95% con nuestros sistemas de paneles solares personalizados. 
        Energía limpia, renovable y de bajo mantenimiento para tu hogar o negocio.
      </p>

      <section className="benefits-section">
        <h2>🔆 ¿Qué son los paneles solares y por qué usarlos?</h2>

        <div className="benefit-item">
          <h3>✅ Energía Renovable y Limpia</h3>
          <div className="benefit-content">
            <img src="https://ftp3.syscom.mx/usuarios/ftp/marketing_digital/eco_green_energy/syscomAndColombia/2020/12/28/img_2364.png" alt="Energía limpia" className="benefit-img" />
            <div>
              <p>Los paneles solares convierten la luz del sol en electricidad sin emisiones contaminantes.</p>
              <p>Reduces tu huella de carbono y contribuyes al cuidado del medio ambiente.</p>
            </div>
          </div>
        </div>

        <div className="benefit-item">
          <h3>✅ Ahorro Económico</h3>
          <div className="benefit-content">
            <img src="https://ftp3.syscom.mx/usuarios/ftp/marketing_digital/eco_green_energy_group_/syscomAndColombia/2020/04/21/img_613.jpg" alt="Ahorro económico" className="benefit-img" />
            <div>
              <p>Recupera tu inversión en 3-5 años y disfruta de energía casi gratis por más de 25 años.</p>
              <p>Protección contra los constantes aumentos en las tarifas eléctricas.</p>
            </div>
          </div>
        </div>

        <div className="benefit-item">
          <h3>✅ Independencia Energética</h3>
          <div className="benefit-content">
            <img src="https://ftp3.syscom.mx/usuarios/ftp/banners_index/syscom/eco-green-energy.jpg?_gl=1*naipz0*_gcl_au*NzIxOTU0OTIzLjE3NDM1NzA1NTY.cdcd" alt="Independencia energética" className="benefit-img" />
            <div>
              <p>Reduce tu dependencia de la red eléctrica convencional.</p>
              <p>Sistemas con baterías para tener energía incluso durante apagones.</p>
            </div>
          </div>
        </div>

        <div className="benefit-item">
          <h3>✅ Bajo Mantenimiento</h3>
          <div className="benefit-content">
            <img src="https://ftp3.syscom.mx/usuarios/ftp/marketing_digital/eco_green_energy/syscomAndColombia/2020/10/05/img_2171.jpg" alt="Bajo mantenimiento" className="benefit-img" />
            <div>
              <p>Nuestros sistemas requieren solo 1-2 limpiezas anuales.</p>
              <p>Garantías de 10-25 años en equipos y 80% de eficiencia después de 25 años.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="advantages-section">
        <h2>💡 Ventajas de Elegirnos</h2>
        <div className="advantages-grid">
          <div className="advantage-card">
            <h3>Diseño Personalizado</h3>
            <p>Analizamos tu consumo real para diseñar un sistema optimizado a tus necesidades específicas.</p>
            <img src="https://st2.depositphotos.com/1075946/9910/i/450/depositphotos_99104260-stock-photo-architects-working-on-project.jpg" alt="Diseño personalizado" className="advantage-img" />
          </div>
          <div className="advantage-card">
            <h3>Equipos de Primera</h3>
            <p>Trabajamos con marcas líderes mundiales (Canadian Solar, Huawei, LG, Tesla).</p>
            <img src="https://www.energiareal.mx/wp-content/uploads/2023/11/5-2.png" alt="Equipos de calidad" className="advantage-img" />
          </div>
          <div className="advantage-card">
            <h3>Instalación Profesional</h3>
            <p>Ingenieros certificados con más de 10 años de experiencia en proyectos residenciales e industriales.</p>
            <img src="https://www.energiareal.mx/wp-content/uploads/2023/11/1-3.png" alt="Instalación profesional" className="advantage-img" />
          </div>
          <div className="advantage-card">
            <h3>Financiamiento</h3>
            <p>Opción de pago a meses sin intereses o arrendamiento con opción a compra.</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAk9TNm7ufEVAL0oPpixKcxKgzz3J5jBffA&s" alt="Financiamiento solar" className="advantage-img" />
          </div>
        </div>
      </section>

      <section className="selection-section">
        <h2>🛠 ¿Cómo Dimensionamos tu Sistema?</h2>
        <p>Consideramos estos factores clave para calcular tu sistema ideal:</p>
        <ul>
          <li><strong>Consumo eléctrico mensual:</strong> Analizamos tus recibos de luz</li>
          <li><strong>Electrodomésticos:</strong> Aires acondicionados, refrigeradores, iluminación, etc.</li>
          <li><strong>Horas de uso:</strong> Cuándo y cuánto tiempo usas cada equipo</li>
          <li><strong>Orientación de tu techo:</strong> Para maximizar la captación solar</li>
          <li><strong>Sombras:</strong> Árboles o edificios que puedan afectar el rendimiento</li>
        </ul>
      </section>

      <section className="cta-section">
        <h2>☀️ ¿Listo para Ahorrar con Energía Solar?</h2>
        <p>
          En <strong>EsEco Green Energy</strong>, te ofrecemos:
        </p>
        <ul>
          <li>✔ Estudio de viabilidad sin costo</li>
          <li>✔ Proyección exacta de ahorros</li>
          <li>✔ Instalación en 2-5 días hábiles</li>
          <li>✔ Trámites ante CFE incluidos</li>
        </ul>
        
        {!showForm ? (
          <>
            <p>
              Solicita una cotización personalizada completando nuestro formulario:
            </p>
            <button className="cta-button" onClick={() => setShowForm(true)}>
              Cotizar mi sistema solar
            </button>
          </>
        ) : (
          <div className="inline-form">
            <form onSubmit={handleSubmit}>
              <h3>📋 Información para tu Cotización</h3>
              
              <div className="form-group">
                <label>Nombre completo*</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Ej: Juan Pérez"
                />
              </div>
              
              <div className="form-group">
                <label>Correo electrónico*</label>
                <input
                  type="email"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  required
                  placeholder="Ej: contacto@empresa.com"
                />
              </div>
              
              <div className="form-group">
                <label>Teléfono*</label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  placeholder="Ej: 5512345678"
                />
              </div>
              
              <div className="form-group">
                <label>Electrodomésticos principales*</label>
                <input
                  type="text"
                  name="electrodomesticos"
                  value={formData.electrodomesticos}
                  onChange={handleChange}
                  required
                  placeholder="Ej: 2 aires acondicionados, 10 focos LED, refrigerador..."
                />
              </div>
              
              <div className="form-group">
                <label>Describe tu consumo o necesidades</label>
                <textarea
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Ej: Mi recibo de luz llega de $2,500 mensuales, quiero reducir mi consumo en un 80%..."
                ></textarea>
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
        
        <p className="sustainability-message">
          🌱 Contribuye al planeta mientras ahorras dinero. La energía solar es el futuro hoy.
        </p>
      </section>
    </div>
  );
};

export default Paneles;
