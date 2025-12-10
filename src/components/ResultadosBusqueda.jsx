import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard'; 

const API_PRODUCTS = 'https://693360d4e5a9e342d2729e37.mockapi.io/Products';
const API_OFERTAS = 'https://69377263f8dc350aff344105.mockapi.io/ofertas'; 
const API_INFALTABLES = 'https://69377263f8dc350aff344105.mockapi.io/infaltables'; 


const ResultadosBusqueda = ({ barraDeBusqueda }) => {
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const term = barraDeBusqueda ? barraDeBusqueda.trim() : '';
        
        // Si el término está vacío, redirigir a /productos (o la ruta que desees)
        if (term === "") {
            // Usamos 'replace' para no dejar la página de búsqueda vacía en el historial
            navigate('/productos', { replace: true }); 
        }

        // Si hay un término, cargar los datos (la lógica de fetch existente)
        if (term.length > 0) {
            setLoading(true);
            const urls = [
                { url: API_PRODUCTS, source: 'prod' },
                { url: API_OFERTAS, source: 'ofert' },
                { url: API_INFALTABLES, source: 'infalt' },
            ];

           Promise.all(urls.map(({ url, source }) => 
                fetch(url)
                    .then(res => res.json())
                    .then(data => 
                        // **ESTE ES EL CAMBIO CLAVE:** Creamos un ID único (ej: 'ofert-1', 'infalt-1')
                        data.map(product => ({ ...product, id: `${source}-${product.id}` })) 
                    )
                    .catch(error => {
                        console.error(`Error fetching ${url}:`, error);
                        return [];
                    })
            ))
            .then(dataArrays => {
                // 2. Combinamos todos los arrays de productos con IDs únicos
                const combined = dataArrays.flat(); 
                setAllProducts(combined);
                setLoading(false);
            });
        }
        
    }, [barraDeBusqueda, navigate]);
    
    
    if (loading) {
        return <p>Buscando en todas las categorías...</p>;
    }
    
    const filteredProducts = allProducts.filter(product => {
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