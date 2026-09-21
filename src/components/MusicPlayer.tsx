import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Disc } from 'lucide-react';

interface MusicPlayerProps {
  autoPlayTrigger?: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ autoPlayTrigger }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  useEffect(() => {
    if (autoPlayTrigger && audioRef.current && !isPlaying) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Si el navegador móvil bloquea autoplay, se reproducirá en el siguiente click
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
        .catch(console.error);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <audio
        ref={audioRef}
        src="/audio/cristina-instrumental.mp3"
        loop
        preload="auto"
      />

      <div
        onClick={togglePlay}
        className="flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-amber-500/30 text-amber-300 shadow-lg shadow-amber-500/10 cursor-pointer active:scale-95 transition-all duration-300"
      >
        <div className="relative flex items-center justify-center">
          <Disc
            className={`w-4 h-4 text-amber-400 ${
              isPlaying ? 'animate-spin' : ''
            }`}
            style={{ animationDuration: '4s' }}
          />
          {isPlaying && (
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          )}
        </div>

        <div className="flex flex-col text-left">
          <span className="text-[11px] font-semibold tracking-wide text-amber-200">
            Cristina
          </span>
          <span className="text-[9px] text-amber-400/80 -mt-0.5">
            {isPlaying ? 'Sonando 🎵' : 'Pausado'}
          </span>
        </div>

        <button
          onClick={toggleMute}
          className="p-1 rounded-full hover:bg-amber-500/20 text-amber-300/80 transition-colors ml-1"
          aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
        >
          {isMuted ? (
            <VolumeX className="w-3.5 h-3.5 text-amber-500/60" />
          ) : (
            <Volume2 className="w-3.5 h-3.5 text-amber-400" />
          )}
        </button>
      </div>
    </div>
  );
};
