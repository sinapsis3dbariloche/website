import React from 'react';
import { Link } from 'react-router-dom';
import { trackWhatsAppClick } from '../utils/analytics';

const QUICK_SERVICES = [
  {
    title: 'Souvenirs & Cumples',
    desc: 'Combos 3D, bolsitas y cake toppers',
    icon: 'fa-cake-candles',
    color: 'from-orange-500 to-amber-500',
    link: '/souvenirs',
    badge: 'Popular'
  },
  {
    title: 'Impresión 3D a Medida',
    desc: 'Prototipos, repuestos y figuras',
    icon: 'fa-cube',
    color: 'from-blue-500 to-cyan-500',
    link: '/impresion-3d',
    badge: 'Taller'
  },
  {
    title: 'Gráfica & Stickers',
    desc: 'Etiquetas, vinilos y packaging',
    icon: 'fa-print',
    color: 'from-emerald-500 to-teal-500',
    link: '/grafica',
    badge: 'Express'
  },
  {
    title: 'Trofeos & Marcas',
    desc: 'Regalos corporativos y premios',
    icon: 'fa-trophy',
    color: 'from-amber-500 to-yellow-500',
    link: '/merchandising',
    badge: 'B2B'
  }
];

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-4 sm:pt-8 pb-8 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none opacity-20">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-600 blur-[120px] rounded-full"></div>
         <div className="absolute bottom-[0%] right-[-10%] w-[50%] h-[50%] bg-blue-900 blur-[150px] rounded-full opacity-30"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Local badge / trust chip */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4 animate-fade-in">
          <i className="fa-solid fa-location-dot"></i>
          <span>Taller de Fabricación en Bariloche • Envíos a todo el país</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-3 flex flex-col items-center">
          <span className="text-sm sm:text-base md:text-lg text-orange-500 font-bold tracking-[0.25em] uppercase mb-1">
            Sinapsis 3D Bariloche
          </span>
          <span className="text-3xl sm:text-5xl md:text-6xl tracking-tight">
            Impresión 3D & Gráfica
          </span>
        </h1>

        <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-zinc-200 mb-4 tracking-tight flex flex-wrap items-center justify-center gap-2">
          <span>Souvenirs, Trofeos y Papelería</span>
          <span className="text-orange-500 font-extrabold bg-orange-500/10 px-2.5 py-0.5 rounded-lg border border-orange-500/20">
            100% Personalizados
          </span>
        </h2>
        
        <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mb-6 font-normal">
          Diseñamos y fabricamos recuerdos para eventos, piezas técnicas y papelería comercial en San Carlos de Bariloche. Traé tu idea y la convertimos en realidad.
        </p>

        {/* Primary Mobile-First CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto mb-8">
          <a
            href="https://wa.me/5492944914816?text=Hola%20Sinapsis%203D!%20Quiero%20pedir%20un%20presupuesto%20personalizado."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('hero_cta', 'Pedir Presupuesto Hero')}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-7 py-4 rounded-2xl text-base font-black transition-all shadow-xl shadow-green-950/40 hover:scale-105 active:scale-95"
          >
            <i className="fa-brands fa-whatsapp text-2xl"></i>
            <span>Pedir Presupuesto por WhatsApp</span>
          </a>
          <Link
            to="/portfolio"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white px-6 py-4 rounded-2xl text-sm font-bold transition-all border border-zinc-800 hover:border-zinc-700"
          >
            <span>Ver Fotos y Trabajos</span>
            <i className="fa-solid fa-arrow-right text-xs"></i>
          </Link>
        </div>

        {/* Quick Visual Connection with Key Services (Reduces Bounce Rate / Increases Dwell Time) */}
        <div className="w-full max-w-5xl mb-6">
          <div className="text-xs uppercase tracking-widest font-bold text-zinc-400 mb-3 text-center">
            ¿Qué estás buscando hoy? Acceso rápido:
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left">
            {QUICK_SERVICES.map((serv) => (
              <Link
                key={serv.title}
                to={serv.link}
                className="group relative rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-orange-500/50 p-4 transition-all duration-300 hover:shadow-xl hover:shadow-zinc-950 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${serv.color} flex items-center justify-center text-white text-sm shadow-md`}>
                    <i className={`fa-solid ${serv.icon}`}></i>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded-full border border-orange-500/20">
                    {serv.badge}
                  </span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-xs sm:text-sm group-hover:text-orange-400 transition-colors">
                    {serv.title}
                  </h3>
                  <p className="text-zinc-400 text-[11px] leading-tight mt-0.5">
                    {serv.desc}
                  </p>
                </div>
                <div className="mt-2 text-right">
                  <span className="text-orange-500 text-xs font-semibold group-hover:translate-x-1 inline-block transition-transform">
                    Ver más →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Trust points bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-2 text-xs font-semibold text-zinc-400">
          <span className="flex items-center gap-1.5"><i className="fa-solid fa-bolt text-orange-500"></i> Presupuesto en el día</span>
          <span className="flex items-center gap-1.5"><i className="fa-solid fa-shield-halved text-orange-500"></i> Materiales premium (PLA/PETG)</span>
          <span className="flex items-center gap-1.5"><i className="fa-solid fa-truck-fast text-orange-500"></i> Entregas en Bariloche y Envíos</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
