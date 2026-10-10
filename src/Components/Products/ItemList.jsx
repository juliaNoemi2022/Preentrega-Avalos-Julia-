import React from "react";
import Item from "./Item";
import style from "./ItemList.module.css";

const ItemList = ({ productos }) => {
  return (
    <div className={style.item_list}>
      
      {productos && productos.map((producto) => (
        <Item 
          key={producto.id} 
          id={producto.id}
          Nombre={producto.Nombre}       
          Precio={producto.Precio}       
          descripcion={producto.descripcion}
          imagen={producto.imagen}
        />
      ))}
    </div>
  );
};

export default ItemList;
