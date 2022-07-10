import React from 'react';

import Cards from './cards'

import '../styles/instrumentList.style.css';


function InstrumentsList() {
    return (
        <div className="instrument-list">
            <Cards />
        </div>
    );
}

export default InstrumentsList;