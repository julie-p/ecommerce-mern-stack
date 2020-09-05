import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header__hero">
            <div className="container spacing">
            <h1 className="header__primaryTitle">Amazing shoes at an amazing price</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quam perspiciatis facilis beatae laudantium
                quidem enim sit sequi!</p>
            <Link to="/shop" className="btn">See what we have</Link>
            </div>
        </header>
    )
};

export default Header;
