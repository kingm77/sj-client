import React from 'react';

// Styles and icons
import '../styles/searchBar.style.css';
import { GoSearch } from 'react-icons/go';


function SearchBar() {
    return (
        <div className="search-bar">
            <input 
                className="search-bar-input"
                onChange={() => ''}
                type='search'
                placeholder='Search by name'/>
            <GoSearch size={20} className="search-icon"/>
        </div>
    );
}

export default SearchBar;