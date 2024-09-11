import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const CartWidget = () => {
  // Número fijo de productos en el carrito
  const cantidadProductos = 5;

  // Estilo para cambiar el color del número de los productos del carrito
  const estiloNotificacion = {
    backgroundColor: 'cyan',   
    color: 'black',           
    borderRadius: '50%',      
    padding: '5px 10px', 
    margin: '10px',     
    fontSize: '14px',         
  };

  return (
    <div className="carrito-widget d-flex align-items-center">
      <FaShoppingCart size={24} />
      <span style={estiloNotificacion} className="ml-2">{cantidadProductos}</span>
    </div>
  );
};

export default CartWidget;
