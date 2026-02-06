import React, { useEffect, useRef, useCallback } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  alpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  trail: { x: number; y: number }[];
}

const StarField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const starsRef = useRef<Star[]>([]);
  const shootingStarsRef = useRef<ShootingStar[]>([]);

  const createStars = useCallback((width: number, height: number) => {
    const stars: Star[] = [];
    const numStars = Math.min(250, Math.floor((width * height) / 8000));

    for (let i = 0; i < numStars; i++) {
      const layer = Math.random();
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: layer < 0.6 ? Math.random() * 0.8 + 0.2 : layer < 0.9 ? Math.random() * 1.2 + 0.8 : Math.random() * 2 + 1.5,
        vx: (Math.random() - 0.5) * 0.15 * (layer + 0.5),
        vy: (Math.random() - 0.5) * 0.15 * (layer + 0.5),
        alpha: Math.random() * 0.5 + 0.3,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2,
      });
    }
    return stars;
  }, []);

  const createShootingStar = useCallback((width: number, height: number): ShootingStar => {
    return {
      x: Math.random() * width,
      y: Math.random() * height * 0.5,
      length: Math.random() * 80 + 40,
      speed: Math.random() * 8 + 6,
      opacity: 1,
      trail: [],
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    starsRef.current = createStars(width, height);
    shootingStarsRef.current = [];

    let lastShootingStarTime = 0;

    const animate = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // Draw stars with twinkling effect
      starsRef.current.forEach((star) => {
        star.x += star.vx;
        star.y += star.vy;
        star.twinklePhase += star.twinkleSpeed;

        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        const twinkle = Math.sin(star.twinklePhase) * 0.3 + 0.7;
        const currentAlpha = star.alpha * twinkle;

        // Glow effect for larger stars
        if (star.radius > 1.2) {
          const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.radius * 3);
          gradient.addColorStop(0, `rgba(200, 220, 255, ${currentAlpha * 0.5})`);
          gradient.addColorStop(0.5, `rgba(150, 180, 255, ${currentAlpha * 0.2})`);
          gradient.addColorStop(1, 'transparent');
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 3, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha})`;
        ctx.fill();
      });

      // Occasional shooting stars
      if (time - lastShootingStarTime > 4000 + Math.random() * 6000) {
        if (shootingStarsRef.current.length < 2) {
          shootingStarsRef.current.push(createShootingStar(width, height));
          lastShootingStarTime = time;
        }
      }

      // Draw and update shooting stars
      shootingStarsRef.current = shootingStarsRef.current.filter((ss) => {
        ss.x += ss.speed;
        ss.y += ss.speed * 0.6;
        ss.opacity -= 0.015;

        if (ss.opacity <= 0 || ss.x > width || ss.y > height) {
          return false;
        }

        // Draw shooting star trail
        const gradient = ctx.createLinearGradient(
          ss.x - ss.length,
          ss.y - ss.length * 0.6,
          ss.x,
          ss.y
        );
        gradient.addColorStop(0, 'transparent');
        gradient.addColorStop(0.7, `rgba(150, 200, 255, ${ss.opacity * 0.3})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, ${ss.opacity})`);

        ctx.beginPath();
        ctx.moveTo(ss.x - ss.length, ss.y - ss.length * 0.6);
        ctx.lineTo(ss.x, ss.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();

        return true;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      starsRef.current = createStars(width, height);
    };

    window.addEventListener('resize', handleResize);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [createStars, createShootingStar]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
};

export default StarField;