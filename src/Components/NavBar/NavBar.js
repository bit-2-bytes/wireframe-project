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
      <span className="menu-icon" >&#9776;</span>

    </div>
  );
}

export default Navbar;