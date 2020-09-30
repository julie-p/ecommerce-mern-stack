import React from 'react';
import '../styles/Links.css';
import { Link, useLocation } from 'react-router-dom';

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
            <Link to="/login/" className={className}>Login</Link>
        </div>
    )
};

export default Links;
