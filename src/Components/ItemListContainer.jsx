import React, { useState, useEffect } from "react";
import ItemList from "./Products/ItemList";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
   
    fetch("/data/productos.json")
      .then((res) => res.json())
      .then((datos) => {
        setProductos(datos);
        setCargando(false); 
      })
      .catch((error) => {
        console.error("Error al cargar las delicias de la Nona:", error);
        setCargando(false);
      });
  }, []);

  return (
    <div style={{ padding: '20px 0' }}>
    
      <h2 style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', color: '#5c4d46', marginBottom: '30px', fontSize: '28px' }}>
        Nuestras Especialidades Artesanales
      </h2>

     
      {cargando ? (
        <p style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', color: '#777' }}>
          Cargando las delicias de la Nona...
        </p>
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
};

export default ItemListContainer;
