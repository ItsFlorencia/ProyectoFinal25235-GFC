import React from 'react';
import banner from '../assets/banner.jpg'; 
import ProductList from './ProductList';

const Home = () => {
  return (
    <div className="container">
      <h1 className="text-center">Bienvenidos a Flora Online Shop!</h1>
      <h5 className="text-center">Explora nuestra ultima coleccion para mujeres</h5>
      <h5 className="text-center">Encuentra los mejores precios y estilos disponibles.Disfruta comprar con nosotros!</h5>
          <img
        src={banner} 
        alt="banner Flora"
        className="img-fluid d-block mx-auto mt-4 mb-4" 
      />
    <h2>Productos</h2>
     <ProductList />
     
    </div>
  );
};

export default Home;