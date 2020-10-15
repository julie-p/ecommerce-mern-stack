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
        <div className="links">
            { userInfoSignin || userInfoSignup ?
                <Link className={className}>
                    <FontAwesomeIcon icon={faUserCircle} className="links__icon" />
                </Link>
            :
                <Link to="/login/" className={className}>Login</Link>
            }
            
        </div>
    )
};

export default Links;
