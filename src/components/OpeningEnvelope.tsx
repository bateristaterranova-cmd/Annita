import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface OpeningEnvelopeProps {
  onOpen: () => void;
}

export const OpeningEnvelope: React.FC<OpeningEnvelopeProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);

    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(60);
    }

    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#fde047', '#facc15', '#f59e0b', '#fef08a'],
    });

    setTimeout(() => {
      onOpen();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-40 flex flex-col items-center justify-center p-6 bg-[#0c0d14]/95 backdrop-blur-lg">
      <div className="text-center mb-8 animate-fade-in">
        <span className="text-xs uppercase tracking-widest text-amber-400/80 font-bold mb-2 block">
          21 de Septiembre
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-amber-100 flex items-center justify-center gap-2">
          <span>Para Annita</span>
          <span className="text-amber-400">🌻</span>
        </h1>
        <p className="text-sm text-slate-300/80 mt-2 max-w-xs mx-auto">
          Un pequeño detalle pensado para alguien muy especial...
        </p>
      </div>

      {/* Sobre Interactivo Táctil */}
      <div
        onClick={handleOpen}
        className={`relative w-64 h-44 sm:w-72 sm:h-48 rounded-2xl bg-gradient-to-br from-amber-700 via-amber-800 to-amber-950 border border-amber-500/40 p-4 shadow-2xl shadow-amber-500/20 cursor-pointer transition-all duration-700 flex flex-col items-center justify-center active:scale-95 ${
          isOpening ? 'scale-110 opacity-0 -translate-y-12' : 'hover:scale-105 animate-pulse'
        }`}
      >
        {/* Solapa del sobre SVG */}
        <svg
          viewBox="0 0 200 120"
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          {/* Triángulo de la solapa */}
          <polygon
            points="0,0 200,0 100,65"
            fill="#92400e"
            opacity="0.9"
            stroke="#b45309"
            strokeWidth="1.5"
          />
        </svg>

        {/* Sello de lacre dorado central */}
        <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-300 flex items-center justify-center shadow-lg shadow-yellow-500/40 border-2 border-yellow-200">
          <span className="text-2xl filter drop-shadow">🌻</span>
        </div>

        <div className="relative z-10 mt-3 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 text-amber-200 text-xs font-medium border border-amber-400/30">
            <Sparkles className="w-3 h-3 text-amber-300" /> Toca para abrir
          </span>
        </div>
      </div>

      <p className="text-xs text-amber-300/60 mt-8 text-center italic">
        (Sube el volumen de tu teléfono para una mejor experiencia 🎵)
      </p>
    </div>
  );
};
