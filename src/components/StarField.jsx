// src/components/StarField.jsx
import { useEffect, useRef } from 'react';
import './StarField.css';

const STAR_COUNT_DIVISOR = 9000; // lower = more stars

export default function StarField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width, height, dpr, stars, raf;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // NOTE: deliberately NOT regenerating the star array here.
      // Count stays fixed forever — only respawnStar() ever moves one,
      // and only when its own lifecycle ends. This is what keeps
      // memory bounded no matter how many times you resize.
    }

    function respawnStar(star, now) {
      star.x = Math.random() * width;
      star.y = Math.random() * height;
      star.r = Math.random() * 1.4 + 0.3;
      star.born = now;
      star.lifespan = 3000 + Math.random() * 5000; // 3–8s per star, staggered
      return star;
    }

    function makeStars() {
      const count = Math.max(1, Math.round((width * height) / STAR_COUNT_DIVISOR));
      const now = performance.now();
      stars = Array.from({ length: count }, () => {
        const star = {};
        respawnStar(star, now);
        // stagger initial "born" times so stars don't all fade in sync
        star.born = now - Math.random() * star.lifespan;
        return star;
      });
    }

    resize();
    makeStars(); // built once, count never changes after this
    window.addEventListener('resize', resize);

    function draw(now) {
      ctx.clearRect(0, 0, width, height);

      for (const star of stars) {
        const age = (now - star.born) / star.lifespan;

        if (age >= 1) {
          respawnStar(star, now);
          continue; // skip drawing this frame, it'll draw next frame at opacity 0
        }

        // sin(age * PI) gives a smooth 0 → 1 → 0 curve across the star's
        // full lifespan: fades in, peaks at the midpoint, fades back out.
        const opacity = Math.sin(age * Math.PI);

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(140, 82, 254, ${opacity * 0.75})`;
        ctx.fill();
      }

      if (!reduceMotion) raf = requestAnimationFrame(draw);
    }

    if (reduceMotion) {
      draw(performance.now());
    } else {
      raf = requestAnimationFrame(draw);
    }

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="star-field" aria-hidden="true" />;
}