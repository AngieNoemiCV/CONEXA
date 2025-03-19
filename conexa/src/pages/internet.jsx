import React from 'react';
import './internet.css'; // Asegúrate de que la ruta sea correcta

const Internet = () => {
  return (
    <div className="service-page">
      <h1>Internet de Alta Velocidad</h1>
      <p>
        Instalamos y configuramos Internet para tu hogar o negocio con la mejor tecnología disponible.
      </p>

      <section>
        <h2>Topología de Red</h2>
        <p>
          Nuestra red utiliza una topología de <strong>Malla</strong>, lo que garantiza una conexión robusta y confiable. Esta estructura permite que los nodos de la red estén interconectados, proporcionando múltiples rutas para los datos y asegurando que, incluso en caso de fallos en algún punto, la conexión se mantenga activa.
        </p>
      </section>

      <section>
        <h2>Detalles Técnicos</h2>
        <div className="service-cards">
          <div className="service-card">
            <h3>Velocidad</h3>
            <p>Ofrecemos velocidades de hasta 100 Mbps, adaptables a tus necesidades.</p>
          </div>
          <div className="service-card">
            <h3>Tecnología WiFi</h3>
            <p>Soporte para redes WiFi de 2.4 GHz y 5 GHz, lo que te permite conectar todos tus dispositivos con la mejor calidad de señal.</p>
          </div>
          <div className="service-card">
            <h3>Cobertura</h3>
            <p>Nuestra infraestructura está diseñada para ofrecer cobertura en áreas urbanas y rurales, con una conexión estable y de baja latencia.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Paquetes de Internet</h2>
        <p>
          Ofrecemos diferentes paquetes de Internet para adaptarnos a tus necesidades. A continuación, te explicamos las ventajas y diferencias de cada uno:
        </p>
        <div className="service-cards">
          <div className="service-card">
            <h3>5 MG</h3>
            <p>
              <strong>Ideal para:</strong> Usuarios que navegan en redes sociales, revisan correos electrónicos y consumen contenido ligero.
              <br />
              <strong>Ventajas:</strong> Económico y suficiente para tareas básicas.
              <br />
              <strong>Dispositivos:</strong> Hasta 3 dispositivos conectados simultáneamente.
            </p>
          </div>
          <div className="service-card">
            <h3>10 MG</h3>
            <p>
              <strong>Ideal para:</strong> Familias pequeñas o personas que trabajan desde casa.
              <br />
              <strong>Ventajas:</strong> Velocidad adecuada para streaming en HD, videollamadas y descargas moderadas.
              <br />
              <strong>Dispositivos:</strong> Hasta 6 dispositivos conectados simultáneamente.
            </p>
          </div>
          <div className="service-card">
            <h3>15 MG</h3>
            <p>
              <strong>Ideal para:</strong> Hogares con múltiples usuarios y dispositivos conectados.
              <br />
              <strong>Ventajas:</strong> Velocidad rápida para streaming en 4K, juegos en línea y descargas rápidas.
              <br />
              <strong>Dispositivos:</strong> Hasta 10 dispositivos conectados simultáneamente.
            </p>
          </div>
          <div className="service-card">
            <h3>20 MG</h3>
            <p>
              <strong>Ideal para:</strong> Negocios pequeños o hogares con altas demandas de conectividad.
              <br />
              <strong>Ventajas:</strong> Máxima velocidad para múltiples actividades simultáneas, como streaming en 4K, teletrabajo y descargas pesadas.
              <br />
              <strong>Dispositivos:</strong> Hasta 15 dispositivos conectados simultáneamente.
            </p>
          </div>
        </div>
        <p>
          <strong>Nota:</strong> Todos nuestros paquetes incluyen tecnología WiFi dual-band (2.4 GHz y 5 GHz) para una conexión óptima en todos tus dispositivos.
        </p>
      </section>

      <section>
        <h2>Próximamente: Internet Híbrido</h2>
        <p>
          Actualmente, ofrecemos Internet satelital de alta calidad, pero muy pronto implementaremos <strong>fibra óptica</strong>. Esto nos permitirá ofrecer un servicio híbrido que combina lo mejor de ambas tecnologías. Con esta solución, tendrás un respaldo automático en caso de interrupciones causadas por fenómenos naturales o fallos externos, garantizando que siempre estés conectado.
        </p>
      </section>

      <section>
        <h2>Preguntas Frecuentes</h2>
        <dl>
          <dt>¿Qué es una topología de red en malla?</dt>
          <dd>
            Es una estructura donde cada nodo está conectado a uno o más nodos, proporcionando múltiples rutas para los datos. Esto aumenta la fiabilidad y la redundancia de la red.
          </dd>

          <dt>¿Puedo usar ambos WiFi de 2.4 GHz y 5 GHz?</dt>
          <dd>
            Sí, nuestros routers son dual-band, lo que significa que puedes conectarte a la frecuencia que mejor se adapte a tus necesidades. El WiFi de 2.4 GHz es ideal para mayor cobertura, mientras que el de 5 GHz ofrece mayor velocidad en distancias más cortas.
          </dd>

          <dt>¿Qué ventajas tiene el Internet híbrido?</dt>
          <dd>
            El Internet híbrido combina la estabilidad de la fibra óptica con la cobertura global del satélite, ofreciendo un servicio más resistente a interrupciones y fallos externos.
          </dd>

          <dt>¿Cómo puedo contratar el servicio?</dt>
          <dd>
            Ponte en contacto con nosotros a través de nuestro sitio web o llámanos al número de atención al cliente. Nuestro equipo estará encantado de ayudarte.
          </dd>
        </dl>
      </section>
    </div>
  );
};

export default Internet;