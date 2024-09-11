import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const ItemListContainer = ({ saludo }) => {
  return (
    <div className="container mt-4">
      <h1 className="text-center">{saludo}</h1> 
    </div>
  );
};

export default ItemListContainer;
