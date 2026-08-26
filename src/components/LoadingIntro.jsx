import logo from '../assets/X_WHITE.png';

import { useEffect, useRef, useState } from "react";
import "./LoadingIntro.css";

const INTRO_DURATION = 1000;
const REDUCED_MOTION_DURATION = 1500;

export default function LoadingIntro({ onComplete = () => {} }) {
  const [isExiting, setIsExiting] = useState(false);
  const completed = useRef(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = prefersReducedMotion ? REDUCED_MOTION_DURATION : INTRO_DURATION;
    const timer = window.setTimeout(() => setIsExiting(true), duration);
    return () => window.clearTimeout(timer);
  }, []);

  const finish = () => {
    if (completed.current) return;
    completed.current = true;
    onComplete();
  };

  return (
    <section
      className={`loading-intro${isExiting ? " loading-intro--exit" : ""}`}
      aria-label="Loading portfolio"
      onAnimationEnd={(event) => {
        if (isExiting && event.target === event.currentTarget) finish();
      }}
    >
      <div className="logo-shell">
        <div className="logo-glow" />
        <img src={logo} alt="" className="intro-logo" />
      </div>
    </section>
  );
}
