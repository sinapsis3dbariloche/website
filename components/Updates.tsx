
import React, { useEffect, useState } from 'react';
import { getLatestNews } from '../services/geminiService';
import { NewsItem } from '../types';

const Updates: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getLatestNews();
      setNews(data);
      setLoading(false);
    };
    fetchNews();
  }, []);

  return (
    <section id="novedades" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Directo del <span className="text-orange-500">Instagram</span>
            </h2>
            <p className="text-zinc-400">Las últimas novedades y trabajos del taller en tiempo real.</p>
          </div>
          <a 
            href="https://www.instagram.com/sinapsis3dbariloche/" 
            target="_blank"
            className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors border-b border-zinc-700 pb-1"
          >
            <i className="fa-brands fa-instagram text-xl"></i> Seguir @sinapsis3dbariloche
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {loading ? (
            Array(3).fill(0).map((_, i) => (
              <div key={i} className="h-64 rounded-3xl bg-zinc-800 animate-pulse border border-zinc-700"></div>
            ))
          ) : (
            news.map((item) => (
              <div key={item.id} className="glass p-8 rounded-3xl border-zinc-800 flex flex-col h-full hover:bg-zinc-800/50 transition-colors">
                <span className="text-orange-500 text-xs font-bold uppercase tracking-wider mb-3">
                  {item.date}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                  {item.content}
                </p>
                <button className="text-zinc-300 text-xs font-semibold flex items-center hover:text-white transition-colors">
                  LEER MÁS <i className="fa-solid fa-arrow-right ml-2"></i>
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Updates;
