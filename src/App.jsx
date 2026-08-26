import { useEffect, useState } from 'react';

//----COMPONENTS
import Button from './components/Button';
import WorldSection from './components/WorldSection';
import LoadingIntro from './components/LoadingIntro';
import Hero from './components/Hero';
import Nav from './components/Nav';
import FunXFact from './components/FunXFact';
import Contact from './components/Contact';

//----PAGE LINKS VIA REACT ROUTER
const pages = [
  { label: 'Academics', href: '/academics' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Hobbies', href: '/hobbies' },
  { label: 'Graphics', href: '/design' },
  { label: 'Contact', href: '/#contacts' },
];

//----ASSETS
import me from './assets/me.jpg';

export default function App() {
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/*----LOADING X-Screen----*/}
      <LoadingIntro onComplete={() => setIntroDone(true)} />

      {/*----FLOATING NAV: hidden until the intro finishes----*/}
      {introDone && <Nav pages={pages} />}
      {introDone && <FunXFact />}

      {/*----Hero section: Logo, tagline, first impressions----*/}
      <Hero/>

      {/*----AURA: ambient nebula glow behind the void sections----*/}
      <div className="aura-bg">
        <div className="aura-layer-1" aria-hidden="true" />
        <div className="aura-layer-2" aria-hidden="true" />
        <div className="aura-layer-3" aria-hidden="true" />
        <div className="aura-layer-4" aria-hidden="true" />
        <div className="aura-layer-5" aria-hidden="true" />
        <div className="aura-layer-6" aria-hidden="true" />
        <div className="aura-grain" aria-hidden="true" />
        <div className="aura-fade-top" aria-hidden="true" />
        <div className="aura-content">
          {/*----ABOUT ME: Brief introduction----*/}
          <WorldSection
            id="aboutme"
            label="About me"
            variant="void"
            heading="About Me"
            body="I am a Computer Engineering Student at Texas A&M University"
            image={me.jpg}
            imageAlt="Project preview"
          />

          {/*----Technicals: Tech stack and projects----*/}
          <WorldSection
            id="technicals"
            label="Technicals Section"
            variant="void"
            heading="Technologies, Skills, Projects"
            body="6 7"
            /* image={someImage} */
            imageAlt="Project preview"
          />

          {/*----Contacts: LinkedIn, Gmail, etc----*/}
          <WorldSection id="contacts" label="Contact Section" variant="void">
            <div className="sectionPlaceholderText">
              <h2 className="section-title">Contact Me</h2>
              <p className="section-body">
                Feel free to connect or reach out to me on these platforms!
              </p>
            </div>
            <Contact />
          </WorldSection>
        </div>
      </div>
    </>
  );
}