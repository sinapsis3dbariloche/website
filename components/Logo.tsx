
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'full' | 'icon';
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", showText = true, variant = 'full' }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {/* Icono de la Gota Naranja */}
      <svg 
        viewBox="0 0 100 100" 
        className={`${variant === 'icon' ? 'w-full h-full' : 'h-2/3'}`}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M50 5C50 5 20 40 20 65C20 81.5685 33.4315 95 50 95C66.5685 95 80 81.5685 80 65C80 40 50 5 50 5Z" 
          fill="#F97316"
        />
        <circle cx="50" cy="65" r="15" fill="#09090B" />
        <path 
          d="M50 58C50 58 42 66 42 72C42 76.4183 45.5817 80 50 80C54.4183 80 58 76.4183 58 72C58 66 50 58 50 58Z" 
          fill="#F97316" 
        />
      </svg>
      
      {/* Texto SINAPSIS 3D */}
      {showText && variant === 'full' && (
        <div className="flex flex-col items-center mt-1 leading-none">
          <span className="text-white font-black tracking-tighter text-[1.2rem] uppercase italic">SINAPSIS</span>
          <span className="text-white font-black tracking-[0.3em] text-[0.8rem] ml-1">3D</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
