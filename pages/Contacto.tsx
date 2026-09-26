import React from 'react';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

const Contacto: React.FC = () => {
  return (
    <>
      <SEO 
        title="Contacto y Presupuestos | Sinapsis 3D Bariloche"
        description="Contactá a Sinapsis 3D en Bariloche. Envianos tu idea por WhatsApp y recibí tu presupuesto de impresión 3D o gráfica en el día. Envíos a toda la región."
        canonical="https://www.sinapsis3dbariloche.com.ar/contacto"
      />
      
      <div className="pt-10 pb-20">
        <Contact />
      </div>
    </>
  );
};

export default Contacto;
