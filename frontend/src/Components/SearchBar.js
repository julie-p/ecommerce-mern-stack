import React from 'react';

function SearchBar() {

    return (
        <div className="tools__searchBar">
            <input type="search" name="search" className="tools__input" autoComplete="off" required/>
            <label for="search" className="tools__label">
                <span className="tools__contentName">Search</span>
            </label>
        </div>
    )
};

export default SearchBar;
