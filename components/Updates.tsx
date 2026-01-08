
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
  const [lastSync, setLastSync] = useState<string>('');

  useEffect(() => {
    const fetchNews = async () => {
      const { news: newsData } = await getLatestNews();
      setNews(newsData);
      setLoading(false);
      setLastSync(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    fetchNews();
  }, []);

  return (
    <section id="novedades" className="py-24 bg-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Instagram Header Mockup */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
          <div className="flex items-center gap-5">
            <div className="relative group cursor-pointer">
              <div className="w-20 h-20 rounded-full p-[3px] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-zinc-900 p-1">
                   <div className="w-full h-full rounded-full bg-orange-500 flex items-center justify-center">
                      <i className="fa-solid fa-cube text-white text-2xl"></i>
                   </div>
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 bg-blue-500 border-4 border-zinc-900 w-7 h-7 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-check text-[10px] text-white"></i>
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h2 className="text-2xl font-black text-white tracking-tight">sinapsis3dbariloche</h2>
                <span className="hidden sm:inline-block bg-zinc-800 text-zinc-300 text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider">Oficial</span>
              </div>
              <div className="flex gap-4 text-sm">
                <span className="text-zinc-300"><strong className="text-white">3</strong> posts reales</span>
                <span className="text-zinc-500">• Sincronizado {lastSync}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <a 
              href="https://www.instagram.com/sinapsis3dbariloche/" 
              target="_blank"
              className="flex-1 md:flex-none text-center px-8 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-bold text-sm transition-all shadow-lg shadow-orange-900/20"
            >
              Seguir en Instagram
            </a>
            <div className="px-3 py-2.5 bg-zinc-800 rounded-lg text-white">
              <i className="fa-solid fa-ellipsis"></i>
            </div>
          </div>
        </div>

        {/* Stories/Highlights Bar */}
        <div className="flex gap-6 mb-16 overflow-x-auto pb-4 no-scrollbar">
           {['Proyectos', 'Taller', 'Envíos', 'Feedback'].map((story, i) => (
             <div key={i} className="flex flex-col items-center gap-2 flex-shrink-0 cursor-pointer group">
                <div className="w-16 h-16 rounded-full border-2 border-zinc-700 p-1 group-hover:border-orange-500 transition-colors">
                   <div className="w-full h-full rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden">
                      <img src={`https://picsum.photos/seed/story-${i}/100/100`} alt={story} className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity" />
                   </div>
                </div>
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{story}</span>
             </div>
           ))}
        </div>

        {/* Live Feed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {loading ? (
            Array(3).fill(0).map((_, i) => (
              <div key={i} className="aspect-square bg-zinc-800 rounded-2xl animate-pulse"></div>
            ))
          ) : (
            news.map((item) => (
              <a 
                key={item.id} 
                href={item.url || 'https://www.instagram.com/sinapsis3dbariloche/'}
                target="_blank"
                className="group relative aspect-square rounded-2xl overflow-hidden glass border-zinc-800 hover:border-orange-500/50 transition-all flex flex-col"
              >
                {/* Header del Post */}
                <div className="p-4 flex items-center gap-2 border-b border-white/5 bg-zinc-900/50">
                   <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-[10px] text-white">
                      <i className="fa-solid fa-cube"></i>
                   </div>
                   <span className="text-[10px] font-bold text-white">sinapsis3dbariloche</span>
                   <span className="ml-auto text-[10px] text-zinc-500">{item.date}</span>
                </div>

                {/* Contenido del Post */}
                <div className="flex-grow p-6 flex flex-col justify-center text-center bg-zinc-950/20 group-hover:bg-zinc-950/40 transition-colors">
                   <h3 className="text-lg font-black text-white mb-2 group-hover:text-orange-500 transition-colors leading-tight">
                     {item.title}
                   </h3>
                   <p className="text-zinc-400 text-xs leading-relaxed italic">
                     "{item.content}"
                   </p>
                </div>

                {/* Footer del Post - Interacción */}
                <div className="p-4 border-t border-white/5 bg-zinc-900/50 flex items-center justify-between text-zinc-400 group-hover:text-white transition-colors">
                   <div className="flex gap-4 text-sm">
                      <i className="fa-regular fa-heart"></i>
                      <i className="fa-regular fa-comment"></i>
                      <i className="fa-regular fa-paper-plane"></i>
                   </div>
                   <span className="text-[10px] font-black tracking-widest uppercase">Ver en IG</span>
                </div>

                {/* Pulse "Live" effect */}
                <div className="absolute top-16 right-4">
                   <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                   </span>
                </div>
              </a>
            ))
          )}
        </div>
      </div>
      
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Updates;
