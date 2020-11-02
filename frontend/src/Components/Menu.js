import React, { useState } from 'react';
import "../styles/Menu.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

function Menu() {

    const [ isOpen, setIsOpen] = useState(false);

    let menuBtn = "menu-btn";
    let topNav = "menu__topNav";
    switch (isOpen) {
        case true :
            menuBtn += " open";
        topNav += " open";
        break;
        default :
        menuBtn = "menu-btn";
        topNav = "menu__topNav";
        break;
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    };

    return (
        <div className="menu">

            <div className={menuBtn} isOpen={isOpen} onClick={()=> toggleMenu()}>
                <div className="menu-btn__burger"></div>
            </div>

                <Link to="/cart" className="menu__icon">
                    <FontAwesomeIcon icon={faShoppingBasket} />
                </Link>

            <nav className={topNav}>
                <ul className="menu__navList">
                    <li>
                        <Link to="/" className="menu__navLink">Home</Link>
                    </li>
                    <li>
                        <Link to="/shop" className="menu__navLink">Shop</Link>
                    </li>
                    <li>
                        <Link to="/sales" className="menu__navLink">Sales</Link>
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
