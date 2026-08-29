import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon';
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", variant = 'full' }) => {
  // SVG que recrea fielmente el isotipo de la gota de Sinapsis 3D
  // Optimizado con un trazo gris oscuro para el contorno y un naranja vibrante claro para la gota central.
  const Isotipo = () => {
    const [hasError, setHasError] = React.useState(false);

    if (hasError) {
      return (
        <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
          {/* Círculo/Gota Exterior con relleno naranja principal y trazo gris oscuro (Zinc 800) */}
          <path 
            d="M50 5C50 5 15 45 15 75C15 94.33 30.67 110 50 110C69.33 110 85 94.33 85 75C85 45 50 5 50 5ZM50 95C38.95 95 30 86.05 30 75C30 63.95 38.95 55 50 55C61.05 55 70 63.95 70 75C70 86.05 61.05 95 50 95Z" 
            fill="#F97316" 
            stroke="#27272A"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Gota Interior con un tono de naranja más claro (#FB923C) para resaltar el centro */}
          <path 
            d="M50 65C50 65 38 78.33 38 88.33C38 94.96 43.37 100.33 50 100.33C56.63 100.33 62 94.96 62 88.33C62 78.33 50 65 50 65Z" 
            fill="#FB923C" 
          />
        </svg>
      );
    }

    return (
      <img 
        src="/images/sinapsis3dlogo.png" 
        alt="Sinapsis 3D Logo" 
        referrerPolicy="no-referrer"
        className="h-full w-auto object-contain"
        onError={() => setHasError(true)}
      />
    );
  };

  if (variant === 'icon') {
    return <div className={className}><Isotipo /></div>;
  }

  return (
    <div className={`flex flex-col items-center justify-center gap-2 ${className}`}>
      <div className="h-2/3">
        <Isotipo />
      </div>
      <div className="flex flex-col items-center -space-y-1 mt-1">
        <span className="text-white font-black text-xl tracking-widest uppercase leading-none">SINAPSIS</span>
        <span className="text-[0.65rem] text-orange-500 font-bold tracking-[0.2em] uppercase mt-1">Bariloche</span>
      </div>
    </div>
  );
};

export default Logo;