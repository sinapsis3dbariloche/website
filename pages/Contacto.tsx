import React from 'react';
import { Helmet } from 'react-helmet-async';
import Contact from '../components/Contact';

const Contacto: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contacto | Sinapsis Impresiones Bariloche</title>
        <meta name="description" content="Contactanos para cotizar tu proyecto de Impresión 3D o Gráfica en Bariloche. Envíos a toda la Patagonia." />
        <link rel="canonical" href="https://www.sinapsis3dbariloche.com.ar/contacto" />
      </Helmet>
      
      <div className="pt-10 pb-20">
        <Contact />
      </div>
    </>
  );
};

export default Contacto;
