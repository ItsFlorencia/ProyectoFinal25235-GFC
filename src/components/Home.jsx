import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ProductList from './ProductList';
import bannerModelos from '../assets/banner.jpg'; 
import bannerCamisas from '../assets/banner1.jpg'; 
import bannerPantalones from '../assets/banner2.jpg'; 

const CarouselImage = ({ src, alt, height }) => (
    <img
        className="d-block w-100" // Clases de Bootstrap para ocupar todo el ancho
        src={src}
        alt={alt}
        // Aplica estilos de altura y ajuste para mantener la coherencia
        style={{ height: height, objectFit: 'cover' }} 
    />
);

function HomeCarousel() {
    
    const carouselHeight = '1200px'; 
    
    return (
        <Carousel fade className="mt-4 mb-4 shadow-sm">
            
           
            <Carousel.Item>
                <CarouselImage 
                    src={bannerModelos} 
                    alt="Colección de Modelos Flora" 
                    height={carouselHeight}
                />
                <Carousel.Caption>
                    <h2 >¡Nueva Colección!</h2>
                    <p >Explora la última tendencia en moda femenina.</p>
                </Carousel.Caption>
            </Carousel.Item>

            
            <Carousel.Item>
                <CarouselImage 
                    src={bannerCamisas} 
                    alt="Camisas y Blusas Flora" 
                    height={carouselHeight}
                />
                <Carousel.Caption>
                    <h2 className= "text-secondary">Nuestras Camisas</h2>
                    <p className= "text-secondary">Encuentra elegancia y comodidad en cada diseño.</p>
                </Carousel.Caption>
            </Carousel.Item>

            
            <Carousel.Item>
                <CarouselImage 
                    src={bannerPantalones} 
                    alt="Pantalones Casuales Flora" 
                    height={carouselHeight}
                />
                <Carousel.Caption>
                    <h2 className="text-secondary">Pantalones Infaltables</h2>
                    <p className="text-secondary">Comodidad para tu día a día con estilo.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}


const Home = () => {
  return (
    <div className="container">
      <h1 className="text-center">Bienvenidos a Flora Online Shop!</h1>
      <h5 className="text-center">Explora nuestra ultima coleccion para mujeres</h5>
      <h5 className="text-center">Encuentra los mejores precios y estilos disponibles.Disfruta comprar con nosotros!</h5>
      
      <HomeCarousel />

        
    </div>
  );
};

export default Home;