import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css'

const Logo = () => {
     return (
       <div className = 'ma4 mt3' style={{ marginTop: '0rem' }}>  
       <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
       <div className="Tilt-inner pad3">
       <img  style = {{padding: '25px'}} alt = 'logo' src = {brain}/></div>
        </Tilt>
    </div>
     );
}

export default Logo;