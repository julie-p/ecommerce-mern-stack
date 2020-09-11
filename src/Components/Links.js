import React from 'react';
import '../styles/Links.css';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

function Links() {

    let location = useLocation();

    let className = 'links__login';
    switch (location.pathname) {
        case '/cart' :
            className += ' cart';
            break;
        default : 
            className = "links__login";
            break;
    }

    return (
        <div className="links__cart">
            <Link className={className}>Login</Link>
            <span>/</span>
            <Link className={className}>Create your account</Link>
        </div>
    )
};

export default Links;
