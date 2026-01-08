
import React, { useEffect, useState } from 'react';
import { getLatestNews } from '../services/geminiService';

interface CustomNewsItem {
  id: string;
  type: 'REEL' | 'POST' | 'STORE';
  title: string;
  content: string;
  date: string;
}

const Updates: React.FC = () => {
  const [news, setNews] = useState<CustomNewsItem[]>([]);
  const [sources, setSources] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      const { news: newsData, sources: sourcesData } = await getLatestNews();
      setNews(newsData);
      setSources(sourcesData);
      setLoading(false);
    };
    fetchNews();
  }, []);

  const getRelevantLinks = () => {
    return sources
      .filter(s => s.web && s.web.uri)
      .map(s => ({ uri: s.web.uri, title: s.web.title }))
      .slice(0, 3);
  };

  const relevantLinks = getRelevantLinks();

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'REEL': return 'fa-solid fa-clapperboard';
      case 'POST': return 'fa-solid fa-table-cells';
      case 'STORE': return 'fa-solid fa-bag-shopping';
      default: return 'fa-brands fa-instagram';
    }
  };

  return (
    <section id="novedades" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera Estilo Perfil */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-8">
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full p-1 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600">
                <div className="w-full h-full rounded-full bg-zinc-900 p-1">
                  <div className="w-full h-full rounded-full bg-orange-500 flex items-center justify-center">
                    <i className="fa-solid fa-cube text-white text-3xl"></i>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-1 right-1 w-6 h-6 bg-blue-500 border-4 border-zinc-900 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-check text-[10px] text-white"></i>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h2 className="text-2xl font-bold text-white tracking-tight">sinapsis3dbariloche</h2>
                <span className="bg-zinc-800 text-zinc-300 text-[10px] px-2 py-1 rounded-md font-bold uppercase tracking-wider">Seguir</span>
              </div>
              <p className="text-zinc-400 text-sm max-w-md">
                <span className="text-white font-semibold">Sinapsis 3D</span> • Bariloche, Patagonia.<br />
                Diseño 3D • Impresiones • Soluciones a medida.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
             <div className="text-center px-4">
                <div className="text-white font-bold">LIVE</div>
                <div className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">Estado</div>
             </div>
             <div className="w-px h-8 bg-zinc-800"></div>
             <a 
               href="https://www.instagram.com/sinapsis3dbariloche/" 
               target="_blank"
               className="px-6 py-2.5 bg-zinc-100 hover:bg-white text-black rounded-lg font-bold text-sm transition-all"
             >
               Ir al Perfil
             </a>
          </div>
        </div>

        {/* Grid de Contenido */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {loading ? (
            Array(3).fill(0).map((_, i) => (
              <div key={i} className="aspect-square rounded-2xl bg-zinc-800 animate-pulse border border-zinc-800"></div>
            ))
          ) : (
            news.map((item) => (
              <div key={item.id} className="group relative aspect-square rounded-2xl overflow-hidden glass border-zinc-800 hover:border-orange-500/30 transition-all">
                {/* Overlay Informativo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end transform transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-orange-600 text-[10px] font-black px-2 py-0.5 rounded text-white tracking-widest">
                      {item.type}
                    </span>
                    <span className="text-zinc-400 text-[10px] font-bold">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-black text-white mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-zinc-300 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.content}
                  </p>
                  <div className="mt-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-4 text-white/70">
                       <i className="fa-regular fa-heart"></i>
                       <i className="fa-regular fa-comment"></i>
                       <i className="fa-regular fa-paper-plane"></i>
                    </div>
                    <a href="https://www.instagram.com/sinapsis3dbariloche/" target="_blank" className="text-white text-xs font-bold underline decoration-orange-500">
                      Ver en App
                    </a>
                  </div>
                </div>
                
                {/* Fondo Visual decorativo */}
                <div className="absolute inset-0 -z-10 flex items-center justify-center">
                   <i className={`${getTypeIcon(item.type)} text-8xl text-zinc-800/50 group-hover:text-orange-500/10 transition-colors duration-500`}></i>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Verificación de Grounding (Fuentes Reales) */}
        {!loading && relevantLinks.length > 0 && (
          <div className="mt-12 flex flex-wrap items-center gap-4 justify-center">
            <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Confirmado por Búsqueda de Google:</span>
            {relevantLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.uri} 
                target="_blank" 
                className="text-[10px] px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 hover:text-orange-500 border border-zinc-700 transition-colors"
              >
                <i className="fa-brands fa-instagram mr-1"></i> Publicación Original
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Updates;
