import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../assets/Brando.svg';
import { useNavigate } from 'react-router-dom';
import Dropdown from './Dropdown';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img onClick={() => navigate("/")} src={logo} alt="Logo" />
            </div>
            <button className="navbar-toggle" onClick={toggleMenu}>
                ☰
            </button>
            <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
                <li className="dropdown">
                    <span className="dropdown-toggle" onClick={toggleDropdown}>What we do</span>
                    {dropdownOpen && (
                        <div className="dropdown-content">
                            <Dropdown title="Design">
                                <ScrollLink to="design-section" smooth={true} duration={500} onClick={toggleDropdown}>Design</ScrollLink>
                                <ScrollLink to="logo-section" smooth={true} duration={500} onClick={toggleDropdown}>Logo</ScrollLink>
                                <ScrollLink to="visitingcard-section" smooth={true} duration={500} onClick={toggleDropdown}>Visiting Card</ScrollLink>
                            </Dropdown>
                            <ScrollLink to="printing-section" smooth={true} duration={500} onClick={toggleDropdown}>Printing</ScrollLink>
                            <ScrollLink to="software-section" smooth={true} duration={500} onClick={toggleDropdown}>Software</ScrollLink>
                        </div>
                    )}
                </li>
                <li>
                    <ScrollLink to="about-section" smooth={true} duration={500} onClick={toggleMenu}>About</ScrollLink>
                </li>
                <li>
                    <ScrollLink to="contact-section" smooth={true} duration={500} onClick={toggleMenu}>Contact</ScrollLink>
                </li>
                <li>
                    <ScrollLink className="getintouch" to="getintouch-section" smooth={true} duration={500} onClick={toggleMenu}>Get in Touch</ScrollLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
