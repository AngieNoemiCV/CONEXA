import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Asegúrate de que este archivo esté correctamente vinculado
import logo from './logo.png'; // Importa la imagen

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesMenuRef = useRef(null);

  const toggleServicesMenu = (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    setIsServicesOpen((prev) => !prev); // Cambia el estado de abierto a cerrado y viceversa
  };

  const handleClickOutside = (event) => {
    if (servicesMenuRef.current && !servicesMenuRef.current.contains(event.target)) {
      setIsServicesOpen(false); // Cierra el menú si se hace clic fuera de él
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav>
      {/* Logo en el lado izquierdo */}
      <div className="logo-container">
        <img
          src={logo}
          alt="Logo de CONEXA"
          className="logo"
        />
      </div>

      {/* Enlaces del navbar */}
      <Link to="/">Inicio</Link>
      <div className="services-container">
        {/* Enlace para abrir/cerrar el menú */}
        <a href="#services" onClick={toggleServicesMenu}>
          Servicios
        </a>
        {/* Menú desplegable */}
        <div ref={servicesMenuRef} className={`services-menu ${isServicesOpen ? 'open' : ''}`}>
          <Link to="/internet" onClick={() => setIsServicesOpen(false)}>
            Internet
          </Link>
          <Link to="/mantenimiento" onClick={() => setIsServicesOpen(false)}>
            Mantenimiento de cómputo
          </Link>
          <Link to="/armados" onClick={() => setIsServicesOpen(false)}>
            Armado de computadoras
          </Link>
          <Link to="/camaras" onClick={() => setIsServicesOpen(false)}>
            Instalación de cámaras de seguridad
          </Link>
        </div>
      </div>
      <Link to="/paquetes">Paquetes</Link>
      <Link to="/contacto">Contacto</Link>
    </nav>
  );
};

export default Navbar;