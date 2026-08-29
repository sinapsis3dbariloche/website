import React from 'react';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

const Contacto: React.FC = () => {
  return (
    <>
      <SEO 
        title="Contacto | Sinapsis 3D Bariloche"
        description="Contactanos para cotizar tu proyecto de Impresión 3D o Gráfica en Bariloche. Envíos a toda la Patagonia."
        canonical="https://www.sinapsis3dbariloche.com.ar/contacto"
      />
      
      <div className="pt-10 pb-20">
        <Contact />
      </div>
    </>
  );
};

export default Contacto;
