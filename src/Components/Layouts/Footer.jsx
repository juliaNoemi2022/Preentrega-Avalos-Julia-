import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  // Datos de las 3 personas requeridas con avatares en vez de fotos
  const equipo = [
    { id: 1, nombre: "Julia Avalos", rol: "Maestra Pastelera", avatar: "👩‍🍳" },
    { id: 2, nombre: "Nona María", rol: "Fundadora e Inspiración", avatar: "👵" },
    { id: 3, nombre: "Carlos Espósito", rol: "Maestro Facturero", avatar: "👨‍🍳" }
  ];

  return (
    <div className={styles.container}>
      <footer>
        <div className={styles.footer}>
          {/* Columna 1: Empresa Dulce */}
          <nav>
            <ul className={styles.footerNav}>
              <li className={styles.footerItem}><h4 style={{ color: '#e2a05d', margin: '0 0 10px 0' }}>La Empresa</h4></li>
              <li className={styles.footerItem}>
                <a href="#acerca" className={styles.footerLink}>Nuestra Historia</a>
              </li>
              <li className={styles.footerItem}>
                <a href="#sucursales" className={styles.footerLink}>Nuestras Sucursales</a>
              </li>
              <li className={styles.footerItem}>
                <a href="#franquicias" className={styles.footerLink}>Franquicias</a>
              </li>
              <li className={styles.footerItem}>
                <a href="#recetas" className={styles.footerLink}>Secretos de la Nona</a>
              </li>
              <li className={styles.footerItem}>
                <a href="#contacto" className={styles.footerLink}>Contacto y Sedes</a>
              </li>
            </ul>
          </nav>

          {/* Columna 2: Logística y Ayuda */}
          <nav>
            <ul className={styles.footerNav}>
              <li className={styles.footerItem}><h4 style={{ color: '#e2a05d', margin: '0 0 10px 0' }}>Soporte</h4></li>
              <li className={styles.footerItem}>
                <a href="#envios" className={styles.footerLink}>Costos y Zonas de Envío</a>
              </li>
              <li className={styles.footerItem}>
                <a href="#preguntas" className={styles.footerLink}>Preguntas Frecuentes</a>
              </li>
              <li className={styles.footerItem}>
                <a href="#como-comprar" className={styles.footerLink}>¿Cómo encargar online?</a>
              </li>
              <li className={styles.footerItem}>
                <a href="#privacidad" className={styles.footerLink}>Políticas de Privacidad</a>
              </li>
              <li className={styles.footerItem}>
                <a href="#pagos" className={styles.footerLink}>Formas de Pago</a>
              </li>
              <li className={styles.footerItem}>
                <a href="#arrepentimiento" className={styles.footerLink}>Botón de Arrepentimiento</a>
              </li>
            </ul>
          </nav>

          {/* Columna 3: Información de Productos */}
          <nav>
            <ul className={styles.footerNav}>
              <li className={styles.footerItem}><h4 style={{ color: '#e2a05d', margin: '0 0 10px 0' }}>Categorías</h4></li>
              <li className={styles.footerItem}>
                <a href="#panes" className={styles.footerLink}>Panes Artesanales</a>
              </li>
              <li className={styles.footerItem}>
                <a href="#facturas" className={styles.footerLink}>Facturas de Manteca y Grasa</a>
              </li>
              <li className={styles.footerItem}>
                <a href="#tortas" className={styles.footerLink}>Tortas Clásicas Argentinas</a>
              </li>
              <li className={styles.footerItem}>
                <a href="#masas" className={styles.footerLink}>Masas Finas y Secas</a>
              </li>
              <li className={styles.footerItem}>
                <a href="#newsletter" className={styles.footerLink}>Suscribirse al Newsletter</a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Tarjetas de las 3 personas usando Emojis/Avatares */}
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h3 style={{ color: '#e2a05d', marginBottom: '20px', fontFamily: 'serif' }}>Nuestro Equipo Pastelero</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            {equipo.map((persona) => (
              <div key={persona.id} style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', padding: '15px', width: '180px', textAlign: 'center' }}>
                {/* Reemplazamos la etiqueta <img> por un contenedor con un emoji grande */}
                <div style={{ fontSize: '40px', background: 'rgba(226, 160, 93, 0.2)', width: '70px', height: '70px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', border: '2px solid #e2a05d' }}>
                  {persona.avatar}
                </div>
                <h5 style={{ color: '#fff', margin: '10px 0 5px 0', fontSize: '1rem' }}>{persona.nombre}</h5>
                <p style={{ color: '#b0bec5', fontSize: '0.8rem', margin: 0 }}>{persona.rol}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.copyrightContainer}>
          <p className={styles.copyright}>© 2026 Lo de la Nona - Panadería & Confitería Artesanal. Todos los derechos reservados. Propiedad intelectual registrada.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
