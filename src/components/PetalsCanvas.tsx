import React, { useEffect, useRef } from 'react';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  color: string;
}

interface Sparkle {
  x: number;
  y: number;
  size: number;
  alpha: number;
  alphaSpeed: number;
}

export const PetalsCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Paleta de amarillos y dorados suaves
    const colors = ['#fde047', '#facc15', '#eab308', '#fef08a', '#fbbf24'];

    // Inicializar pétalos
    const petalCount = Math.min(Math.floor(window.innerWidth / 15), 35);
    const petals: Petal[] = [];

    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 8 + 8,
        speedY: Math.random() * 1.2 + 0.8,
        speedX: Math.random() * 0.8 - 0.4,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.03,
        opacity: Math.random() * 0.4 + 0.4,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Luciérnagas / chispas doradas flotantes
    const sparkles: Sparkle[] = [];
    for (let i = 0; i < 20; i++) {
      sparkles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1,
        alpha: Math.random(),
        alphaSpeed: Math.random() * 0.02 + 0.01,
      });
    }

    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;

      ctx.beginPath();
      // Forma ovalada estilizada de pétalo
      ctx.moveTo(0, 0);
      ctx.quadraticCurveTo(p.size * 0.6, -p.size * 0.8, 0, -p.size * 1.4);
      ctx.quadraticCurveTo(-p.size * 0.6, -p.size * 0.8, 0, 0);
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Dibujar y actualizar chispas doradas
      sparkles.forEach((s) => {
        s.alpha += s.alphaSpeed;
        if (s.alpha > 1 || s.alpha < 0) s.alphaSpeed = -s.alphaSpeed;

        ctx.save();
        ctx.globalAlpha = Math.max(0, Math.min(1, s.alpha * 0.7));
        ctx.fillStyle = '#fef08a';
        ctx.shadowColor = '#facc15';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        s.y -= 0.3;
        if (s.y < 0) s.y = height;
      });

      // Dibujar y actualizar pétalos
      petals.forEach((p) => {
        drawPetal(p);

        p.y += p.speedY;
        p.x += Math.sin(p.y * 0.02) * 0.8 + p.speedX;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
};
