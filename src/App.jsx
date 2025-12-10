import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Ofertas from './components/Ofertas';
import Infaltables from './components/Infaltables';
import Login from './components/Login'; 
import Footer from './components/Footer';
import Productos from './components/Productos';
import { CartProvider } from './components/CartContext';
import Carrito from './components/Carrito'; 
import CrudProductos from './components/CrudProductos';
import ResultadosBusqueda from './components/ResultadosBusqueda';
import { useState } from 'react';

function App() {
  const [barraDeBusqueda, setBarraDeBusqueda] = useState("")
  
  return (
      <CartProvider>
     <Router>
      <Header />
          barraDeBusqueda={barraDeBusqueda}
          setBarraDeBusqueda={setBarraDeBusqueda}

      <Routes>
        <Route 
            path="/search" 
            element={<ResultadosBusqueda barraDeBusqueda={barraDeBusqueda} />} 
          />
        <Route path="/administracion" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos barraDeBusqueda={barraDeBusqueda} />} />
        <Route path="/ofertas" element={<Ofertas barraDeBusqueda={barraDeBusqueda}/>} />
        <Route path="/infaltables" element={<Infaltables barraDeBusqueda={barraDeBusqueda} />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/crud" element={<CrudProductos />} />
      </Routes>
      <Footer/>
    </Router>
    </CartProvider>
  )
}

export default App