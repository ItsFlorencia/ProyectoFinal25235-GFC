import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard'; 
// Asumiendo que las URLs de tus APIs son estas:
const API_PRODUCTS = 'https://693360d4e5a9e342d2729e37.mockapi.io/Products';
const API_OFERTAS = 'https://69377263f8dc350aff344105.mockapi.io/ofertas'; 
const API_INFALTABLES = 'https://69377263f8dc350aff344105.mockapi.io/infaltables'; 


const ResultadosBusqueda = ({ barraDeBusqueda }) => {
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        
        // 1. Definir los endpoints a consultar
        const urls = [API_PRODUCTS, API_OFERTAS, API_INFALTABLES];

        // 2. Usar Promise.all para hacer las 3 llamadas al mismo tiempo
        Promise.all(urls.map(url => 
            fetch(url)
                .then(res => res.json())
                .catch(error => {
                    console.error(`Error fetching ${url}:`, error);
                    return []; // Devuelve un array vacío en caso de error para no romper Promise.all
                })
        ))
        .then(dataArrays => {
            // 3. Combinar los resultados de los 3 arrays en uno solo
            const combined = dataArrays.flat(); 
            setAllProducts(combined);
            setLoading(false);
        })
        .catch(error => {
            console.error("Error fetching all products:", error);
            setLoading(false);
        });
        
    }, []); // El array de dependencia vacío asegura que la carga solo ocurra una vez al montar

    
    if (loading) {
        return <p>Buscando en todas las categorías...</p>;
    }
    
    // 4. Lógica de Filtrado (la misma que tenías, pero sobre el array combinado)
    const filteredProducts = allProducts.filter(product => {
        // Si no hay término de búsqueda, no se muestra nada en esta página 
        // (ya que no es un catálogo, sino una página de resultados)
        if (!barraDeBusqueda || barraDeBusqueda.trim() === "") return false;
        
        const term = barraDeBusqueda.toLowerCase();
        
        const titleMatch = product.title && product.title.toLowerCase().includes(term);
        const descriptionMatch = product.description && product.description.toLowerCase().includes(term);
        
        return titleMatch || descriptionMatch;
    });

    
    const term = barraDeBusqueda.trim();

    return (
        <div className="search-results">
            {/* Muestra el término de búsqueda */}
            <h1>Resultados de búsqueda para: "{term}"</h1>
            
            <Row>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <Col md={4} key={product.id} className="mb-4">
                            {/* Usa el ProductCard existente para mostrar los resultados */}
                            <ProductCard product={product} /> 
                        </Col>
                    ))
                ) : (
                    <Col>
                        {term.length > 0 ? (
                            <p>No se encontraron resultados para "{term}" en ninguna categoría.</p>
                        ) : (
                            <p>Escriba un término para comenzar la búsqueda.</p>
                        )}
                    </Col>
                )}
            </Row>
        </div>
    );
};

export default ResultadosBusqueda