import React from 'react';
import Tilt from 'react-tilt'

const Logo =() => {
    return (
        <div>
            <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
 <div className="Tilt-inner"> <img src="https://i.ibb.co/gwdS9Dn/artificial-intelligence-3685928-1920.png" alt="logo"/> </div>
</Tilt>
        </div>
    )
}

export default Logo