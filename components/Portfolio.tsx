
import React from 'react';
import { PORTFOLIOS } from '../constants';

const Portfolio: React.FC = () => {
  const specialties = [
    { title: 'Eventos y Fiestas', desc: 'Souvenirs únicos y toppers de torta personalizados para cumpleaños y casamientos.', icon: 'fa-cake-candles' },
    { title: 'Premios y Deportes', desc: 'Medallas y trofeos de alta calidad con diseños exclusivos para torneos y eventos.', icon: 'fa-trophy' },
    { title: 'Soluciones a Medida', desc: 'Diseño de prototipos, repuestos industriales y piezas técnicas bajo pedido.', icon: 'fa-compass-drafting' },
    { title: 'Venta Mayorista', desc: 'Producción a escala para comercios, empresas y revendedores en todo el país.', icon: 'fa-box-open' },
  ];

  return (
    <section id="portfolio" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="especialidades" className="mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">
            Nuestras <span className="text-orange-500">Especialidades</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((spec, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl border-zinc-800 hover:border-orange-500/30 transition-all group">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500 mb-4 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <i className={`fa-solid ${spec.icon} text-xl`}></i>
                </div>
                <h4 className="text-white font-bold mb-2">{spec.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Catálogo de <span className="text-orange-500">Modelos</span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl">
            Explorá nuestras colecciones digitales. Podés descargar los diseños o pedirnos la impresión terminada.
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
                Ver modelos disponibles <i className="fa-solid fa-chevron-right ml-2 text-xs"></i>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
           {[1, 2, 3, 4].map(i => (
             <div key={i} className="aspect-square rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden group">
               <img 
                 src={`https://picsum.photos/seed/sinapsis-3d-${i}/600/600`} 
                 alt="Producto Impreso" 
                 className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
               />
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
