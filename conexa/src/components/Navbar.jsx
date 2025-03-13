import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/servicios">Servicios</Link>
      <Link to="/paquetes">Paquetes</Link>
      <Link to="/contacto">Contacto</Link>
    </nav>
  );
};

export default Navbar;
