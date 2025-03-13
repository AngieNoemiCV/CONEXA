import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para redireccionar
import './paquetes.css'; // Asegúrate de crear este archivo para los estilos

const Paquetes = () => {
  return (
    <div className="paquetes-container">
      <h1>Paquetes Disponibles</h1>
      <div className="paquete">
        <p>🔹 Paquete - 5 MG - $350/mes</p>
        <Link to="/contacto" className="contratar-btn">Contratar</Link>
      </div>
      <div className="paquete">
        <p>🔹 Paquete - 10 MG - $580/mes</p>
        <Link to="/contacto" className="contratar-btn">Contratar</Link>
      </div>
      <div className="paquete">
        <p>🔹 Paquete - 15 MG - $730/mes</p>
        <Link to="/contacto" className="contratar-btn">Contratar</Link>
      </div>
      <div className="paquete">
        <p>🔹 Paquete - 20 MG - $1044/mes</p>
        <Link to="/contacto" className="contratar-btn">Contratar</Link>
      </div>
    </div>
  );
};

export default Paquetes;