import React from 'react';
import '../styles/Links.css';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function Links() {

    const userSignin = useSelector(state => state.userSignin);
    const userSignup = useSelector(state => state.userSignup);
    const { loading, userInfoSignin, error } = userSignin;
    const { loader, userInfoSignup, err } = userSignup;

    let location = useLocation();

    let login = 'links__login';
    let profile = 'links__profile';
    switch (location.pathname) {
        case '/cart':
            login += ' cart';
            profile += ' cart';
            break;
        case '/profile':
            login += ' profile';
            profile += ' profile';
            break;
        case '/order-history':
            login += ' order';
            profile += ' order';
            break;
        default : 
            login = "links__login";
            profile = 'links__profile';
            break;
    }

    return (
        <div className="links">
            { userInfoSignin || userInfoSignup ?
                <Link to="/profile" className={profile}>
                    <FontAwesomeIcon icon={faUserCircle} className="links__icon" />
                </Link>
            :
                <Link to="/login/" className={login}>Login</Link>
            }
            
        </div>
    )
};

export default Links;
