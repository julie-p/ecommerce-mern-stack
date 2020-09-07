import React from 'react';
import '../styles/Header.css';
import Menu from '../Components/Menu';
import { Link, useLocation } from 'react-router-dom';

function Header() {

    let location = useLocation();

    let header = "header__hero";
    let btn = "btn";
    let h1;
    switch (location.pathname) {
        case '/':
            header += " home";
            btn += " btn-home";
            h1 = <h1 className="header__primaryTitle">Amazing shoes at an amazing price</h1>;
            break;
        case "/shop":
            header += " shop";
            btn += " btn-shop";
            h1 = <h1 className="header__primaryTitle title__shop">Find your perfect shoes</h1>
            break;
        default :
            header = "header__hero";
    }

    return (
        <header className={header}>
            <div className="container spacing">
                <Menu />
                {h1}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quam perspiciatis facilis beatae laudantium
                    quidem enim sit sequi!</p>
                <Link to="/shop" className={btn}>See what we have</Link>
            </div>
        </header>
    )
};

export default Header;
