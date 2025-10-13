import React, { useEffect, useState } from 'react';
import { Row, Col, Modal, Button } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ProductList = ({ category = "women's clothing" }) => 
    {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


    useEffect(() => 
    {
    let url = 'https://fakestoreapi.com/products';
    if (category) 
    {
      url = `https://fakestoreapi.com/products/category/${category}`;
    }

      fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [category]);


    const handleAgregarAlCarrito = (product) => {
    
    alert(`Se ha agregado al carrito: ${product.title} `);
   
  };



  if (loading) {
    return <div>Loading...</div>;
  }  

  
  return (
    <Row>
      {products.map((product) => (
        <Col md={4} key={product.id} className="mb-4">
          <ProductCard product={product} agregarAlCarrito={handleAgregarAlCarrito} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;