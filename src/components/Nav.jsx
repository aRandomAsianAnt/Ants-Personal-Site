import AQ from '../assets/AQ_STROKE.png';
import './Nav.css';

const NAV_CLEARANCE = 40; // extra breathing room below the fixed floating nav

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function animatedScrollTo(targetY, duration = 700) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  let startTime;

  function step(timestamp) {
    if (startTime === undefined) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    window.scrollTo(0, startY + diff * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

function handleHashNavClick(event, href) {
  if (!href.startsWith('/#') || window.location.pathname !== '/') return;

  const target = document.getElementById(href.slice(2));
  if (!target) return;

  event.preventDefault();
  const navHeight = document.querySelector('.floating-nav')?.getBoundingClientRect().height ?? 0;
  const targetY = target.getBoundingClientRect().top + window.scrollY - navHeight - NAV_CLEARANCE;
  animatedScrollTo(Math.max(targetY, 0));
  window.history.pushState(null, '', href);
}

export default function Nav({ pages = [] }) {
  const mid = Math.ceil(pages.length / 2);
  const leftPages = pages.slice(0, mid);
  const rightPages = pages.slice(mid);

  return (
    <nav className="floating-nav" aria-label="Primary">
      <ul className="floating-nav__links">
        {leftPages.map((page) => (
          <li key={page.href}>
            <a href={page.href} onClick={(e) => handleHashNavClick(e, page.href)}>
              {page.label}
            </a>
          </li>
        ))}
      </ul>

      <a href="/" className="floating-nav__logo" aria-label="Home">
        <img src={AQ} alt="AQ" />
      </a>

      <ul className="floating-nav__links">
        {rightPages.map((page) => (
          <li key={page.href}>
            <a href={page.href} onClick={(e) => handleHashNavClick(e, page.href)}>
              {page.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
