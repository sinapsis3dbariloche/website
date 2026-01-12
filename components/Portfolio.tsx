import React from 'react';
import { PORTFOLIOS } from '../constants';

const Portfolio: React.FC = () => {
  const specialties = [
    { title: 'Eventos y Souvenirs', desc: 'Souvenirs únicos y toppers de torta personalizados para cumpleaños y casamientos en Bariloche.', icon: 'fa-cake-candles' },
    { title: 'Trofeos y Medallas', desc: 'Medallas y trofeos 3D de alta calidad con diseños exclusivos para torneos y eventos deportivos.', icon: 'fa-trophy' },
    { title: 'Diseño Personalizado', desc: 'Diseño 3D de prototipos, repuestos industriales y piezas técnicas bajo pedido en la Patagonia.', icon: 'fa-compass-drafting' },
    { title: 'Venta Mayorista 3D', desc: 'Producción de impresión 3D a escala para comercios, empresas y revendedores de Argentina.', icon: 'fa-box-open' },
  ];

  return (
    <section id="servicios" className="pt-24 pb-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="especialidades" className="mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">
            Servicios de <span className="text-orange-500">Impresión 3D</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((spec, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl border-zinc-800 hover:border-orange-500/30 transition-all group">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500 mb-4 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <i className={`fa-solid ${spec.icon} text-xl`}></i>
                </div>
                <h3 className="text-white font-bold mb-2">{spec.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Diseños <span className="text-orange-500">3D Propios</span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl">
            Explorá nuestras colecciones digitales exclusivas. Podés descargar los modelos 3D o encargarnos la impresión terminada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIOS.map((item) => (
            <a 
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative glass p-8 rounded-3xl overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] border-zinc-800 hover:border-orange-500/50"
              title={`Ver catálogo de diseños en ${item.name}`}
            >
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
                <i className="fa-solid fa-arrow-up-right-from-square text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                {item.name}
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                {item.description}
              </p>
              <div className="flex items-center text-orange-500 font-bold">
                Explorar modelos 3D <i className="fa-solid fa-chevron-right ml-2 text-xs"></i>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;