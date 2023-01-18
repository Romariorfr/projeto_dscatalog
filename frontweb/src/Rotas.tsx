import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Catalog from 'pages/Home/Catalog';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from 'pages/Home/Admin';

const Rotas = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Catalog />} />
        <Route path="/admin" element={< Admin/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
