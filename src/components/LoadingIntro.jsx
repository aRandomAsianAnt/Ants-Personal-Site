// src/components/LoadingIntro.jsx
import './LoadingIntro.css';
import { useEffect, useState } from 'react';

export default function LoadingIntro() {
  const [phase, setPhase] = useState('covering'); // covering -> revealing -> done

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const alreadyShown = sessionStorage.getItem('introShown');

    if (reduceMotion || alreadyShown) {
      setPhase('done');
      return;
    }

    sessionStorage.setItem('introShown', 'true');

    // Timed to match the moment the X starts its "crack" expansion —
    // see the animation-timeline note below for why 1080ms specifically.
    const revealTimer = setTimeout(() => setPhase('revealing'), 1080);
    const doneTimer = setTimeout(() => setPhase('done'), 1700);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === 'done') return null;

  return (
    <div className={`loading-intro ${phase === 'revealing' ? 'revealing' : ''}`} aria-hidden="true" />
  );
}