import './Header.css';
import profile from '../Assets/icons/profile.png'
import BurgerIcon from './Burger';
import { useState } from 'react';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="Header">
            <div className="ScrollY"></div>
            <div className="content">
                <div className="Profile">
                    <img src={profile} alt="profile" />
                </div>
                <div className="options">
                    <a className="Resume" href="#My resume"><span>Voir </span>Mon CV</a>
                    <div className="Nav">
                        {/* <Burger className="Burger" /> */}
                        <BurgerIcon className={`${isOpen ? 'active' : ''} Burger`} onClick={toggleMenu} />
                        <a href="#Skills" className={`${isOpen ? 'active' : ''} Menu skills`}>Skills </a>
                        <a href="#Journey" className={`${isOpen ? 'active' : ''} Menu LifeJourney`}>Life journey </a>
                        <a href="#Home" className={`${isOpen ? 'active' : ''} Menu home`}>Home</a>
                        <a href="#Projects" className={`${isOpen ? 'active' : ''} Menu projects`}>Projects </a>
                        <a href="#Services" className={`${isOpen ? 'active' : ''} Menu services`}>Services </a>
                        <a href="#About" className={`${isOpen ? 'active' : ''} Menu about`}>About</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;