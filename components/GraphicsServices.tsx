import React from 'react';

interface GraphicsServicesProps {
  onImageClick?: (src: string, title: string, desc?: string) => void;
}

const GraphicsServices: React.FC<GraphicsServicesProps> = ({ onImageClick }) => {
  const graphicProducts = [
    {
      title: 'Tatuajes Temporales',
      desc: '¡Un cumpleaños de Campeones! Tatuajes personalizados súper fáciles de usar. Solo agua, presionás y listo y vive la magia mundialista o de tu temática favorita.',
      items: ['Para Casamientos', 'Cumples', 'Eventos'],
      icon: 'fa-bolt',
      color: 'from-orange-500 to-orange-600',
      imageUrl: '/images/tatuajes-temporales-argentina-campeones-del-mundo-souvenirs.jpeg'
    },
    {
      title: 'Etiquetas Escolares',
      desc: '¡Chau ropa perdida! Etiquetas textiles y stickers premium laminados para útiles. Hacen el match perfecto con nuestros identificadores 3D para mochilas.',
      items: ['Resisten Lavados', 'Pack 16 etiquetas', 'Diseños a elección'],
      icon: 'fa-tags',
      color: 'from-blue-500 to-indigo-600',
      imageUrl: '/images/kit-etiquetas-y-llaveros-personalizados-para-mochilas-y-utiles.jpeg'
    },
    {
      title: 'Identidad y Prensa',
      desc: 'Tarjetas de presentación y gráfica comercial que destaca. El complemento ideal para exhibidores y merchandising institucional.',
      items: ['Papel Fotográfico', 'Alta resolución', 'Diseño incluido'],
      icon: 'fa-address-card',
      color: 'from-purple-500 to-pink-600',
      imageUrl: '/images/tarjetas-de-presentacion-personalizadas-para-clubes-y-negocios.jpeg'
    },
    {
      title: 'Papelería y Regalos',
      desc: 'Detalles que hacen tu evento único. Libritos de pintar y juegos que complementan a la perfección nuestros souvenirs impresos en 3D.',
      items: ['Memory Game / Memotest', 'Libritos para pintar', 'Banderines', 'Cajitas cubo'],
      icon: 'fa-gift',
      color: 'from-green-500 to-emerald-600',
      imageUrl: '/images/marcapaginas-harry-potter-impresion-3d-clip.jpeg'
    }
  ];

  return (
    <section id="grafica" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-orange-600 blur-[120px] rounded-full opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-bold tracking-widest uppercase mb-4">
            Totalmente a tu medida
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Gráfica y Diseño <span className="text-orange-500 text-orange-glow">100% Personalizado</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Ampliamos nuestra propuesta para que tus eventos y marca destaquen. <br />
            Diseñamos e imprimimos <span className="text-white font-semibold">toda la gráfica adaptada a tus temáticas, con nombres y estilos a elección.</span>
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
                
                <div 
                  onClick={() => {
                    if (product.imageUrl && onImageClick) {
                      onImageClick(product.imageUrl, product.title, product.desc);
                    }
                  }}
                  className={`flex w-full md:w-40 h-48 md:h-40 bg-zinc-900 rounded-2xl border border-zinc-800 items-center justify-center relative overflow-hidden group-hover:border-orange-500/30 shrink-0 ${product.imageUrl ? 'cursor-zoom-in' : ''}`}
                >
                  {product.imageUrl ? (
                    <>
                      <img 
                        src={product.imageUrl} 
                        alt={product.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 animate-fade-in"
                      />
                      {/* Zoom Indicator */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/40">
                        <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-lg transform translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                          <i className="fa-solid fa-magnifying-glass-plus text-xs"></i>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent"></div>
                      <i className={`fa-solid ${product.icon} text-6xl text-zinc-800/50 group-hover:scale-110 group-hover:text-orange-500/20 transition-all duration-700`}></i>
                    </>
                  )}
                  <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-bold text-zinc-300 bg-zinc-950/80 px-2.5 py-1 rounded-lg uppercase tracking-widest backdrop-blur border border-zinc-800/40">
                    {product.imageUrl ? 'Real' : 'Premium'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default GraphicsServices;
