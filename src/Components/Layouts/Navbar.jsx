import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.navList}>
        <li><a href="#" className={styles.navLink}>Inicio</a></li>
        <li><a href="#" className={styles.navLink}>Facturas & Panes</a></li>
        <li><a href="#" className={styles.navLink}>Masas Finas</a></li>
        <li><a href="#" className={styles.navLink}>Contacto</a></li>
      </ul>
    </nav>
  );
}
