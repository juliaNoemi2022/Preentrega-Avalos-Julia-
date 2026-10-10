import React from "react";
import Navbar from "./Navbar";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {/* Sección del Logo y Nombre de la Marca */}
        <div className={styles.logo} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <img src="/logo.webp" alt="Logo de Panadería Lo de la Nona" style={{ maxHeight: '60px', width: 'auto' }} />
          <div style={{ textAlign: 'left' }}>
            <h1 style={{ margin: 0, fontFamily: 'Arial, sans-serif', fontSize: '24px', color: '#333', fontWeight: 'bold' }}>
              Lo de la Nona
            </h1>
            <p style={{ margin: 0, fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#777' }}>
              Panadería & Confitería Artesanal
            </p>
          </div>
        </div>

        {/* Sección de la Barra de Navegación */}
        <div>
          <Navbar />
        </div>
      </header>
    </div>
  );
};

export default Header;
