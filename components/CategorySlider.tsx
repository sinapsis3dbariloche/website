import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

interface CategorySliderProps {
  title?: string;
  subtitle?: string;
  categories: {
    title: string;
    image: string;
    link: string;
  }[];
}

const CategorySlider: React.FC<CategorySliderProps> = ({ title = "Explora nuestros trabajos por categoría", subtitle, categories }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -sliderRef.current.clientWidth * 0.8 : sliderRef.current.clientWidth * 0.8;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-6 pb-4 overflow-hidden relative group/slider">
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-2 tracking-tight">{title}</h2>
            {subtitle && <p className="text-zinc-400 text-lg mt-2">{subtitle}</p>}
          </div>
          <div className="flex items-center gap-6">
            <div className="flex gap-2">
              <button 
                onClick={() => scroll('left')} 
                className="w-12 h-12 rounded-full bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-orange-500 hover:border-orange-500 transition-all cursor-pointer backdrop-blur"
                aria-label="Anterior"
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button 
                onClick={() => scroll('right')} 
                className="w-12 h-12 rounded-full bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-orange-500 hover:border-orange-500 transition-all cursor-pointer backdrop-blur"
                aria-label="Siguiente"
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
            <Link to="/portfolio" className="hidden md:inline-flex items-center gap-2 text-orange-500 font-bold hover:text-orange-400 transition-colors group">
              Ver catálogo completo
              <i className="fa-solid fa-arrow-right transform group-hover:translate-x-1 transition-transform"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Slider Container */}
      <div className="w-full relative z-10">
        <div 
          ref={sliderRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-10 px-4 sm:px-6 lg:px-8 hide-scrollbar scroll-smooth" 
          style={{ scrollPaddingLeft: 'max(1rem, calc((100vw - 80rem) / 2))' }}
        >
          {categories.map((category, index) => (
            <Link 
              key={index}
              to={category.link}
              className="snap-start shrink-0 w-[280px] md:w-[320px] lg:w-[380px] group relative rounded-3xl overflow-hidden aspect-[4/5] bg-zinc-900 border border-zinc-800 transition-all hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-900/20"
            >
              <div className="absolute inset-0 bg-zinc-900">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover opacity-70 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                   <i className="fa-solid fa-arrow-right"></i>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">{category.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default CategorySlider;
