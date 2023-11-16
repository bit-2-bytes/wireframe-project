import { ReactComponent as Logo } from '../../assets/logo-hero.svg';
import { ReactComponent as Line } from '../../assets/Vector-4.svg';
import './Hero.scss';

function Hero() {
  return (
    <div className='hero-container'>
      <div className='logo-container'>
        <Logo />
        <span className="hero-logo"> LOGO</span>
      </div>
      <div className='hero-body-container'>
      <div className='hero-desc-blue'>Lorem ipsum dolor sit amet</div>

      <div className='hero-desc-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      </div>

      <div className='arrow-container'>
        <span className='scroll-text'>Scroll</span>
        <Line/>
      </div>
    </div>
  )
}

export default Hero