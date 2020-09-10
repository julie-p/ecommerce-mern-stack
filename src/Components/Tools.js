import React, { useState, useEffect } from 'react';
import data from '../data';
import '../styles/Tools.css';
import { Link, useLocation } from 'react-router-dom';

function Tools() {

    const [ open, setOpen ] = useState(false);

    let filter = "tools__dropdown";
    switch (open) {
        case true :
            filter += " active";
            break;
        default :
            filter = "tools__dropdown";
            break;
    };

    let location = useLocation();

    let h3;
    switch (location.pathname) {
        case '/shop':
            h3 = <h3 className="tools__location">/shop/</h3>;
            break;
        case '/sales':
            h3 = <h3 className="tools__location">/sales/</h3>;
            break;
        default: 
            h3 = "";
    };

    return (
        <div className="tools__container">
            {h3}

            <div className="tools__filter" open={open} onClick={() => setOpen(!open)}>
                <h3 style={{display: open ? "none" : "block"}}>/Filter +/</h3>
                <h3 style={{display: open ? "block" : "none"}}>/Filter -/</h3>
                <div className={filter}>
                    <ul>
                        <li>Lowest price</li>
                        <li>Highest price</li>
                    </ul>
            </div>
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
