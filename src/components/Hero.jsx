import logo from '../assets/X_WHITE.png';
import raysImage from '../assets/purple_shape_fx.png';
import background from '../assets/antPurpleBG_convertedJPG.jpg';
import MagicRings from '../effects/MagicRing.jsx';
import './Hero.css';

export default function Hero() {
 

  return (
    <div className="heroSection">
        <img src={background} alt="purple background" className="heroBackground"/>
        <div className="heroFade" aria-hidden="true" />
        <div className="heroVisuals">
            <img src={raysImage} alt="purple rays" className="heroRays"/>
            <MagicRings
            color="rgb(140, 82, 254)"
            colorTwo="rgb(229, 174, 254)"
            ringCount={6}
            speed={1.5}
            attenuation={20}
            lineThickness={2.5}
            baseRadius={0.3}
            radiusStep={0.08}
            opacity={0.65}
            blur={2}
            noiseAmount={0.05}
            />
            <img src={logo} alt="" className="heroLogo" />
        </div>



      
    </div>
  );
}