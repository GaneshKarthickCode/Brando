import React,  { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css';

const Dropdown = ({ title, children }) =>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);

    };

    return(
        <li className="nav-item dropdown">
            <button onClick={toggleDropdown} className="dropdown-toggle">
                {title}
            </button>
            {isOpen && <ul className="dropdown-menu">{children}</ul>}
        </li>
    );
};

export default Dropdown;