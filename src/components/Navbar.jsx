import './Navbar.css';

import BtnLogin from './ui/BtnLogin';
import Square from './ui/Square';

const Navbar = () => {
    return (
        <nav className="navbar container">
            <div className="logo">
                <h1 className="logo__title"><a href="#">EX</a></h1>
            </div>
            <input type="checkbox" className="toggle__menu"/>
            <div className="ham__menu"></div>
            <ul className="links">
                <li><a href="#hero" className="links__link active">HOME</a></li>
                <li><a href="#about" className="links__link">ABOUT</a></li>
                <li><a href="#courses" className="links__link">COURSES</a></li>
                <li><a href="#blog" className="links__link">BLOG</a></li>
                <li className="links__login"><a href="#" className="links__link">SIGN IN</a></li>
            </ul>
            <div className="login">
                <BtnLogin />
            </div>
        </nav>
    )
}

export default Navbar;