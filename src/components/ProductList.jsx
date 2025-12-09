import React, { useEffect, useState, useContext } from 'react';
import { Row, Col, Form, Modal, Button } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { CartContext } from './CartContext';

const ProductList = ({ category = "women's clothing" }) => 
    {
  const ProductList = ({ category = null }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { agregarAlCarrito } = useContext(CartContext);


    useEffect(() => 
    {
    let url = 'https://693360d4e5a9e342d2729e37.mockapi.io/Products';
    if (category) 
    {
      url = `https://69377263f8dc350aff344105.mockapi.io//${category}`;
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
  
  if (loading) {
    return <div>Loading...</div>;
  }  

  
  return (
    <>
    <Row>
       {filteredProducts.map((product) => (
        <Col md={4} key={product.id} className="mb-4">
          <ProductCard product={product} agregarAlCarrito={agregarAlCarrito} />
        </Col>
      ))}
    </Row>
     </>
  );
};
};
export default ProductList;