import React, { useState, useRef, useEffect } from 'react';
import './home.css';

function App() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesMenuRef = useRef(null);

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const handleClickOutside = (event) => {
    if (servicesMenuRef.current && !servicesMenuRef.current.contains(event.target)) {
      setIsServicesOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">CONEXA</div>
          <div className="menu">
            <a href="#services" onClick={toggleServicesMenu}>Servicios</a>
            <div ref={servicesMenuRef} className={`services-menu ${isServicesOpen ? 'open' : ''}`}>
              <a href="#mantenimiento">Mantenimiento de cómputo</a>
              <a href="#armado">Armado de computadoras</a>
              <a href="#camaras">Instalación de cámaras de seguridad</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>"Donde quiera que estés llegamos para conectarnos"</h1>
          <p>Conoce la nueva red de internet en Colima vive la experiencia.</p>
        </div>
      </section>

      {/* Services Sections (hidden, only for redirection) */}
      <section id="mantenimiento"></section>
      <section id="armado"></section>
      <section id="camaras"></section>

      {/* Packages Section */}
      <section className="packages" id="packages">
        <div className="container">
          <h2>Paquetes de Internet</h2>
          <div className="package-list">
            <div className="package">
              <h3>5MG</h3>
              <p>$350/mes</p>
            </div>
            <div className="package">
              <h3>10MG</h3>
              <p>$580/mes</p>
            </div>
            <div className="package">
              <h3>15MG</h3>
              <p>$730/mes</p>
            </div>
            <div className="package">
              <h3>20MG</h3>
              <p>$1044/mes (IVA incluido)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="container">
          <p>Contacto: 312-198-0082 | dagob50@hotmail.com</p>
          <p>&copy; 2025 CONEXA. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;