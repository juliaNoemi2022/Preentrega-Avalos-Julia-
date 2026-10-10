import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layouts/Layout";
import ItemListContainer from "./Components/Products/ItemListContainer";

function App() {
  return (
    <Routes>
      
      <Route element={<Layout />}>
        
      
        <Route path="/" element={<ItemListContainer />} />
        
        {/* Ruta complementaria para ver los productos */}
        <Route path="/productos" element={<ItemListContainer />} />
        
        
        <Route path="/contacto" style={{ padding: '40px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }} element={
          <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'Arial, sans-serif', color: '#5c4d46' }}>
            <h2>📬 ¡Contactate con Lo de la Nona!</h2>
            <p style={{ marginTop: '10px' }}>Podés enviarnos tus consultas para pedidos especiales o eventos por WhatsApp al +54 11 1234-5678.</p>
          </div>
        } />
        
      </Route>
    </Routes>
  );
}

export default App;
