import React, { useState } from 'react';
import { PetalsCanvas } from './components/PetalsCanvas';
import { MusicPlayer } from './components/MusicPlayer';
import { OpeningEnvelope } from './components/OpeningEnvelope';
import { InteractiveBouquet } from './components/InteractiveBouquet';
import { GratitudeLetter } from './components/GratitudeLetter';
import { FinalQuestion } from './components/FinalQuestion';
import { Sun, ChevronDown } from 'lucide-react';

export const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [, setAllFlowersDiscovered] = useState(false);

  const handleOpenEnvelope = () => {
    setIsOpen(true);
  };

  const handleReset = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#0c0d14] text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950 pb-16">
      {/* Fondo de pétalos interactivo */}
      <PetalsCanvas />

      {/* Pantalla de inicio con sobre interactivo */}
      {!isOpen && <OpeningEnvelope onOpen={handleOpenEnvelope} />}

      {/* Reproductor de música flotante */}
      <MusicPlayer autoPlayTrigger={isOpen} />

      {/* Contenido principal móvil */}
      <main className="relative z-10 max-w-md mx-auto px-4 pt-16 flex flex-col items-center">
        {/* Encabezado Principal */}
        <header className="text-center mb-6 animate-fade-in">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 text-xs font-semibold border border-amber-400/20 mb-2.5">
            <Sun className="w-3.5 h-3.5 text-amber-400" />
            <span>21 de Septiembre</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-amber-100 flex items-center justify-center gap-2">
            <span>Para ti, Annita</span>
            <span className="text-amber-400 text-2xl animate-pulse">🌻</span>
          </h1>
          <p className="text-xs text-amber-300/80 mt-1.5 max-w-xs mx-auto">
            Porque las flores amarillas son para las personas que iluminan la
            vida con su presencia.
          </p>
        </header>

        {/* Sección 1: Ramo de Flores Interactivo */}
        <section className="w-full">
          <InteractiveBouquet
            onAllDiscovered={() => setAllFlowersDiscovered(true)}
          />
        </section>

        {/* Indicador de scroll */}
        <div className="my-4 text-amber-300/60 flex flex-col items-center gap-1 animate-bounce">
          <span className="text-[10px] uppercase tracking-widest font-semibold">
            Desliza hacia abajo
          </span>
          <ChevronDown className="w-4 h-4" />
        </div>

        {/* Sección 2: Carta / Mensaje Sincero de Gratitud */}
        <section className="w-full">
          <GratitudeLetter />
        </section>

        {/* Sección 3: Pregunta Final */}
        <section className="w-full">
          <FinalQuestion onReset={handleReset} />
        </section>

        {/* Pie de página tierno */}
        <footer className="mt-8 text-center text-[11px] text-amber-300/60 font-light">
          <p>Hecho con mucho cariño y gratitud para ti, Annita 💛</p>
          <p className="text-[9px] text-slate-500 mt-1">
            21 de Septiembre · Día de las Flores Amarillas
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;
