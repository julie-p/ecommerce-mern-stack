import React, { useState } from 'react';
import "../styles/Menu.css";
import { Link } from 'react-router-dom';

function Menu() {

    const [ isOpen, setIsOpen] = useState(false);

    let menuToggler = "menu__toggler";
    let topNav = "menu__topNav";
    switch (isOpen) {
        case true:
        menuToggler += " open";
        topNav += " open";
        break;
        default :
        menuToggler = "menu__toggler";
        topNav = "menu__topNav";
        break;
    };

    return (
        <div>
            <div className={menuToggler} isOpen={isOpen} onClick={()=>setIsOpen(!isOpen)}>
            <div className="bar half start"></div>
            <div className="bar"></div>
            <div className="bar half end"></div>
            </div>

            <nav className={topNav}>
                <ul className="menu__navList">
                    <li>
                        <Link to="/" className="menu__navLink">Home</Link>
                    </li>
                    <li>
                        <Link to="/shop" className="menu__navLink">Shop</Link>
                    </li>
                    <li>
                        <Link className="menu__navLink">Sales</Link>
                    </li>
                    <li>
                        <Link className="menu__navLink">About</Link>
                    </li>
                    <li>
                        <Link className="menu__navLink">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default Menu;
