import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Disc } from 'lucide-react';

interface MusicPlayerProps {
  autoPlayTrigger?: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ autoPlayTrigger }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  // Intentar reproducir cuando se abre el sobre o cuando el usuario interactúa
  useEffect(() => {
    if (autoPlayTrigger && audioRef.current && !isPlaying) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // El navegador móvil requirió un tap explícito
          setIsPlaying(false);
        });
    }
  }, [autoPlayTrigger]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.error("Error al reproducir:", err);
          setIsPlaying(false);
        });
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/cristina-instrumental.mp3"
        loop
        preload="auto"
      />

      {/* ESTADO 1: NO ESTÁ SONANDO -> Botón super llamativo, centrado y animado para que no se le pase */}
      {!isPlaying && (
        <div className="fixed top-4 inset-x-0 mx-auto z-50 flex justify-center px-4 pointer-events-none">
          <button
            onClick={togglePlay}
            className="pointer-events-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-2xl shadow-yellow-500/60 border-2 border-white animate-bounce cursor-pointer active:scale-95 transition-all"
            aria-label="Activar música de fondo"
          >
            <Volume2 className="w-4 h-4 text-slate-950 animate-pulse" />
            <span>👉 Toca aquí para poner la música 🎵</span>
          </button>
        </div>
      )}

      {/* ESTADO 2: YA ESTÁ SONANDO -> Se vuelve discreto, elegante y no molesta en la esquina */}
      {isPlaying && (
        <div className="fixed top-3 right-3 z-50">
          <div
            onClick={togglePlay}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/70 backdrop-blur-md border border-amber-500/25 text-amber-300/80 shadow-md cursor-pointer active:scale-95 transition-all duration-300"
          >
            <Disc
              className="w-3.5 h-3.5 text-amber-400 animate-spin"
              style={{ animationDuration: '4s' }}
            />
            <span className="text-[10px] font-medium tracking-wide text-amber-200/90">
              Cristina 🎵
            </span>

            <button
              onClick={toggleMute}
              className="p-1 rounded-full hover:bg-amber-500/20 text-amber-300/80 transition-colors ml-0.5"
              aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
            >
              {isMuted ? (
                <VolumeX className="w-3 h-3 text-amber-500/60" />
              ) : (
                <Volume2 className="w-3 h-3 text-amber-400" />
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
