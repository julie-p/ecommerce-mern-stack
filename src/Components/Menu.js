import React, { useState } from 'react';
import "../styles/Menu.css";
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

function Menu() {

    const [ isOpen, setIsOpen] = useState(false);

    let menuToggler = "menu__toggler";
    let topNav = "menu__topNav";
    switch (isOpen) {
        case true :
        menuToggler += " open";
        topNav += " open";
        break;
        default :
        menuToggler = "menu__toggler";
        topNav = "menu__topNav";
        break;
    };

    let location = useLocation();

    let activeHome = "menu__navLink";
    let activeShop = "menu__navLink";
    let activeSales = "menu__navLink";
    switch (location.pathname) {
        case '/':
            activeHome += " active";
            break;
        case '/shop':
            activeShop += " active";
            break;
        case '/sales':
            activeSales += " active";
            break;
        default :
            activeHome = "menu__navLink active";
            break;
    };

    return (
        <div>

            <div className={menuToggler} isOpen={isOpen} onClick={()=> setIsOpen(!isOpen)}>
                <div className="bar half start"></div>
                <div className="bar"></div>
                <div className="bar half end"></div>
            </div>

            <nav className={topNav}>
                <ul className="menu__navList">
                    <li>
                        <Link to="/" className={activeHome}>Home</Link>
                    </li>
                    <li>
                        <Link to="/shop" className={activeShop}>Shop</Link>
                    </li>
                    <li>
                        <Link to="/sales" className={activeSales}>Sales</Link>
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
