import { ReactComponent as Logo } from '../../assets/logo.svg';
import './NavBar.scss';
import NavElements from './NavElements/NavElements';

function Navbar() {
  return (
    <div className="Navbar">
      <div className='logo-container'>
      <Logo />
      <span className="navbar-logo">LOGO</span>
       </div>

      <NavElements/>

    </div>
  );
}

export default Navbar;