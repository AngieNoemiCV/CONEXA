import React from 'react';
import './home.css';

function Home() {
  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>"Donde quiera que estés llegamos para conectarnos"</h1>
          <p>Conoce la nueva red de internet en Colima vive la experiencia.</p>
        </div>
      </section>

      {/* Quiénes somos */}
      <section className="quienes-somos">
        <div className="container">
          <h2>Quiénes somos</h2>
          <p>
            Somos <strong>CONEXA</strong>, una empresa comprometida con brindar el mejor servicio de internet en Colima. 
            Nuestra misión es conectar a las personas y negocios con una red rápida, estable y accesible.
          </p>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="porque-elegirnos">
        <div className="container">
          <h2>¿Por qué elegirnos?</h2>
          <ul>
            <li>✅ Internet de alta velocidad y estabilidad.</li>
            <li>✅ Atención al cliente personalizada.</li>
            <li>✅ Precios competitivos y sin cargos ocultos.</li>
            <li>✅ Cobertura en toda la región de Colima.</li>
            <li>✅ Tecnología de última generación.</li>
          </ul>
        </div>
      </section>

      {/* Ventajas de elegir CONEXA */}
      <section className="ventajas">
        <div className="container">
          <h2>Ventajas de elegir CONEXA</h2>
          <div className="ventajas-grid">
            <div className="ventaja">
              <h3>✅ Velocidad garantizada</h3>
              <p>
                Ofrecemos velocidades de internet que se adaptan a tus necesidades, ya sea para uso doméstico o empresarial.
              </p>
            </div>
            <div className="ventaja">
              <h3>✅ Soporte técnico 24/7</h3>
              <p>
                Nuestro equipo de soporte está disponible las 24 horas del día, los 7 días de la semana, para resolver cualquier problema.
              </p>
            </div>
            <div className="ventaja">
              <h3>✅ Sin contratos forzosos</h3>
              <p>
                No te atamos con contratos largos. Puedes disfrutar de nuestros servicios sin compromisos a largo plazo.
              </p>
            </div>
            <div className="ventaja">
              <h3>✅ Instalación rápida</h3>
              <p>
                Nuestro equipo de instalación está listo para conectarte en el menor tiempo posible.
              </p>
            </div>
            <div className="ventaja">
              <h3>✅ Precios transparentes</h3>
              <p>
                Sin cargos ocultos. Sabrás exactamente lo que pagas desde el primer día.
              </p>
            </div>
            <div className="ventaja">
              <h3>✅ Cobertura amplia</h3>
              <p>
                Llegamos a más de 50,000 hogares y negocios en Colima, y seguimos expandiendo nuestra red.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ubicación en el mapa */}
      <section className="ubicacion">
        <div className="container">
          <h2>Nuestra ubicación</h2>
          <p>Visítanos en nuestra oficina principal:</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.719041983694!2d-103.7133379246865!3d19.24534488180872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84255aa46b9dfd13%3A0xee526d1e1385b0cc!2sAv.%20San%20Fernando%20533-30%2C%20Camino%20Real%2C%2028014%20Colima%2C%20Col.!5e0!3m2!1ses!2smx!4v1697050000000!5m2!1ses!2smx"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Extensión de Conexa */}
      <section className="extension">
        <div className="container">
          <h2>Extensión de Conexa</h2>
          <p>
            En <strong>CONEXA</strong>, hemos llegado a más de <strong>50,000 hogares y negocios</strong> en Colima, 
            brindando conexión de calidad y soporte técnico excepcional. Nuestra red sigue creciendo para 
            llegar a más comunidades.
          </p>
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=15tZm1xvCMf8_Ou0sRSfrbJCO_T1_mzc&ehbc=2E312F&noprof=1"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Home;