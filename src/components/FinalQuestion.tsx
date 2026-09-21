import React, { useState } from 'react';
import { Sparkles, Sun, Smile, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FinalQuestionProps {
  onReset: () => void;
}

export const FinalQuestion: React.FC<FinalQuestionProps> = ({ onReset }) => {
  const [accepted, setAccepted] = useState<boolean>(false);
  const [shyClicks, setShyClicks] = useState<number>(0);

  const handleAccept = () => {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate([100, 50, 100, 50, 150]);
    }

    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#fde047', '#facc15', '#f59e0b', '#fbbf24', '#ffffff'],
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#fde047', '#facc15', '#f59e0b', '#fbbf24', '#ffffff'],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();

    setAccepted(true);
  };

  const handleShyClick = () => {
    setShyClicks((prev) => prev + 1);
  };

  const shyPhrases = [
    '¿Segura? 🤭',
    '¡Piénsalo bien! 😉',
    'No hay vuelta atrás ✨',
    '¡Mejor presiona el amarillo! 🌻',
  ];

  return (
    <div className="w-full max-w-sm mx-auto my-6 px-4 text-center">
      {!accepted ? (
        <div className="bg-slate-900/80 backdrop-blur-xl border border-amber-400/40 rounded-3xl p-6 shadow-2xl shadow-amber-500/10 transition-all duration-500">
          <div className="inline-flex p-3 rounded-full bg-amber-400/10 text-amber-400 mb-3 animate-bounce">
            <Sun className="w-8 h-8 text-amber-400" />
          </div>

          <h3 className="text-xl font-bold font-serif text-amber-100 mb-2">
            Una última pregunta...
          </h3>

          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            ¿Aceptas estas flores amarillas digitales y prometes que siempre
            recordarás lo increíble y especial que eres? 🌻
          </p>

          <div className="flex flex-col gap-3">
            {/* Botón principal exigido */}
            <button
              onClick={handleAccept}
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-yellow-400 via-amber-300 to-amber-400 text-slate-950 font-bold text-base shadow-lg shadow-amber-400/30 hover:shadow-amber-400/50 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <span>Obvio que sí 💛</span>
              <Sparkles className="w-5 h-5 text-slate-950" />
            </button>

            {/* Botón juguetón */}
            <button
              onClick={handleShyClick}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-medium text-amber-300/60 hover:text-amber-300 transition-colors"
            >
              {shyPhrases[shyClicks % shyPhrases.length]}
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-amber-950/40 backdrop-blur-xl border border-amber-400/50 rounded-3xl p-6 shadow-2xl shadow-amber-500/30 animate-in fade-in zoom-in duration-500">
          <div className="text-5xl mb-3 animate-pulse">🌻💛✨</div>

          <span className="text-[11px] font-bold tracking-widest text-amber-400 uppercase">
            Promesa Aceptada
          </span>

          <h3 className="text-2xl font-bold font-serif text-amber-100 mt-1 mb-3">
            ¡Sabía que dirías que sí!
          </h3>

          <p className="text-slate-200 text-sm leading-relaxed mb-4">
            Gracias por ser esa persona que siempre cree en mí, que me apoya en todo y que
            llena mis días de cosas bonitas. Eres alguien sumamente importante en mi vida
            y siempre voy a estar aquí para ti.
          </p>

          <div className="p-3.5 bg-amber-400/10 border border-amber-400/20 rounded-2xl text-amber-200 font-serif italic text-sm mb-6">
            "Que nunca te falten razones para sonreír y que la vida te devuelva
            multiplicado todo lo hermoso que entregas."
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-amber-400 font-semibold mb-4">
            <Smile className="w-4 h-4" />
            <span>¡Feliz 21 de Septiembre, Annita hermosa! 💛</span>
          </div>

          <button
            onClick={onReset}
            className="inline-flex items-center gap-1.5 text-xs text-amber-300/70 hover:text-amber-200 py-1.5 px-3 rounded-full bg-slate-800/80 active:scale-90 transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Volver a ver el detalle</span>
          </button>
        </div>
      )}
    </div>
  );
};
