import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';
import { SOCIALS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

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
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-zinc-300 hover:text-orange-500 transition-colors font-medium text-sm uppercase tracking-wider">Inicio</Link>
            <Link to="/impresion-3d" className="text-zinc-300 hover:text-orange-500 transition-colors font-medium text-sm uppercase tracking-wider">Impresión 3D</Link>
            <Link to="/grafica" className="text-zinc-300 hover:text-orange-500 transition-colors font-medium text-sm uppercase tracking-wider">Gráfica</Link>
            <Link to="/portfolio" className="text-zinc-300 hover:text-orange-500 transition-colors font-medium text-sm uppercase tracking-wider">Portfolio</Link>
            <Link to="/contacto" className="text-zinc-300 hover:text-orange-500 transition-colors font-medium text-sm uppercase tracking-wider">Contacto</Link>
          </div>
          
          {/* Socials, CTA and Mobile Toggle */}
          <div className="flex items-center gap-3 sm:gap-6">
            <div className="hidden sm:flex items-center gap-4 border-r border-zinc-800 pr-6 mr-0">
              {SOCIALS.map((social) => (
                <a 
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors text-lg"
                  aria-label={social.platform}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
            
            <a 
              href={`https://wa.me/5492944914816`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex bg-orange-600 hover:bg-orange-700 text-white px-5 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-lg shadow-orange-900/40 whitespace-nowrap"
            >
              Consultar Proyecto
            </a>
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
            <div className="flex flex-col px-6 pt-4 pb-8 space-y-2">
              <Link to="/" onClick={closeMenu} className="text-zinc-300 hover:text-orange-500 font-bold uppercase tracking-wider text-sm py-4 border-b border-zinc-900">Inicio</Link>
              <Link to="/impresion-3d" onClick={closeMenu} className="text-zinc-300 hover:text-orange-500 font-bold uppercase tracking-wider text-sm py-4 border-b border-zinc-900">Impresión 3D</Link>
              <Link to="/grafica" onClick={closeMenu} className="text-zinc-300 hover:text-orange-500 font-bold uppercase tracking-wider text-sm py-4 border-b border-zinc-900">Gráfica</Link>
              <Link to="/portfolio" onClick={closeMenu} className="text-zinc-300 hover:text-orange-500 font-bold uppercase tracking-wider text-sm py-4 border-b border-zinc-900">Portfolio</Link>
              <Link to="/contacto" onClick={closeMenu} className="text-zinc-300 hover:text-orange-500 font-bold uppercase tracking-wider text-sm py-4 border-b border-zinc-900">Contacto</Link>
              
              <div className="pt-6 pb-2">
                <a 
                  href={`https://wa.me/5492944914816`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex justify-center bg-orange-600 hover:bg-orange-700 text-white px-6 py-4 rounded-xl text-sm font-bold transition-all shadow-lg shadow-orange-900/40"
                >
                  <i className="fa-brands fa-whatsapp text-lg mr-2"></i> Consultar Proyecto
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