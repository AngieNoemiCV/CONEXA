import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Servicios from './pages/servicios';
import Paquetes from './pages/paquetes';
import Contacto from './pages/contacto';
import Internet from './pages/internet'; // Importa la página de Internet
import Armados from './pages/armados'; // Importa la página de Armados
import Camaras from './pages/camaras'; // Importa la página de Cámaras
import Mantenimiento from './pages/mantenimiento'; // Importa la página de Mantenimiento
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/paquetes" element={<Paquetes />} />
        <Route path="/contacto" element={<Contacto />} />
        {/* Nuevas rutas para los servicios */}
        <Route path="/internet" element={<Internet />} /> {/* Ruta para Internet */}
        <Route path="/armados" element={<Armados />} /> {/* Ruta para Armados */}
        <Route path="/camaras" element={<Camaras />} /> {/* Ruta para Cámaras */}
        <Route path="/mantenimiento" element={<Mantenimiento />} /> {/* Ruta para Mantenimiento */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;