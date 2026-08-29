import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export interface LightboxImage {
  src: string;
  title: string;
  desc?: string;
}

interface LightboxProps {
  activeImage: LightboxImage | null;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ activeImage, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

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

  return (
    <AnimatePresence>
      {activeImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-[110] w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white hover:text-orange-500 transition-all cursor-pointer backdrop-blur-md"
            title="Cerrar (Esc)"
          >
            <i className="fa-solid fa-xmark text-lg"></i>
          </button>

          <motion.div
            initial={{ scale: 0.95, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full flex flex-col md:flex-row gap-6 bg-zinc-900/90 border border-zinc-800 rounded-3xl overflow-hidden p-3 md:p-6 shadow-2xl backdrop-blur-md max-h-[90vh] md:max-h-[80vh] overflow-y-auto"
          >
            <div className="flex-1 flex items-center justify-center bg-zinc-950/40 rounded-2xl overflow-hidden min-h-[250px] md:min-h-[400px]">
              <img
                src={activeImage.src}
                alt={activeImage.title}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[50vh] md:max-h-[70vh] object-contain select-none shadow-lg rounded-xl"
              />
            </div>

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
  );
};

export default Lightbox;
