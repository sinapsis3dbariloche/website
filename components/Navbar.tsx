import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';
import { SOCIALS } from '../constants';
import { trackWhatsAppClick } from '../utils/analytics';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
    setIsProductsOpen(false); // Optional: reset when closing menu
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Hamburger and Brand Logo */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-zinc-300 hover:text-white p-2 -ml-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
            </button>

            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group cursor-pointer shrink-0" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <div className="w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                 <Logo variant="icon" />
              </div>
              <div className="flex flex-col -space-y-1 mt-1">
                <span className="text-base sm:text-lg font-black tracking-widest text-white leading-none">
                  SINAPSIS
                </span>
                <span className="text-[0.65rem] text-orange-500 font-bold tracking-[0.2em] uppercase mt-1">Bariloche</span>
              </div>
            </Link>
          </div>
          
          {/* Main Navigation (Desktop) */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link to="/impresion-3d" className="text-zinc-300 hover:text-orange-500 transition-colors font-semibold text-xs xl:text-sm uppercase tracking-wider whitespace-nowrap">3D</Link>
            <Link to="/grafica" className="text-zinc-300 hover:text-orange-500 transition-colors font-semibold text-xs xl:text-sm uppercase tracking-wider whitespace-nowrap">Gráfica</Link>
            <Link to="/productos/eventos" className="text-zinc-300 hover:text-orange-500 transition-colors font-semibold text-xs xl:text-sm uppercase tracking-wider whitespace-nowrap">Eventos</Link>
            <Link to="/mayorista" className="text-zinc-300 hover:text-orange-500 transition-colors font-semibold text-xs xl:text-sm uppercase tracking-wider whitespace-nowrap">Mayorista & Comercios</Link>
            
            {/* Dropdown Productos */}
            <div className="relative group py-6 -my-6 flex items-center">
              <button className="text-zinc-300 group-hover:text-orange-500 transition-colors font-semibold text-xs xl:text-sm uppercase tracking-wider flex items-center gap-1.5 focus:outline-none whitespace-nowrap cursor-pointer">
                Productos
                <i className="fa-solid fa-chevron-down text-[0.65rem] transition-transform duration-300 group-hover:rotate-180"></i>
              </button>
              
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl py-2 flex flex-col min-w-[220px]">
                  <Link to="/productos/eventos" className="px-5 py-3 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/50 transition-colors flex items-center">
                    <i className="fa-solid fa-glass-cheers w-6 text-orange-500"></i> Eventos & Fiestas
                  </Link>
                  <Link to="/souvenirs" className="px-5 py-3 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/50 transition-colors flex items-center">
                    <i className="fa-solid fa-gift w-6 text-orange-500"></i> Souvenirs & Combos
                  </Link>
                  <Link to="/mayorista" className="px-5 py-3 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/50 transition-colors flex items-center">
                    <i className="fa-solid fa-boxes-packing w-6 text-orange-500"></i> Mayorista & Reventa
                  </Link>
                  <Link to="/productos/merchandising" className="px-5 py-3 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/50 transition-colors flex items-center">
                    <i className="fa-solid fa-store w-6 text-orange-500"></i> Merchandising B2B
                  </Link>
                  <Link to="/productos/cumpleanos" className="px-5 py-3 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/50 transition-colors flex items-center">
                    <i className="fa-solid fa-cake-candles w-6 text-orange-500"></i> Cumpleaños
                  </Link>
                  <Link to="/productos/coleccionables" className="px-5 py-3 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/50 transition-colors flex items-center">
                    <i className="fa-solid fa-robot w-6 text-orange-500"></i> Coleccionables
                  </Link>
                  <Link to="/productos/deco-y-hogar" className="px-5 py-3 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/50 transition-colors flex items-center">
                    <i className="fa-solid fa-house w-6 text-orange-500"></i> Deco y Hogar
                  </Link>
                  <Link to="/productos/trofeos" className="px-5 py-3 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/50 transition-colors flex items-center">
                    <i className="fa-solid fa-trophy w-6 text-orange-500"></i> Trofeos
                  </Link>
                  <Link to="/productos/escolar" className="px-5 py-3 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/50 transition-colors flex items-center">
                    <i className="fa-solid fa-school w-6 text-orange-500"></i> Escolar
                  </Link>
                  <Link to="/productos/pasteleria" className="px-5 py-3 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/50 transition-colors flex items-center">
                    <i className="fa-solid fa-cookie-bite w-6 text-orange-500"></i> Pastelería
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/portfolio" className="text-zinc-300 hover:text-orange-500 transition-colors font-semibold text-xs xl:text-sm uppercase tracking-wider whitespace-nowrap">Portfolio</Link>
            <Link to="/contacto" className="text-zinc-300 hover:text-orange-500 transition-colors font-semibold text-xs xl:text-sm uppercase tracking-wider whitespace-nowrap">Contacto</Link>
          </div>
          
          {/* Social Icons (Desktop) & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-4">
              {SOCIALS.map((social) => (
                <a 
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-orange-500 transition-colors text-lg p-1.5 rounded-lg hover:bg-zinc-800/40"
                  aria-label={social.platform}
                  title={social.platform}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-zinc-950 border-b border-zinc-800 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col px-6 pt-4 pb-8 space-y-2 max-h-[calc(100dvh-80px)] overflow-y-auto">
              <Link to="/" onClick={closeMenu} className="text-zinc-300 hover:text-orange-500 font-bold uppercase tracking-wider text-sm py-4 border-b border-zinc-900">Inicio</Link>
              <Link to="/impresion-3d" onClick={closeMenu} className="text-zinc-300 hover:text-orange-500 font-bold uppercase tracking-wider text-sm py-4 border-b border-zinc-900">3D</Link>
              <Link to="/grafica" onClick={closeMenu} className="text-zinc-300 hover:text-orange-500 font-bold uppercase tracking-wider text-sm py-4 border-b border-zinc-900">Gráfica</Link>
              
              <Link to="/productos/eventos" onClick={closeMenu} className="text-zinc-300 hover:text-orange-500 font-bold uppercase tracking-wider text-sm py-4 border-b border-zinc-900 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <i className="fa-solid fa-glass-cheers text-orange-500 text-xs"></i>
                  Eventos & Fiestas
                </span>
                <span className="text-[10px] font-bold text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded-full border border-orange-500/20">3D + Gráfica</span>
              </Link>

              <Link to="/mayorista" onClick={closeMenu} className="text-zinc-300 hover:text-orange-500 font-bold uppercase tracking-wider text-sm py-4 border-b border-zinc-900 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <i className="fa-solid fa-store text-orange-500 text-xs"></i>
                  Mayorista & Comercios
                </span>
                <span className="text-[10px] font-bold text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded-full border border-orange-500/20">B2B & Aliado</span>
              </Link>
              
              <div className="border-b border-zinc-900">
                <button 
                  onClick={() => setIsProductsOpen(!isProductsOpen)} 
                  className="w-full flex items-center justify-between py-4 text-zinc-300 hover:text-orange-500 font-bold uppercase tracking-wider text-sm focus:outline-none"
                >
                  Más Categorías
                  <i className={`fa-solid fa-chevron-down transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`}></i>
                </button>
                <AnimatePresence>
                  {isProductsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col space-y-3 pb-4">
                        <Link to="/souvenirs" onClick={closeMenu} className="text-zinc-300 hover:text-orange-500 font-bold uppercase tracking-wider text-sm pl-4 border-l-2 border-orange-500/30 hover:border-orange-500 transition-colors flex items-center">
                          <i className="fa-solid fa-gift text-orange-500 mr-3 text-lg w-5"></i> Souvenirs & Fiestas
                        </Link>
                        <Link to="/productos/merchandising" onClick={closeMenu} className="text-zinc-300 hover:text-orange-500 font-bold uppercase tracking-wider text-sm pl-4 border-l-2 border-orange-500/30 hover:border-orange-500 transition-colors flex items-center">
                          <i className="fa-solid fa-store text-orange-500 mr-3 text-lg w-5"></i> Merchandising
                        </Link>
                        <Link to="/productos/cumpleanos" onClick={closeMenu} className="text-zinc-300 hover:text-orange-500 font-bold uppercase tracking-wider text-sm pl-4 border-l-2 border-orange-500/30 hover:border-orange-500 transition-colors flex items-center">
                          <i className="fa-solid fa-cake-candles text-orange-500 mr-3 text-lg w-5"></i> Cumpleaños
                        </Link>
                        <Link to="/productos/coleccionables" onClick={closeMenu} className="text-zinc-300 hover:text-orange-500 font-bold uppercase tracking-wider text-sm pl-4 border-l-2 border-orange-500/30 hover:border-orange-500 transition-colors flex items-center">
                          <i className="fa-solid fa-robot text-orange-500 mr-3 text-lg w-5"></i> Coleccionables
                        </Link>
                        <Link to="/productos/deco-y-hogar" onClick={closeMenu} className="text-zinc-300 hover:text-orange-500 font-bold uppercase tracking-wider text-sm pl-4 border-l-2 border-orange-500/30 hover:border-orange-500 transition-colors flex items-center">
                          <i className="fa-solid fa-house text-orange-500 mr-3 text-lg w-5"></i> Deco y Hogar
                        </Link>
                        <Link to="/productos/trofeos" onClick={closeMenu} className="text-zinc-300 hover:text-orange-500 font-bold uppercase tracking-wider text-sm pl-4 border-l-2 border-orange-500/30 hover:border-orange-500 transition-colors flex items-center">
                          <i className="fa-solid fa-trophy text-orange-500 mr-3 text-lg w-5"></i> Trofeos
                        </Link>
                        <Link to="/productos/escolar" onClick={closeMenu} className="text-zinc-300 hover:text-orange-500 font-bold uppercase tracking-wider text-sm pl-4 border-l-2 border-orange-500/30 hover:border-orange-500 transition-colors flex items-center">
                          <i className="fa-solid fa-school text-orange-500 mr-3 text-lg w-5"></i> Escolar
                        </Link>
                        <Link to="/productos/pasteleria" onClick={closeMenu} className="text-zinc-300 hover:text-orange-500 font-bold uppercase tracking-wider text-sm pl-4 border-l-2 border-orange-500/30 hover:border-orange-500 transition-colors flex items-center">
                          <i className="fa-solid fa-cookie-bite text-orange-500 mr-3 text-lg w-5"></i> Pastelería
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/portfolio" onClick={closeMenu} className="text-zinc-300 hover:text-orange-500 font-bold uppercase tracking-wider text-sm py-4 border-b border-zinc-900">Portfolio</Link>
              <Link to="/contacto" onClick={closeMenu} className="text-zinc-300 hover:text-orange-500 font-bold uppercase tracking-wider text-sm py-4 border-b border-zinc-900">Contacto</Link>
              
              <div className="pt-6 pb-2">
                <a 
                  href={`https://wa.me/5492944914816`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackWhatsAppClick('navbar_mobile', 'Pedir Presupuesto Mobile');
                    closeMenu();
                  }}
                  className="flex justify-center bg-orange-600 hover:bg-orange-700 text-white px-6 py-4 rounded-xl text-sm font-bold transition-all shadow-lg shadow-orange-900/40"
                >
                  <i className="fa-brands fa-whatsapp text-lg mr-2"></i> Pedir Presupuesto
                </a>
              </div>
              
              <div className="flex justify-center gap-6 pt-4">
                {SOCIALS.map((social) => (
                  <a 
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors text-2xl"
                    aria-label={social.platform}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;