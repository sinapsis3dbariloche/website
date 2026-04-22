import React from 'react';

const GraphicsServices: React.FC = () => {
  const graphicProducts = [
    {
      title: 'Tatuajes Temporales',
      desc: '¡Un cumpleaños de Campeones! Tatuajes personalizados súper fáciles de usar. Solo agua, presionás y listo.',
      items: ['Para Casamientos', 'Cumples', 'Eventos'],
      icon: 'fa-bolt',
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Etiquetas Escolares',
      desc: '¡Chau ropa perdida! Etiquetas textiles termotransferibles para ropa y stickers premium laminados para tuppers y botellas.',
      items: ['Resisten Lavados', 'Pack 16 etiquetas', 'Diseños a elección'],
      icon: 'fa-tags',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Identidad y Prensa',
      desc: 'Tarjetas de presentación y gráfica comercial que destaca. Diseños que reflejan la energía de tu emprendimiento o club.',
      items: ['Papel Fotográfico', 'Alta resolución', 'Diseño incluido'],
      icon: 'fa-address-card',
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Papelería y Regalos',
      desc: 'Todos los detalles para que tu evento sea único. Juegos y sorpresas personalizadas para regalar.',
      items: ['Memory Game / Memotest', 'Libritos para pintar', 'Banderines', 'Cajitas cubo'],
      icon: 'fa-gift',
      color: 'from-green-500 to-emerald-600'
    }
  ];

  return (
    <section id="grafica" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-orange-600 blur-[120px] rounded-full opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-bold tracking-widest uppercase mb-4">
            ¡Novedad! Nuevo Servicio
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Diseño Gráfico y <span className="text-orange-500 text-orange-glow">Gráfica en Bariloche</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Ampliamos nuestra propuesta para que tus eventos sean completos. <br />
            Ahora también diseñamos e imprimimos <span className="text-white font-semibold">toda la gráfica de tus cumples, casamientos y eventos.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {graphicProducts.map((product, idx) => (
            <div key={idx} className="group relative glass p-8 rounded-3xl border-zinc-800 hover:border-orange-500/40 transition-all duration-500 overflow-hidden">
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity`}></div>
              
              <div className="flex flex-col md:flex-row gap-8 relative z-10">
                <div className="flex-1">
                  <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center text-orange-500 border border-zinc-800 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                    <i className={`fa-solid ${product.icon} text-2xl`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-zinc-500 mb-6 leading-relaxed">
                    {product.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.items.map((item, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="hidden lg:flex w-40 h-40 bg-zinc-900 rounded-2xl border border-zinc-800 items-center justify-center relative overflow-hidden group-hover:border-orange-500/30">
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent"></div>
                  <i className={`fa-solid ${product.icon} text-6xl text-zinc-800/50 group-hover:scale-110 group-hover:text-orange-500/20 transition-all duration-700`}></i>
                  <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Premium</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 glass p-8 rounded-3xl border-orange-500/20 bg-orange-500/5 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-white text-3xl shrink-0 shadow-lg shadow-orange-900/40">
                <i className="fa-solid fa-tags"></i>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Super Promos de Lanzamiento</h4>
                <p className="text-zinc-400">Consultá por nuestros packs de 30 tatuajes temporales y combos personalizados para eventos.</p>
              </div>
           </div>
           <a 
              href="https://wa.me/5492944914816"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-bold transition-all shadow-xl shadow-orange-900/20 flex items-center justify-center gap-3"
           >
              <i className="fa-brands fa-whatsapp text-xl"></i>
              Pedir Cotización Gráfica
           </a>
        </div>
      </div>
    </section>
  );
};

export default GraphicsServices;
