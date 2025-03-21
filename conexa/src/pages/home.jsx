import React, { useState } from 'react';
import './home.css';

function Home() {
  const [expandedIndex, setExpandedIndex] = useState(null); // Estado para controlar qué ventaja está expandida
  const [activeIndex, setActiveIndex] = useState(null); // Estado para controlar qué imagen se muestra
  const [porqueElegirnosIndex, setPorqueElegirnosIndex] = useState(0); // Estado para controlar el índice activo en "¿Por qué elegirnos?"

  const handleToggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Alternar entre expandir y contraer
  };

  const toggleImage = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Alternar entre mostrar y ocultar la imagen
  };

  const ventajas = [
    {
      titulo: "✅ Velocidad garantizada",
      descripcion: "Ofrecemos velocidades de internet que se adaptan a tus necesidades, ya sea para uso doméstico o empresarial.",
      imagen: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeG82OWNoNHlmYm1zZndjaTFsejgzaHlpMGM4ZmV3ejRiMTB0ZXVjcCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Jo1Ox5v5pV9g9ati4S/100.webp",
    },
    {
      titulo: "✅ Soporte técnico 24/7",
      descripcion: "Nuestro equipo de soporte está disponible de Lunes a Viernes en un horario de 9:00 am a 2:00 pm y de 5:00 pm a 7:00 pm , para resolver cualquier problema.",
      imagen: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnY1bXJiOTJxdnNkbWwxZW1uYzdoMGVteGhzZG9lNjVwaTBveGk4dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zBSmegjNjsfVR7Hs5I/giphy.gif",
    },
    {
      titulo: "✅ Sin contratos forzosos",
      descripcion: "No te atamos con contratos largos. Puedes disfrutar de nuestros servicios sin compromisos a largo plazo.",
      imagen: "https://st.depositphotos.com/15585482/54810/v/450/depositphotos_548102544-stock-illustration-contract-cancellation-business-concept.jpg",
    },
    {
      titulo: "✅ Instalación rápida",
      descripcion: "Nuestro equipo de instalación está listo para conectarte en el menor tiempo posible.",
      imagen: "https://thenetworkinstallers.com/wp-content/uploads/2022/06/wifi-installation.jpg",
    },
    {
      titulo: "✅ Precios transparentes",
      descripcion: "Sin cargos ocultos. Sabrás exactamente lo que pagas desde el primer día.",
      imagen: "https://media3.giphy.com/media/ADgfsbHcS62Jy/200w.webp?cid=790b7611hphw2xirci7m8kitcts9o3ftilvahlohotu1l91n&ep=v1_gifs_search&rid=200w.webp&ct=g",
    },
    {
      titulo: "✅ Conectividad sin interrupciones, incluso en emergencias",
      descripcion: "Nuestro internet satelital te ofrece conexión estable y pronto será híbrido con fibra óptica, garantizando respaldo en caso de fallas por fenómenos naturales o daños inesperados.",
      imagen: "https://img.freepik.com/foto-gratis/amigos-icono-senal-wifi_53876-146439.jpg",
    },
  ];

  const porqueElegirnosItems = [
    {
      text: "✅ Contamos con la mejor respuesta de atención en caso de fallas en nuestro servicio.",
      image: "https://blog.conzultek.com/hs-fs/hubfs/mantenimiento-de-redes-2.png?width=2400&name=mantenimiento-de-redes-2.png",
    },
    {
      text: "✅ Tenemos una amplia cobertura en cualquiera de los lugares que tengamos nuestro servicio.",
      image: "https://www.redeszone.net/app/uploads-redeszone.net/2020/11/Insternet-Casa.jpg",
    },
    {
      text: "✅ Contamos con la mejor velocidad de red para que navegues en tus aplicaciones favoritas.",
      image: "https://www.codigosanluis.com/wp-content/uploads/2021/11/wifi-2214137.jpg",
    },
  ];

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
          <div className="quienes-somos-content">
            <div className="imagen-container">
              <img
                src="https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/284135318_105035985557666_1236536171424385193_n.png?_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeEY5LJ-Ui6xESBtWVp5GqwsHMa8I4dRncIcxrwjh1GdwtqO4oHz2316WyoKu0M6VBATSGJqbW5muMyCxp3fy_jN&_nc_ohc=K5Ruc8hyA_gQ7kNvgEfFTnQ&_nc_oc=Adn6SEWyIe1n9vwDAudeoboPJ0JQ_uyODV8wIdLA2nXde4zddPZhNUOO5AqCVrnRp0F0fD-uDZ3_Wl2C6rQzMa7E&_nc_zt=23&_nc_ht=scontent-qro1-2.xx&_nc_gid=yiKWuWL8pCut5kgxa5iTcw&oh=00_AYEQLAV_hWA1rKKD9Lbayl4hkPKMnLyNNsdaqQsOp4eScQ&oe=67E29981"
                alt="Imagen de Quiénes somos"
              />
            </div>
            <div className="texto-container">
              <p>
                Somos una empresa de servicios de telecomunicaciones que cuenta con la mejor conectividad y 
                los mejores paquetes que se adaptan a todo tipo de clientes y sus necesidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="porque-elegirnos">
        <div className="container">
          <h2>¿Por qué elegirnos?</h2>
          <div className="porque-elegirnos-content">
            <div className="imagen-container">
              <img src={porqueElegirnosItems[porqueElegirnosIndex].image} alt={`Imagen ${porqueElegirnosIndex + 1}`} />
            </div>
            <div className="texto-container">
              <ul>
                {porqueElegirnosItems.map((item, index) => (
                  <li
                    key={index}
                    className={index === porqueElegirnosIndex ? 'active' : ''}
                    onMouseEnter={() => setPorqueElegirnosIndex(index)} // Cambiar la imagen al pasar el cursor
                  >
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ventajas de elegir CONEXA */}
      <section className="ventajas">
        <div className="container">
          <h2>Ventajas de elegir CONEXA</h2>
          <div className="ventajas-grid">
            {ventajas.map((ventaja, index) => (
              <div
                key={index}
                className={`ventaja ${expandedIndex === index ? 'expanded' : ''}`}
                onClick={() => {
                  handleToggleExpand(index); // Alternar la descripción
                  toggleImage(index); // Alternar la imagen
                }}
              >
                <h3>{ventaja.titulo}</h3>
                <div className="ventaja-content">
                  <p>{ventaja.descripcion}</p>
                  <div className={`image-container ${activeIndex === index ? 'visible' : ''}`}>
                    <img src={ventaja.imagen} alt={`Imagen ${index + 1}`} />
                  </div>
                </div>
              </div>
            ))}
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
            En <strong>CONEXA</strong>, nos comprometemos a ofrecer <strong>conexión de calidad y un soporte técnico excepcional</strong> en Colima. 
            Nuestra red sigue creciendo para llevar <strong>internet confiable y accesible a más hogares y negocios</strong>, conectando a las comunidades con el mundo digital.
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