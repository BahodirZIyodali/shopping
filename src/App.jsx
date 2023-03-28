import React from "react";
import Navbar from "./components/Navbar";
import Footer from './components/Footer'
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Product from './components/Product';
const App = () => {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
