import { useState } from 'react';
import xIcon from '../assets/X_WHITE_TEXTURED.png';
import './FunXFact.css';

const FACTS = [
  "I've drawn and studied muscles and anatomy since 7th grade.",
  "Every image assets are designed by me!",
  "Visit my graphic design instagram @antq_graphics",
  "I'm a lefty full-western in tennis!",
  "I sometimes sleep to metal or EDM...",
  "Did I mention I design clothing and merchandise for university orgs and other affiliates",
  "All of the color accents and logos/shapes are my personal creative branding!",
  "My favorite game is Team Fortress 2",
  "X marks the spot...",
  ""
];

function pickFact(exclude) {
  if (FACTS.length === 1) return FACTS[0];
  let next;
  do {
    next = FACTS[Math.floor(Math.random() * FACTS.length)];
  } while (next === exclude);
  return next;
}

export default function FunXFact() {
  const [isOpen, setIsOpen] = useState(false);
  const [fact, setFact] = useState(() => pickFact());

  const reroll = () => setFact((current) => pickFact(current));

  return (
    <div
      className="fun-x-fact"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {isOpen && (
        <div className="fun-x-fact__bubble" role="status">
          {fact}
        </div>
      )}

      <button
        type="button"
        className="fun-x-fact__icon"
        onClick={() => {
          reroll();
          setIsOpen(true);
        }}
        aria-label="Show a random fact about me"
      >
        <img src={xIcon} alt="" />
      </button>
    </div>
  );
}
