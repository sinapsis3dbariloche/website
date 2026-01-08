
import React, { useEffect, useState } from 'react';
import { getLatestNews } from '../services/geminiService';

interface InstagramNews {
  id: string;
  title: string;
  content: string;
  date: string;
  url?: string;
}

const Updates: React.FC = () => {
  const [news, setNews] = useState<InstagramNews[]>([]);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [lastSync, setLastSync] = useState<string>('');

  const handleSync = async () => {
    setSyncing(true);
    const { news: newsData } = await getLatestNews();
    setNews(newsData);
    setLastSync(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    setLoading(false);
    setSyncing(false);
  };

  useEffect(() => {
    handleSync();
  }, []);

  return (
    <section id="novedades" className="py-24 bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header con Sincronización */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="w-20 h-20 rounded-full p-[3px] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600">
                <div className="w-full h-full rounded-full bg-zinc-900 p-1">
                  <div className="w-full h-full rounded-full bg-orange-500 flex items-center justify-center">
                    <i className="fa-solid fa-cube text-white text-2xl"></i>
                  </div>
                </div>
              </div>
              {syncing && (
                <div className="absolute inset-0 rounded-full border-4 border-white border-t-transparent animate-spin"></div>
              )}
            </div>
            
            <div>
              <h2 className="text-3xl font-black text-white mb-1">Instagram Feed</h2>
              <p className="text-zinc-500 text-sm flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${syncing ? 'bg-yellow-500 animate-pulse' : 'bg-green-500'}`}></span>
                Sincronizado: {lastSync || 'Conectando...'}
              </p>
            </div>
          </div>

          <button 
            onClick={handleSync}
            disabled={syncing}
            className="group flex items-center gap-2 px-5 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-full text-xs font-bold transition-all disabled:opacity-50"
          >
            <i className={`fa-solid fa-rotate ${syncing ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`}></i>
            {syncing ? 'Sincronizando...' : 'Actualizar Feed'}
          </button>
        </div>

        {/* Feed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {loading ? (
            Array(3).fill(0).map((_, i) => (
              <div key={i} className="aspect-[4/5] bg-zinc-800/50 rounded-3xl animate-pulse border border-zinc-800"></div>
            ))
          ) : (
            news.map((item, idx) => (
              <a 
                key={item.id} 
                href={item.url || 'https://www.instagram.com/sinapsis3dbariloche/'}
                target="_blank"
                className="group relative aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-950 border border-zinc-800 hover:border-orange-500/40 transition-all flex flex-col shadow-2xl"
              >
                {/* Imagen/Fondo Simulado con los colores de la marca */}
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-800 to-zinc-950 opacity-50 group-hover:opacity-30 transition-opacity"></div>
                
                {/* Contenido Visual */}
                <div className="relative flex-grow flex items-center justify-center p-8">
                   <div className="w-24 h-24 bg-orange-500/10 rounded-full flex items-center justify-center border border-orange-500/20 group-hover:scale-110 transition-transform duration-500">
                      <i className={`fa-solid ${idx === 0 ? 'fa-cake-candles' : idx === 1 ? 'fa-paw' : 'fa-shapes'} text-4xl text-orange-500`}></i>
                   </div>
                   
                   {/* Badge de "Nuevo" */}
                   <div className="absolute top-6 right-6 px-3 py-1 bg-orange-600 text-[10px] font-black text-white rounded-full tracking-tighter">
                      POST RECIENTE
                   </div>
                </div>

                {/* Info Card (Estilo Glass) */}
                <div className="relative p-6 bg-zinc-900/80 backdrop-blur-md border-t border-white/5">
                  <div className="flex items-center gap-2 mb-3">
                     <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-[8px] text-white">
                        <i className="fa-solid fa-cube"></i>
                     </div>
                     <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest">sinapsis3dbariloche</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-sm line-clamp-2 italic mb-4">
                    "{item.content}"
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="flex gap-4 text-zinc-500">
                       <i className="fa-regular fa-heart hover:text-red-500 transition-colors cursor-pointer"></i>
                       <i className="fa-regular fa-comment hover:text-white transition-colors cursor-pointer"></i>
                    </div>
                    <span className="text-[10px] font-black text-orange-500 flex items-center gap-1">
                      VER POST <i className="fa-solid fa-arrow-up-right-from-square text-[8px]"></i>
                    </span>
                  </div>
                </div>
              </a>
            ))
          )}
        </div>

        {/* Botón Call to Action Final */}
        <div className="mt-16 text-center">
           <a 
            href="https://www.instagram.com/sinapsis3dbariloche/" 
            target="_blank"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-2xl font-black hover:bg-orange-500 hover:text-white transition-all transform hover:-translate-y-1 shadow-xl"
           >
             <i className="fa-brands fa-instagram text-2xl"></i>
             VER TODAS LAS PUBLICACIONES
           </a>
        </div>
      </div>
    </section>
  );
};

export default Updates;
