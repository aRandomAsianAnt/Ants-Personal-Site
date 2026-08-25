//----COMPONENTS
import Button from './components/Button';
import WorldSection from './components/WorldSection';
import LoadingIntro from './components/LoadingIntro';
import Hero from './components/Hero';

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
      {/*----LOADING SCENE: Cinematic reveal effect----*/}
      <LoadingIntro/>

      {/*----Hero section: Logo, tagline, first impressions----*/}
      
      <Hero/>
      

      {/*----SHOWCASE PANELS: Illustrations or images----*/}


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
            /* image={someImage} */
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
          <WorldSection
            id="contacts"
            label="Contact Section"
            variant="void"
            heading="Contact Me"
            body="Feel free to connect or reach out to me on these platforms!"
            /* image={someImage} */
            imageAlt="Project preview"
          />
        </div>
      </div>
    </>
  );
}