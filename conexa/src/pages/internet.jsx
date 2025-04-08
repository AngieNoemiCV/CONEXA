import React, { useState } from 'react';
import './internet.css'; // Asegúrate de que la ruta sea correcta

const Internet = () => {
  const [faqVisibility, setFaqVisibility] = useState({});

  const toggleFaq = (index) => {
    setFaqVisibility((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const faqs = [
    {
      question: '¿Qué es una topología de red en malla?',
      answer:
        'Es una estructura donde cada nodo está conectado a uno o más nodos, proporcionando múltiples rutas para los datos. Esto aumenta la fiabilidad y la redundancia de la red.',
    },
    {
      question: '¿Puedo usar ambos WiFi de 2.4 GHz y 5 GHz?',
      answer:
        'Sí, nuestros routers son dual-band, lo que significa que puedes conectarte a la frecuencia que mejor se adapte a tus necesidades. El WiFi de 2.4 GHz es ideal para mayor cobertura, mientras que el de 5 GHz ofrece mayor velocidad en distancias más cortas.',
    },
    {
      question: '¿Qué ventajas tiene el Internet híbrido?',
      answer:
        'El Internet híbrido combina la estabilidad de la fibra óptica con la cobertura global del satélite, ofreciendo un servicio más resistente a interrupciones y fallos externos.',
    },
    {
      question: '¿Cómo puedo contratar el servicio?',
      answer:
        'Ponte en contacto con nosotros a través de nuestro sitio web o llámanos al número de atención al cliente. Nuestro equipo estará encantado de ayudarte.',
    },
    {
      question: '¿Cuál es la cobertura y qué alcance en metros tiene el módem?',
      answer:
        'En cuanto al alcance del módem dentro de tu hogar, este puede variar según el tipo de construcción, interferencias y ubicación del dispositivo. Generalmente, un módem WiFi tiene un alcance de entre 10 y 30 metros en interiores. Si necesitas mayor cobertura, puedes optar por repetidores de señal o un sistema de malla WiFi.',
    },
    {
      question: '¿Cuántos teléfonos y/o equipos soporta cada paquete?',
      answer:
        'El número de dispositivos que pueden conectarse simultáneamente depende del paquete contratado y del tipo de uso que se le dé a la conexión. A continuación, te damos una referencia aproximada:\n\n- **5MG** → Hasta 3 dispositivos para navegación básica (redes sociales, correo y navegación web).\n- **10MG** → Hasta 6 dispositivos con navegación fluida y reproducción de videos en calidad estándar.\n- **15MG** → Hasta 10 dispositivos con transmisión en HD y videollamadas sin interrupciones.\n- **20MG** → Hasta 15 dispositivos con juegos en línea, streaming en 4K y descargas rápidas.\n\nEl rendimiento también puede verse afectado por la cantidad de dispositivos conectados al mismo tiempo y el tipo de actividad realizada en cada uno. Si necesitas más velocidad o estabilidad, puedes consultar opciones como repetidores de señal o una conexión por cable ethernet.',
    }
    
  ];

  return (
    <div className="service-page">
      <h1>Internet de Alta Velocidad</h1>
      <p>
        Instalamos y configuramos Internet para tu hogar o negocio con la mejor tecnología disponible.
      </p>

      <section>
        <h2>Topología de Red</h2>
        <div className="flex-container">
          <img
            src="https://media2.giphy.com/media/waew7tMWAh200/200w.webp?cid=790b7611hw6gtzoexmxim1jhmb6amb8b8t7wqilwr17q81ko&ep=v1_gifs_search&rid=200w.webp&ct=g"
            alt="Topología de Malla"
            className="topologia-image"
          />
          <p>
            Nuestra red utiliza una topología de <strong>Malla</strong>, lo que garantiza una conexión robusta y confiable. Esta estructura permite que los nodos de la red estén interconectados, proporcionando múltiples rutas para los datos y asegurando que, incluso en caso de fallos en algún punto, la conexión se mantenga activa.
          </p>
        </div>
      </section>

      <section>
        <h2>¿Qué ofrecemos?</h2>
        <div className="service-cards">
          <div className="service-card">
            <h3>Velocidad</h3>
            <p>Ofrecemos velocidades de hasta 100 Mbps, adaptables a tus necesidades.</p>
            <img
              src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHczeTI0cmxpeTJpOWF3a240ZWswb3Q4MTk0ZHRqbzlzbWo1OW42ZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/emySgWo0iBKWqni1wR/200w.webp"
              alt="Velocidad"
              className="service-image"
            />
          </div>
          <div className="service-card">
            <h3>Tecnología WiFi</h3>
            <p>
              Soporte para redes WiFi de 2.4 GHz y 5 GHz, lo que te permite conectar todos tus dispositivos con la mejor calidad de señal.
            </p>
            <img
              src="https://media3.giphy.com/media/WTu5YH9J0kyVtymRIe/200.webp?cid=790b7611tckcv4sv4n69w38uzaes39lph0w9bayu25lrwves&ep=v1_gifs_search&rid=200.webp&ct=g"
              alt="Tecnología WiFi"
              className="service-image"
            />
          </div>
          <div className="service-card">
            <h3>Cobertura</h3>
            <p>
              Nuestra infraestructura está diseñada para ofrecer cobertura en áreas urbanas y rurales, con una conexión estable y de baja latencia.
            </p>
            <img
              src="https://media1.giphy.com/media/yI2e6qMaZeNcQ/giphy.webp?cid=ecf05e47iq3h553q6dcqsln7yep3s16sfvzm5kmw3b3nbr5r&ep=v1_gifs_related&rid=giphy.webp&ct=g"
              alt="Cobertura"
              className="service-image"
            />
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
            <h3>5 Mbps</h3>
            <p>
              <strong>Ideal para:</strong> Usuarios que navegan en redes sociales, revisan correos electrónicos y consumen contenido ligero.
              <br />
              <strong>Ventajas:</strong> Económico y suficiente para tareas básicas.
              <br />
              <strong>Dispositivos:</strong> Hasta 3 dispositivos conectados simultáneamente.
            </p>
          </div>
          <div className="service-card">
            <h3>10 Mbps</h3>
            <p>
              <strong>Ideal para:</strong> Familias pequeñas o personas que trabajan desde casa.
              <br />
              <strong>Ventajas:</strong> Velocidad adecuada para streaming en HD, videollamadas y descargas moderadas.
              <br />
              <strong>Dispositivos:</strong> Hasta 6 dispositivos conectados simultáneamente.
            </p>
          </div>
          <div className="service-card">
            <h3>15 Mbps</h3>
            <p>
              <strong>Ideal para:</strong> Hogares con múltiples usuarios y dispositivos conectados.
              <br />
              <strong>Ventajas:</strong> Velocidad rápida para streaming en 4K, juegos en línea y descargas rápidas.
              <br />
              <strong>Dispositivos:</strong> Hasta 10 dispositivos conectados simultáneamente.
            </p>
          </div>
          <div className="service-card">
            <h3>20 Mbps</h3>
            <p>
              <strong>Ideal para:</strong> Negocios pequeños o hogares con altas demandas de conectividad.
              <br />
              <strong>Ventajas:</strong> Máxima velocidad para múltiples actividades simultáneas, como streaming en 4K, teletrabajo y descargas pesadas.
              <br />
              <strong>Dispositivos:</strong> Hasta 15 dispositivos conectados simultáneamente.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2>Próximamente: Internet Híbrido</h2>
        <div className="flex-container">
          <img
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDkxOHhxNm4xNGN2cHUxZW0wMzltN2RsMGZjd2h0YWg1bXk4eTY1dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l41YvpiA9uMWw5AMU/giphy.gif"
            alt="Internet Híbrido"
            className="hybrid-image"
          />
          <p>
            Actualmente, ofrecemos Internet satelital de alta calidad, pero muy pronto implementaremos <strong>fibra óptica</strong>. Esto nos permitirá ofrecer un servicio híbrido que combina lo mejor de ambas tecnologías. Con esta solución, tendrás un respaldo automático en caso de interrupciones causadas por fenómenos naturales o fallos externos, garantizando que siempre estés conectado.
          </p>
        </div>
      </section>

      <section>
        <h2>Preguntas Frecuentes</h2>
        <dl>
          {faqs.map((faq, index) => (
            <div key={index}>
              <dt onClick={() => toggleFaq(index)} style={{ cursor: 'pointer', color: '#3498db' }}>
                {faq.question}
              </dt>
              {faqVisibility[index] && <dd>{faq.answer}</dd>}
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
};

export default Internet;