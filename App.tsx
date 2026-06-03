import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GraphicsServices from './components/GraphicsServices';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [activeImage, setActiveImage] = useState<{ src: string; title: string; desc?: string } | null>(null);

  // Close lightbox on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scrolling when lightbox is open
  useEffect(() => {
    if (activeImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeImage]);

  const handleImageClick = (src: string, title: string, desc?: string) => {
    setActiveImage({ src, title, desc });
  };

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
                    <span>Impresión 3D Mayorista</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-note-sticky text-orange-500"></i>
                    <span>Stickers y Calcos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-bolt text-orange-500"></i>
                    <span>Tatuajes Temporales</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-cake-candles text-orange-500"></i>
                    <span>Souvenirs y Toppers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-image text-orange-500"></i>
                    <span>Imanes y Fotos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-award text-orange-500"></i>
                    <span>Medallas y Trofeos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-palette text-orange-500"></i>
                    <span>Libritos para Pintar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-gift text-orange-500"></i>
                    <span>Memotest Personalizado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-flag text-orange-500"></i>
                    <span>Banderines Temáticos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-shirt text-orange-500"></i>
                    <span>Etiquetas Textiles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-address-card text-orange-500"></i>
                    <span>Tarjetas Personales</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-pencil text-orange-500"></i>
                    <span>Lápices Decorados 3D</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-box-archive text-orange-500"></i>
                    <span>Cajas Mundialistas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-truck text-orange-500"></i>
                    <span>Envíos a todo el país</span>
                  </div>
                </div>
              ))}
           </div>
        </section>

        <GraphicsServices onImageClick={handleImageClick} />

        <Portfolio onImageClick={handleImageClick} />
        
        <Contact />
      </main>

      {/* Lightbox Modal / Image Zoom */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 z-[110] w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white hover:text-orange-500 transition-all cursor-pointer backdrop-blur-md"
              title="Cerrar (Esc)"
            >
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full flex flex-col md:flex-row gap-6 bg-zinc-900/90 border border-zinc-800 rounded-3xl overflow-hidden p-3 md:p-6 shadow-2xl backdrop-blur-md max-h-[90vh] md:max-h-[80vh] overflow-y-auto"
            >
              {/* Image Container */}
              <div className="flex-1 flex items-center justify-center bg-zinc-950/40 rounded-2xl overflow-hidden min-h-[250px] md:min-h-[400px]">
                <img
                  src={activeImage.src}
                  alt={activeImage.title}
                  referrerPolicy="no-referrer"
                  className="max-w-full max-h-[50vh] md:max-h-[70vh] object-contain select-none shadow-lg rounded-xl"
                />
              </div>

              {/* Sidebar Info */}
              <div className="w-full md:w-80 flex flex-col justify-between py-2 px-3 md:px-0">
                <div>
                  <div className="inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/20 text-orange-500 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4">
                    Vista Ampliada
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                    {activeImage.title}
                  </h3>
                  {activeImage.desc && (
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                      {activeImage.desc}
                    </p>
                  )}
                </div>

                <div className="border-t border-zinc-800/80 pt-6 mt-4">
                  <p className="text-zinc-500 text-xs mb-4">
                    ¿Te gusta este producto? Cotizalo de forma instantánea de acuerdo a tus necesidades.
                  </p>
                  <a
                    href={`https://wa.me/5492944914816?text=${encodeURIComponent(`Hola Sinapsis 3D! Vi la foto de "${activeImage.title}" en pantalla completa en su web y me interesa encargar uno parecido.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-6 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold transition-all shadow-lg hover:shadow-orange-900/20 flex items-center justify-center gap-3 text-sm"
                  >
                    <i className="fa-brands fa-whatsapp text-lg animate-pulse"></i>
                    Cotizar este Trabajo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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