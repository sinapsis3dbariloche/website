
import React, { useEffect, useState } from 'react';
import { getLatestNews } from '../services/geminiService';
import Logo from './Logo';

interface InstagramNews {
  id: string;
  title: string;
  content: string;
  date: string;
  icon?: string;
  url?: string;
}

// Component to display recent social media updates synced via Gemini API
const Updates: React.FC = () => {
  const [news, setNews] = useState<InstagramNews[]>([]);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [lastSync, setLastSync] = useState<string>('');
  const [sources, setSources] = useState<any[]>([]);

  const handleSync = async () => {
    setSyncing(true);
    const { news: newsData, sources: groundingSources } = await getLatestNews();
    setNews(newsData);
    setSources(groundingSources || []);
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
        {/* Header with Sync Context */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="w-20 h-20 rounded-full p-[3px] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600">
                <div className="w-full h-full rounded-full bg-zinc-900 p-1">
                  <div className="w-full h-full rounded-full bg-zinc-950 flex items-center justify-center p-2">
                    <Logo variant="icon" className="w-full h-full" />
                  </div>
                </div>
              </div>
              {syncing && (
                <div className="absolute inset-0 rounded-full border-4 border-white border-t-transparent animate-spin"></div>
              )}
            </div>
            
            <div>
              <h2 className="text-3xl font-black text-white mb-1 uppercase tracking-tight">Social <span className="text-orange-500 italic">Live</span> Feed</h2>
              <p className="text-zinc-500 text-sm flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${syncing ? 'bg-yellow-500 animate-pulse' : 'bg-green-500'}`}></span>
                Estado: {syncing ? 'Analizando Instagram...' : `Última sincronización: ${lastSync || 'Conectando...'}`}
              </p>
            </div>
          </div>

          <button 
            onClick={handleSync}
            disabled={syncing}
            className="group flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-2xl text-[10px] font-black tracking-widest transition-all disabled:opacity-50 border border-zinc-700 active:scale-95 shadow-xl shadow-black/40"
          >
            <i className={`fa-solid fa-rotate ${syncing ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`}></i>
            {syncing ? 'RASTREANDO...' : 'SINCRONIZAR FEED'}
          </button>
        </div>

        {/* Feed Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {loading ? (
            Array(3).fill(0).map((_, i) => (
              <div key={i} className="aspect-[4/5] bg-zinc-800/20 rounded-3xl border border-zinc-800 flex items-center justify-center">
                 <i className="fa-brands fa-instagram text-zinc-800 text-5xl animate-bounce"></i>
              </div>
            ))
          ) : (
            news.map((item, idx) => (
              <a 
                key={item.id || idx} 
                href={item.url || 'https://www.instagram.com/sinapsis3dbariloche/'}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-950 border border-zinc-800 hover:border-orange-500/40 transition-all flex flex-col shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-800/10 to-zinc-950 opacity-40 group-hover:opacity-10 transition-opacity"></div>
                
                {/* Product/Icon Representation */}
                <div className="relative flex-grow flex items-center justify-center p-8">
                   <div className="w-28 h-28 bg-orange-500/5 rounded-full flex items-center justify-center border border-orange-500/10 group-hover:scale-110 group-hover:bg-orange-500/10 transition-all duration-700">
                      <i className={`fa-solid ${item.icon || 'fa-cube'} text-5xl text-orange-500/80 group-hover:text-orange-500 transition-colors`}></i>
                   </div>
                   
                   <div className="absolute top-6 right-6 px-3 py-1 bg-zinc-900/80 backdrop-blur-sm border border-white/5 text-[9px] font-black text-orange-500 rounded-full tracking-widest uppercase">
                      {item.date || 'RECIENTE'}
                   </div>
                </div>

                {/* Content Overlay Card */}
                <div className="relative p-6 bg-zinc-900/95 backdrop-blur-md border-t border-white/5">
                  <div className="flex items-center gap-2 mb-3">
                     <div className="w-6 h-6 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center">
                        <i className="fa-brands fa-instagram text-[10px] text-zinc-500"></i>
                     </div>
                     <span className="text-[10px] font-bold text-zinc-400 tracking-widest uppercase">Instagram Update</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors line-clamp-1">{item.title}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed line-clamp-2">{item.content}</p>
                </div>
              </a>
            ))
          )}
        </div>

        {/* Sources display for Grounding Compliance */}
        {!loading && sources.length > 0 && (
          <div className="mt-12 p-6 bg-zinc-950/50 rounded-2xl border border-zinc-800">
            <h4 className="text-zinc-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">Fuentes de información (Google Search)</h4>
            <div className="flex flex-wrap gap-4">
              {sources.map((source, i) => (
                source.web && (
                  <a 
                    key={i} 
                    href={source.web.uri} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-orange-500/70 hover:text-orange-500 transition-colors flex items-center gap-2"
                  >
                    <i className="fa-solid fa-link text-[10px]"></i>
                    {source.web.title || 'Ver fuente'}
                  </a>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Updates;
