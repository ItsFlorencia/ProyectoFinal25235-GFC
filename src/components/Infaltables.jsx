import React from 'react';
import ProductList from './ProductList';

const Infaltables = ({ barraDeBusqueda }) => {
  return (
    <div className="container">
      <h1>Infaltables</h1>
      <ProductList category="infaltables" 
      barraDeBusqueda={barraDeBusqueda}/>
    </div>
  );
};

export default Infaltables;
