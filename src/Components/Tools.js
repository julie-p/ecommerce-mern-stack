import React, { useEffect } from 'react';
import data from '../data';
import '../styles/Tools.css';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Tools() {

    let location = useLocation();

    let h3;
    switch (location.pathname) {
        case '/shop':
            h3 = <h3>/shop/</h3>;
            break;
        case '/sales':
            h3 = <h3>/sales/</h3>;
            break;
        default: 
            h3 = "";
    };

    return (
        <div className="tools__container">
            {h3}

            <div className="tools__dropdownFilter">
                <h3>/Filter +/</h3>
            </div>

            <div className="tools__searchBar">
                <input type="search" name="search" className="tools__input" autoComplete="off" required/>
                <label for="search" className="tools__label">
                    <span className="tools__contentName">Search</span>
                </label>
            </div>


            
        </div>
    )
};

export default Tools;
