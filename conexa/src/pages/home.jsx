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

      {/* Services Sections (hidden, only for redirection) */}
      <section id="mantenimiento"></section>
      <section id="armado"></section>
      <section id="camaras"></section>

    </div>
  );
}

export default Home;