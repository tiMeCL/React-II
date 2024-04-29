import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Home from './views/Home';
import PizzaDetail from './components/PizzaDetail';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Banner from './components/banner';
import Footer from './components/Footer';


function App() {
  
  return (
    
  <CartProvider>
    <Navbar/>
    <Banner/>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/pizza/:id" element={<PizzaDetail />} />
        <Route path="/carrito" element={<Cart />} />
      </Routes>
      <Footer/>
    </CartProvider>
  );
}

export default App;
