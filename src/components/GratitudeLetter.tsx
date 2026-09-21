import React from 'react';
import { Flower2 } from 'lucide-react';

export const GratitudeLetter: React.FC = () => {
  return (
    <div className="w-full max-w-sm mx-auto my-6 px-4">
      <div className="relative rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-[#131722]/90 backdrop-blur-md border border-amber-400/30 p-6 shadow-2xl shadow-amber-500/10">
        {/* Adorno superior sutil */}
        <div className="flex justify-between items-center mb-4 border-b border-amber-500/20 pb-3">
          <div className="flex items-center gap-1.5 text-amber-400">
            <Flower2 className="w-4 h-4" />
            <span className="text-[10px] font-bold tracking-widest uppercase">
              21 de Septiembre
            </span>
          </div>
          <span className="text-xs text-amber-400/70 italic font-serif">
            Flores Amarillas
          </span>
        </div>

        {/* Encabezado */}
        <div className="text-left mb-4">
          <h2 className="text-2xl font-bold font-serif text-amber-100 flex items-center gap-2">
            <span>Para ti, Annita</span>
            <span className="text-amber-400 text-lg">🌻</span>
          </h2>
          <p className="text-xs text-amber-400/80 mt-0.5">
            De alguien que jamás olvidará tu apoyo.
          </p>
        </div>

        {/* Cuerpo del mensaje */}
        <div className="text-slate-300 text-sm leading-relaxed space-y-3.5 text-left font-normal">
          <p>
            Hoy es el día en que se regalan flores amarillas para desear luz,
            alegría y recordar a quienes iluminan nuestros días con su simple
            presencia.
          </p>

          <p>
            No quería que pasara esta fecha sin hacerte llegar este pequeño
            detalle para recordarte lo <strong className="text-amber-200 font-semibold">inmensamente especial e importante</strong> que
            eres para mí.
          </p>

          <p>
            Aunque el tiempo avance y hoy tengamos caminos distintos, hay cosas
            que no cambian: mi admiración, mi respeto y sobre todo mi
            agradecimiento sincero. Siempre estuviste ahí para mí, creíste en mis
            proyectos y me diste tu mano cuando más lo necesité.
          </p>

          <p>
            Gracias por todo lo que compartimos, por cada risa, por cada consejo
            y por el gran corazón que tienes. Eres una mujer maravillosa que
            merece que todos sus sueños se hagan realidad.
          </p>

          <div className="p-3 bg-amber-500/10 border-l-2 border-amber-400 rounded-r-xl text-amber-200/90 text-xs italic font-serif my-2">
            "Estas flores amarillas digitales nunca se van a marchitar, igual
            que mi gratitud y mi aprecio eterno hacia ti."
          </div>
        </div>

        {/* Firma cálida */}
        <div className="mt-5 pt-3 border-t border-amber-500/20 text-right">
          <span className="text-sm font-serif italic text-amber-200">
            Con mucho cariño y agradecimiento,
          </span>
          <p className="text-xs text-amber-400 font-medium mt-0.5">
            Siempre aquí para ti 💛
          </p>
        </div>
      </div>
    </div>
  );
};
