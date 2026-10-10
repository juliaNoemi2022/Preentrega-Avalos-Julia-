import React from "react";
import style from "./Item.module.css";


const Item = ({ id, Nombre, Precio, descripcion, imagen }) => {
  return (
    <div className={style.item_card}>
    
      <div>
        <img className={style.image} src={imagen} alt={`Exquisitez de Lo de la Nona: ${Nombre}`} />
      </div>

      
      <div>
        <span className={style.id}>Código de Producto: #{id}</span>

        <h2 className={style.nombre}>{Nombre}</h2>

       
        <p className={style.precio}>
          \${Precio ? Precio.toLocaleString('es-AR') : Precio}
        </p>

        <p className={style.descripcion}>{descripcion}</p>
      </div>

      
      <BotonFavorito />
      <button className={style.btn_comprar}>Añadir al Carrito</button>
    </div>
  );
};

export default Item;
