import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Catalog from 'pages/Home/Catalog';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from 'pages/Home/Admin';
import ProductDetails from 'pages/ProductDetails';

const Rotas = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Catalog />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
