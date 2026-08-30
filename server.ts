import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';

const PORT = 3000;

const seoData: Record<string, { title: string, desc: string, h1: string, content: string }> = {
  '/': {
    title: 'Sinapsis 3D Bariloche | Impresión 3D y Gráfica',
    desc: 'Especialistas en Impresión 3D y Gráfica en Bariloche. Fabricamos souvenirs, trofeos personalizados, y merchandising con envíos a toda la Patagonia.',
    h1: 'Impresión 3D, Diseño y Gráfica en Bariloche',
    content: 'En Sinapsis 3D Bariloche somos especialistas en materializar tus ideas a través de la impresión 3D y el diseño gráfico. Nos apasiona crear productos únicos y personalizados, desde regalos originales hasta soluciones prácticas para tu día a día, empresa o evento. Ofrecemos un servicio integral que abarca desde el modelado tridimensional hasta la impresión final, garantizando la máxima calidad en cada detalle.'
  },
  '/impresion-3d': {
    title: 'Impresión 3D en Bariloche | Diseños a Medida | Sinapsis 3D',
    desc: 'Especialistas en Impresión 3D personalizada en Bariloche. Creamos diseños únicos a medida en trofeos, souvenirs y merchandising.',
    h1: 'Impresión 3D 100% Personalizada',
    content: 'Diseñamos y fabricamos soluciones tridimensionales totalmente a tu medida. Nuestro fuerte es la personalización absoluta de cada pieza: desde agregar nombres específicos hasta adaptar la estética completa a la temática de tu evento o marca.'
  },
  '/grafica': {
    title: 'Gráfica y Papelería Personalizada en Bariloche | Sinapsis 3D',
    desc: 'Servicios integrales de gráfica y diseño totalmente personalizados en Bariloche. Creamos stickers, papelería y diseños a medida.',
    h1: 'Gráfica y Diseño 100% Personalizado',
    content: 'Ampliamos nuestra propuesta para que tus eventos y marca destaquen. Diseñamos e imprimimos toda la gráfica adaptada a tus temáticas, con nombres y estilos a elección.'
  },
  '/souvenirs': {
    title: 'Souvenirs para Eventos y Cumpleaños | Sinapsis 3D Bariloche',
    desc: 'Souvenirs personalizados en impresión 3D para cumpleaños y eventos en Bariloche. Centros de mesa, llaveros temáticos y adornos.',
    h1: 'Souvenirs para Eventos y Cumpleaños',
    content: 'En Sinapsis 3D nos especializamos en fabricar souvenirs y artículos para cumpleaños y eventos de forma completamente personalizada. Transformá tus festejos con detalles únicos que tus invitados van a conservar y recordar. Fabricamos todo a medida mediante impresión 3D: desde llaveros con nombres y temáticas infantiles, centros de mesa exclusivos, adornos para tortas (cake toppers) hasta detalles para mesas dulces, bodas y fiestas infantiles.'
  },
  '/merchandising': {
    title: 'Merchandising para Empresas y Comercios | Sinapsis 3D',
    desc: 'Merchandising corporativo y artículos promocionales impresos en 3D para empresas en Bariloche. Llaveros con logo, stands y artículos B2B.',
    h1: 'Merchandising Corporativo',
    content: 'Potenciá la imagen de tu empresa o marca con nuestras soluciones en merchandising corporativo y artículos promocionales B2B. En Sinapsis 3D creamos piezas que comunican el valor de tu marca de manera efectiva y original. Desde llaveros corporativos con el logo de tu empresa, regalos empresariales personalizados, soportes institucionales hasta tarjetas de presentación y exhibidores.'
  },
  '/portfolio': {
    title: 'Portfolio de Trabajos | Sinapsis 3D Bariloche',
    desc: 'Galería de trabajos personalizados en Impresión 3D y Gráfica. Diseños a medida, temáticas exclusivas y creaciones.',
    h1: 'Portfolio de Trabajos Realizados',
    content: 'Explorá nuestra galería de trabajos personalizados en impresión 3D y gráfica. Diseños a medida, temáticas exclusivas y creaciones hechas con la mejor calidad en Bariloche.'
  },
  '/contacto': {
    title: 'Contacto | Sinapsis 3D Bariloche',
    desc: 'Contactanos para cotizar tu proyecto de Impresión 3D o Gráfica en Bariloche. Envíos a toda la Patagonia.',
    h1: '¿Tenés un Desafío Creativo? Contacto',
    content: 'Envíos a todo el país. Llegamos a cada rincón de Argentina. Realizamos envíos a domicilio en Bariloche y por encomienda a nivel nacional. Consultas y Pedidos: Presupuestos sin cargo y asesoría personalizada por WhatsApp.'
  },
  '/mayorista': {
    title: 'Ventas Mayoristas | Sinapsis 3D Bariloche',
    desc: 'Servicio de venta mayorista para cotillones, artísticas, kioskos y comercios. Accedé a precios por mayor y revendé nuestros productos.',
    h1: 'Ventas Mayoristas',
    content: 'Diseñamos y fabricamos una amplia variedad de productos ideales para la reventa en cotillones, artísticas, kioscos, librerías y tiendas de regalos. Ofrecemos precios diferenciales por cantidad, permitiéndote incorporar artículos novedosos, rentables y de alta rotación a tu catálogo. Contamos con cortantes de repostería, llaveros, merchandising, artículos escolares, didácticos y más.'
  }
};

async function startServer() {
  const app = express();
  
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom'
    });
    
    app.use(vite.middlewares);
    
    // Inject SEO tags in development
    app.get('*all', async (req, res, next) => {
      const url = req.originalUrl;
      let pathName = url.split('?')[0];
      if (pathName.length > 1 && pathName.endsWith('/')) {
        pathName = pathName.slice(0, -1);
      }
      
      try {
        let template = fs.readFileSync(path.resolve('index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        
        const data = seoData[pathName] || seoData['/'];
        const canonicalUrl = `https://www.sinapsis3dbariloche.com.ar${pathName === '/' ? '' : pathName}`;
        
        // Inject SEO
        template = template.replace(
          /<title>.*?<\/title>/,
          `<title>${data.title}</title>`
        );
        template = template.replace(
          /<\/head>/,
          `<meta name="description" content="${data.desc}" />
           <link rel="canonical" href="${canonicalUrl}" />
           </head>`
        );
        
        // Inject content for crawlers
        template = template.replace(
          /<div id="root"><\/div>/,
          `<div id="root">
             <div style="display:none" class="seo-content">
               <h1>${data.h1}</h1>
               <p>${data.content}</p>
             </div>
           </div>`
        );
        
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath, { index: false }));
    
    app.get('*all', (req, res) => {
      const url = req.originalUrl;
      let pathName = url.split('?')[0];
      if (pathName.length > 1 && pathName.endsWith('/')) {
        pathName = pathName.slice(0, -1);
      }
      
      let template = fs.readFileSync(path.join(distPath, 'index.html'), 'utf-8');
      
      const data = seoData[pathName] || seoData['/'];
      const canonicalUrl = `https://www.sinapsis3dbariloche.com.ar${pathName === '/' ? '' : pathName}`;
      
      template = template.replace(
        /<title>.*?<\/title>/,
        `<title>${data.title}</title>`
      );
      template = template.replace(
        /<\/head>/,
        `<meta name="description" content="${data.desc}" />
         <link rel="canonical" href="${canonicalUrl}" />
         </head>`
      );
      
      template = template.replace(
        /<div id="root"><\/div>/,
        `<div id="root">
           <div style="display:none" class="seo-content">
             <h1>${data.h1}</h1>
             <p>${data.content}</p>
           </div>
         </div>`
      );
      
      res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
