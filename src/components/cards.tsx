import React from 'react';

import '../styles/instrumentList.style.css';


function Cards() {
    return (
        <div className="cards-container">
            <div className="card">
                <div>
                    <div className="card-category">
                        Stock
                    </div>
                    <div className="card-title">
                        AAPL
                    </div>
                    <div className="card-price">
                        $115.95
                    </div>
                    {/* <div>calc button</div>
                    <div>history</div> */}
                </div>
            </div>
        </div>
    );
}

export default Cards;