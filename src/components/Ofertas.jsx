import React from 'react';
import ProductList from './ProductList';

const Ofertas = ({ barraDeBusqueda }) => {
  return (
    <div className="container">
      <h1>Ofertas</h1>
      <ProductList category="ofertas"
      barraDeBusqueda={barraDeBusqueda} />
    </div>
  );
};

export default Ofertas;