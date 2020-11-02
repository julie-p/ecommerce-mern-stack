import React from 'react';
import '../styles/Tools.css';
import Filter from './Filter';
import SearchBar from './SearchBar';
import { useLocation } from 'react-router-dom';

function Tools() {

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

           <Filter />

            <SearchBar />
   
        </div>
    )
};

export default Tools;
