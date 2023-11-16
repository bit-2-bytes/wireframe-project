import { ReactComponent as FaceBook } from '../../assets/Vector.svg';
import { ReactComponent as Twitter } from '../../assets/Vector (1).svg';
import { ReactComponent as Instagram } from '../../assets/Subtract.svg';
import { ReactComponent as Tiktok } from '../../assets/Subtract (1).svg';
import NavElements from '../NavBar/NavElements/NavElements'
import './Footer.scss'

function Footer() {
  return (
    <div className='footer-container'>
       <NavElements/>
       <div className='footer-line'></div>
       <div className='footer-logo-container'>
        <div className='footer-icons'><FaceBook/></div>
        <div className='footer-icons'><Twitter/></div>
        <div className='footer-icons'><Instagram/></div>
        <div className='footer-icons'><Tiktok/></div>
       </div>
       <span className='footer-logo'>© Logo, Inc.</span>
    </div>
  )
}

export default Footer