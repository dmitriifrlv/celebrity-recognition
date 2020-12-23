import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';

const Logo =() => {
    return (
        <div>
            <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 170, width: 250 }} >
 <div className="Tilt-inner"> <img id="logo" src="https://i.ibb.co/gwdS9Dn/artificial-intelligence-3685928-1920.png" alt="logo"/> </div>
</Tilt>
        </div>
    )
}

export default Logo