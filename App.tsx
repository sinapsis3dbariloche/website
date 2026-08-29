import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Grafica from './pages/Grafica';
import Impresion3D from './pages/Impresion3D';
import PortfolioPage from './pages/PortfolioPage';
import Contacto from './pages/Contacto';
import Souvenirs from './pages/Souvenirs';
import Merchandising from './pages/Merchandising';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="grafica" element={<Grafica />} />
        <Route path="impresion-3d" element={<Impresion3D />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="souvenirs" element={<Souvenirs />} />
        <Route path="merchandising" element={<Merchandising />} />
      </Route>
    </Routes>
  );
}

export default App;