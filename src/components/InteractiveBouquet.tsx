import React, { useState } from 'react';
import { Sparkles, CheckCircle2, X } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FlowerItem {
  id: number;
  name: string;
  title: string;
  preview: string;
  message: string;
  color: string;
  icon: string;
}

const flowers: FlowerItem[] = [
  {
    id: 1,
    name: 'Girasol del Apoyo',
    title: 'Tu Apoyo Incondicional',
    preview: 'Siempre estás ahí para mí...',
    message:
      'Siempre estás ahí cuando más lo necesito. En los momentos difíciles o de dudas, tus palabras, tus consejos y tu confianza son un pilar inmenso para mí. Valoro con todo mi corazón que siempre me des tu mano.',
    color: 'from-amber-400 to-yellow-500',
    icon: '🌻',
  },
  {
    id: 2,
    name: 'Margarita de la Gratitud',
    title: 'Una Persona Muy Especial',
    preview: 'Ocupas un lugar único en mi vida...',
    message:
      'Eres una de las personas más importantes y especiales que tengo. Tu presencia me alegra el día, me transmite calma y hace que todo sea más bonito. Jamás olvides lo valiosa que eres para mí.',
    color: 'from-yellow-300 to-amber-400',
    icon: '🌼',
  },
  {
    id: 3,
    name: 'Flor de la Nobleza',
    title: 'Tu Gran Corazón',
    preview: 'Tu bondad y tu paciencia...',
    message:
      'Gracias por tu paciencia infinita, por escucharme siempre con tanta ternura y por esa empatía que te hace única. Tienes un corazón noble y una luz hermosa que ilumina todo a tu alrededor.',
    color: 'from-amber-300 to-yellow-400',
    icon: '💛',
  },
  {
    id: 4,
    name: 'Girasol de la Complicidad',
    title: 'Nuestra Complicidad',
    preview: 'Me encanta compartir contigo...',
    message:
      'Me encanta compartir tiempo contigo, nuestras risas y cada momento que pasamos juntos. Tenerte en mi vida y poder sonreír a tu lado es una de las cosas más bonitas.',
    color: 'from-yellow-400 to-amber-500',
    icon: '🌻',
  },
  {
    id: 5,
    name: 'Flor de la Ternura',
    title: 'Gracias por Tanto',
    preview: 'Mi agradecimiento sincero...',
    message:
      'Gracias por todo, de verdad. Por cada gesto, por cada detalle, por cada palabra de aliento y por ser exactamente quien eres. Te mereces el mundo entero y toda la felicidad posible.',
    color: 'from-amber-400 to-orange-400',
    icon: '✨',
  },
];

interface InteractiveBouquetProps {
  onAllDiscovered: () => void;
}

export const InteractiveBouquet: React.FC<InteractiveBouquetProps> = ({
  onAllDiscovered,
}) => {
  const [discovered, setDiscovered] = useState<number[]>([]);
  const [selectedFlower, setSelectedFlower] = useState<FlowerItem | null>(null);

  const handleFlowerClick = (flower: FlowerItem) => {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(40);
    }

    confetti({
      particleCount: 20,
      spread: 50,
      origin: { y: 0.6 },
      colors: ['#fde047', '#facc15', '#f59e0b'],
      disableForReducedMotion: true,
    });

    if (!discovered.includes(flower.id)) {
      const updated = [...discovered, flower.id];
      setDiscovered(updated);
      if (updated.length === flowers.length) {
        onAllDiscovered();
      }
    }
    setSelectedFlower(flower);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Contador de progreso */}
      <div className="w-full max-w-sm mb-6 px-4">
        <div className="flex justify-between items-center text-xs text-amber-200/90 font-medium mb-1.5">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Flores
            descubiertas
          </span>
          <span className="font-bold text-amber-300">
            {discovered.length} / {flowers.length}
          </span>
        </div>
        <div className="w-full h-2 bg-slate-800/80 rounded-full overflow-hidden p-0.5 border border-amber-500/20">
          <div
            className="h-full bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full transition-all duration-500 shadow-sm shadow-amber-400/50"
            style={{
              width: `${(discovered.length / flowers.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Ilustración interactiva del Ramo */}
      <div className="relative w-72 h-72 sm:w-80 sm:h-80 my-2 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 via-yellow-500/10 to-transparent rounded-full blur-3xl -z-10 animate-pulse" />

        {/* Tallos y hojas SVG */}
        <svg
          viewBox="0 0 200 200"
          className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-md"
        >
          <path
            d="M 100 190 Q 98 140 100 90"
            stroke="#2e5d36"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 100 190 Q 80 140 60 80"
            stroke="#2e5d36"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 100 190 Q 120 140 140 80"
            stroke="#2e5d36"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 100 190 Q 70 150 45 115"
            stroke="#254d2c"
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 100 190 Q 130 150 155 115"
            stroke="#254d2c"
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
          />

          <path
            d="M 85 155 Q 60 145 75 130 Q 90 145 85 155 Z"
            fill="#3d7a48"
          />
          <path
            d="M 115 155 Q 140 145 125 130 Q 110 145 115 155 Z"
            fill="#3d7a48"
          />
          <path
            d="M 90 120 Q 65 110 80 95 Q 95 110 90 120 Z"
            fill="#4b9358"
          />
          <path
            d="M 110 120 Q 135 110 120 95 Q 105 110 110 120 Z"
            fill="#4b9358"
          />

          <path
            d="M 75 190 L 125 190 L 118 145 L 82 145 Z"
            fill="#d97706"
            opacity="0.8"
          />
          <path
            d="M 70 145 Q 100 152 130 145 L 122 175 Q 100 180 78 175 Z"
            fill="#b45309"
            opacity="0.9"
          />
          <circle cx="100" cy="158" r="5" fill="#fef08a" />
          <path
            d="M 96 158 Q 80 150 92 165 Z"
            fill="#fde047"
          />
          <path
            d="M 104 158 Q 120 150 108 165 Z"
            fill="#fde047"
          />
        </svg>

        {/* Flores Interactivas */}
        <button
          onClick={() => handleFlowerClick(flowers[0])}
          className="absolute top-8 left-[calc(50%-32px)] w-16 h-16 rounded-full flex items-center justify-center cursor-pointer group active:scale-90 transition-transform duration-200"
          aria-label="Flor 1"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <span
              className={`text-4xl filter drop-shadow-[0_0_12px_rgba(250,204,21,0.8)] transition-transform duration-300 ${
                discovered.includes(1) ? 'scale-100' : 'scale-110 animate-bounce'
              }`}
            >
              🌻
            </span>
            {discovered.includes(1) && (
              <span className="absolute -top-1 -right-1 bg-emerald-500 rounded-full p-0.5 shadow-md">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
              </span>
            )}
            {!discovered.includes(1) && (
              <span className="absolute -bottom-1 px-1.5 py-0.5 text-[9px] font-bold bg-amber-400 text-slate-950 rounded-full shadow-md animate-pulse">
                Tócame
              </span>
            )}
          </div>
        </button>

        <button
          onClick={() => handleFlowerClick(flowers[1])}
          className="absolute top-16 left-6 w-16 h-16 rounded-full flex items-center justify-center cursor-pointer group active:scale-90 transition-transform duration-200"
          aria-label="Flor 2"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <span
              className={`text-4xl filter drop-shadow-[0_0_12px_rgba(250,204,21,0.8)] transition-transform duration-300 ${
                discovered.includes(2) ? 'scale-100' : 'scale-105 animate-pulse'
              }`}
            >
              🌼
            </span>
            {discovered.includes(2) && (
              <span className="absolute -top-1 -right-1 bg-emerald-500 rounded-full p-0.5 shadow-md">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
              </span>
            )}
          </div>
        </button>

        <button
          onClick={() => handleFlowerClick(flowers[2])}
          className="absolute top-16 right-6 w-16 h-16 rounded-full flex items-center justify-center cursor-pointer group active:scale-90 transition-transform duration-200"
          aria-label="Flor 3"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <span
              className={`text-4xl filter drop-shadow-[0_0_12px_rgba(250,204,21,0.8)] transition-transform duration-300 ${
                discovered.includes(3) ? 'scale-100' : 'scale-105 animate-pulse'
              }`}
            >
              🌻
            </span>
            {discovered.includes(3) && (
              <span className="absolute -top-1 -right-1 bg-emerald-500 rounded-full p-0.5 shadow-md">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
              </span>
            )}
          </div>
        </button>

        <button
          onClick={() => handleFlowerClick(flowers[3])}
          className="absolute top-32 left-2 w-14 h-14 rounded-full flex items-center justify-center cursor-pointer group active:scale-90 transition-transform duration-200"
          aria-label="Flor 4"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <span
              className={`text-3xl filter drop-shadow-[0_0_10px_rgba(250,204,21,0.7)] transition-transform duration-300 ${
                discovered.includes(4) ? 'scale-100' : 'scale-105'
              }`}
            >
              🌼
            </span>
            {discovered.includes(4) && (
              <span className="absolute -top-1 -right-1 bg-emerald-500 rounded-full p-0.5 shadow-md">
                <CheckCircle2 className="w-3 h-3 text-white" />
              </span>
            )}
          </div>
        </button>

        <button
          onClick={() => handleFlowerClick(flowers[4])}
          className="absolute top-32 right-2 w-14 h-14 rounded-full flex items-center justify-center cursor-pointer group active:scale-90 transition-transform duration-200"
          aria-label="Flor 5"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <span
              className={`text-3xl filter drop-shadow-[0_0_10px_rgba(250,204,21,0.7)] transition-transform duration-300 ${
                discovered.includes(5) ? 'scale-100' : 'scale-105'
              }`}
            >
              🌻
            </span>
            {discovered.includes(5) && (
              <span className="absolute -top-1 -right-1 bg-emerald-500 rounded-full p-0.5 shadow-md">
                <CheckCircle2 className="w-3 h-3 text-white" />
              </span>
            )}
          </div>
        </button>
      </div>

      <p className="text-xs text-amber-300/70 text-center italic mt-2">
        Toca las flores del ramo para leer cada motivo especial 💛
      </p>

      {/* Modal / Tarjeta */}
      {selectedFlower && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setSelectedFlower(null)}
        >
          <div
            className="relative w-full max-w-sm rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-[#151726] border border-amber-400/40 p-6 shadow-2xl shadow-amber-500/20 transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedFlower(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-800 text-amber-300/80 hover:text-amber-200 active:scale-90 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center text-center mb-4">
              <span className="text-5xl mb-2 filter drop-shadow-md">
                {selectedFlower.icon}
              </span>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-amber-400/90 mb-1">
                {selectedFlower.name}
              </span>
              <h3 className="text-xl font-bold font-serif text-amber-100">
                {selectedFlower.title}
              </h3>
            </div>

            <div className="bg-amber-500/10 rounded-2xl p-4 border border-amber-500/20 text-slate-200 text-sm leading-relaxed text-center font-normal">
              "{selectedFlower.message}"
            </div>

            <button
              onClick={() => setSelectedFlower(null)}
              className="w-full mt-5 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 font-semibold text-sm shadow-md active:scale-95 transition-all"
            >
              Guardar en el corazón ✨
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
