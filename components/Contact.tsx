import React from 'react';
import { CONTACT, SOCIALS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="pt-12 pb-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
              ¿Tenés un <br />
              <span className="text-orange-500">Desafío Creativo?</span>
            </h2>
            
            <div className="space-y-8">
              {/* Bloque de Envíos */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center flex-shrink-0 text-orange-500 border border-zinc-800">
                  <i className="fa-solid fa-truck-ramp-box text-xl"></i>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Envíos a todo el país</h4>
                  <p className="text-zinc-400">Llegamos a cada rincón de Argentina. Realizamos envíos a domicilio en Bariloche y por encomienda a nivel nacional.</p>
                </div>
              </div>

              {/* Bloque de Taller/Ubicación */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center flex-shrink-0 text-orange-500 border border-zinc-800">
                  <i className="fa-solid fa-warehouse text-xl"></i>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Dónde estamos</h4>
                  <p className="text-zinc-400">Nuestro taller de producción se encuentra en Barrio Altos del Cóndor, Bariloche.</p>
                  <div className="mt-3 p-3 bg-orange-500/5 border border-orange-500/20 rounded-xl">
                    <p className="text-orange-200 text-sm">
                      <i className="fa-solid fa-circle-info mr-2"></i>
                      <strong>Atención:</strong> No contamos con local al público. Punto exclusivo para retiro de pedidos confirmados.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bloque de WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center flex-shrink-0 text-green-500 border border-zinc-800">
                  <i className="fa-solid fa-comments text-xl"></i>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Consultas y Pedidos</h4>
                  <p className="text-zinc-400">Presupuestos sin cargo y asesoría personalizada por WhatsApp.</p>
                  <a 
                    href={`https://wa.me/${CONTACT.whatsapp}`}
                    target="_blank"
                    className="mt-4 inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-900/20"
                  >
                    <i className="fa-brands fa-whatsapp mr-2 text-xl"></i> Enviar Mensaje
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-4">
              {SOCIALS.map(social => (
                <a 
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-400 hover:text-orange-500 hover:border-orange-500/50 transition-all"
                  aria-label={social.platform}
                >
                  <i className={`${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative glass rounded-3xl overflow-hidden aspect-video shadow-2xl bg-zinc-900 flex flex-col items-center justify-center p-8 text-center border border-zinc-800">
                 <div className="w-24 h-24 bg-orange-500/10 rounded-full flex items-center justify-center mb-6 border border-orange-500/20">
                    <i className="fa-solid fa-box text-orange-500 text-4xl"></i>
                 </div>
                 <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">Logística y Entregas</h4>
                 <ul className="text-zinc-400 space-y-2 mb-6">
                   <li className="flex items-center justify-center gap-2"><i className="fa-solid fa-check text-orange-500"></i> Envíos a todo el país</li>
                   <li className="flex items-center justify-center gap-2"><i className="fa-solid fa-check text-orange-500"></i> Entregas a domicilio en Bariloche</li>
                   <li className="flex items-center justify-center gap-2"><i className="fa-solid fa-check text-orange-500"></i> Retiro programado en taller</li>
                 </ul>
                 <div className="p-4 bg-zinc-800/50 rounded-2xl border border-zinc-700 w-full max-w-xs">
                    <p className="text-zinc-500 text-xs italic">"Transformamos bits en átomos y los llevamos hasta tus manos."</p>
                 </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;