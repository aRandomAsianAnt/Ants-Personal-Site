//----ASSETS
import logo from './assets/X_WHITE.png';
import AQ from './assets/AQ_STROKE.png';
import purpShape from './assets/purple_shape_fx.png';
import bgImage from './assets/antPurpleBG.png'

//----COMPONENTS
import Button from './components/Button';
import './components/Button.css';
import Section from './components/Section';

//----PAGE LINKS VIA REACT ROUTER
const pages = [
  { label: 'Academics', href: '/academics' },
  { label: 'Education', href: '/education' },
  { label: 'Resume', href: '/resume' },
  { label: 'Hobbies', href: '/hobbies' },
  { label: 'Graphics', href: '/design' },
  { label: 'Projects', href: '/projects' },
];

export default function App() {
  return (
    <>
    <div className="site-bg" aria-hidden="true" style={{ backgroundImage: `url(${bgImage})` }} />
    <header className="site-content">
      <header className="site-header">
        <nav className="nav" aria-label="Primary">
          <div className="nav-buttons nav-buttons-left">
            {pages.slice(0, Math.ceil(pages.length / 2)).map((p) => (
              <Button key={p.href} href={p.href}>{p.label}</Button>
            ))}
          </div>

          <img src={AQ} alt="Antony Quach" className="nav-logo" />

          <div className="nav-buttons nav-buttons-right">
            {pages.slice(Math.ceil(pages.length / 2)).map((p) => (
              <Button key={p.href} href={p.href}>{p.label}</Button>
            ))}
          </div>
        </nav>
      </header>

      <main id="main">
        <Section id="start" label="Introduction">
          <div className="start-inner">
            <div className="intro-stack">
              <img src={purpShape} alt="" className="intro-layer purpleRay" />
              <img src={logo} alt="" className="intro-layer start-logo" />
            </div>
            <h1 className="start-title">Antony Quach</h1>
            <p className="start-tagline">Greetings, visitors...</p>
          </div>
        </Section>

        <Section id="showcase" label="Portfolio highlights" variant="void">
          <div className="showcase-grid">
            <div className="showcase-item">1</div>
            <div className="showcase-item">2</div>
            <div className="showcase-item">3</div>
          </div>
        </Section>

        <Section id="about-preview" label="About">
          <h2 className="section-title">About</h2>
          <p className="section-body">Placeholder — short intro/teaser, link to full About page.</p>
        </Section>

        <Section id="design-preview" label="Graphic design highlights" variant="void">
          <h2 className="section-title">Design work</h2>
          <p className="section-body">Placeholder — merch/graphic design showcase preview.</p>
        </Section>

        <Section id="hobbies-preview" label="Hobbies">
          <h2 className="section-title">Outside of code</h2>
          <p className="section-body">Placeholder — hobbies teaser.</p>
        </Section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="footer-inner">
          <p>Contact placeholder</p>
        </div>
      </footer>
    </header>
    </>
  );
}