
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Updates from './components/Updates';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 selection:bg-orange-500 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Services / Feature Strip */}
        <section className="py-12 glass relative z-10 -mt-10 overflow-hidden border-y border-zinc-800">
           <div className="flex whitespace-nowrap animate-infinite-scroll gap-20">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center gap-6 text-zinc-400 font-bold uppercase tracking-widest text-xs md:text-sm">
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-check-double text-orange-500"></i>
                    <span>Venta Mayorista</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-star text-orange-500"></i>
                    <span>Souvenirs para Eventos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-award text-orange-500"></i>
                    <span>Medallas y Trofeos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-ice-cream text-orange-500"></i>
                    <span>Toppers de Torta</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-truck text-orange-500"></i>
                    <span>Envíos a todo el país</span>
                  </div>
                </div>
              ))}
           </div>
        </section>

        <Portfolio />
        <Updates />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />

      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          display: flex;
          width: fit-content;
          animation: infinite-scroll 50s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default App;
