import React from 'react';

// import page components.
import SearchBar from '../components/searchBar';
import InstrumentsList from '../components/instrumentsList';


function Welcome() {
    return (
        <div>
            <SearchBar />
            <InstrumentsList />
        </div>
    );
}

export default Welcome;