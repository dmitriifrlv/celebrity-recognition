import React from 'react';
import './input.css';

const Navigation =({ onRouteChange }) => {
    return (
        <nav >
            <button className="btn btn-outline-primary mt-1" onClick = {()=>onRouteChange('signin')}>Sign Out</button>
        </nav>
    )
}

export default Navigation