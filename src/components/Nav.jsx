import AQ from '../assets/AQ_STROKE.png';
import './Nav.css';

export default function Nav({ pages = [] }) {
  const mid = Math.ceil(pages.length / 2);
  const leftPages = pages.slice(0, mid);
  const rightPages = pages.slice(mid);

  return (
    <nav className="floating-nav" aria-label="Primary">
      <ul className="floating-nav__links">
        {leftPages.map((page) => (
          <li key={page.href}>
            <a href={page.href}>{page.label}</a>
          </li>
        ))}
      </ul>

      <a href="/" className="floating-nav__logo" aria-label="Home">
        <img src={AQ} alt="AQ" />
      </a>

      <ul className="floating-nav__links">
        {rightPages.map((page) => (
          <li key={page.href}>
            <a href={page.href}>{page.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
