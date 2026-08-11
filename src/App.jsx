//----ASSETS
import logo from './assets/X_WHITE.png';
import AQ from './assets/AQ_STROKE.png';
import purpShape from './assets/purple_shape_fx.png';
import bgImage from './assets/antPurpleBG.png'

//----COMPONENTS
import Button from './components/Button';
import WorldSection from './components/WorldSection';
import LoadingIntro from './components/LoadingIntro';

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
      <WorldSection id="hero" label="Hero Section">

      </WorldSection>

      {/*----SHOWCASE PANELS: Illustrations or images----*/}
      <WorldSection id="showcase" label="Showcase Section" variant="showcase">
        <div className="showcaseGrid">
          <div className="showcaseItem" />
          <div className="showcaseItem" />
          <div className="showcaseItem" />
        </div>
      </WorldSection>

      {/*----ABOUT ME: Brief introduction----*/}
      <WorldSection id="about" label="About Section" variant="default">
        
      </WorldSection>

      {/*----Technicals: Tech stack and projects----*/}
      <WorldSection id="technicals" label="Technicals Section" variant="default">
        
      </WorldSection>
    </>
  );
}