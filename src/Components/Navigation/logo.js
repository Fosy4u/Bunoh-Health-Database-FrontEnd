import React from 'react';
import Tilt from 'react-tilt'
import './logo.css';
import CompanyLogo from './logo.JPG';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 100, width: 150 }} >
                <div className="Tilt-inner"><img alt='logo' src={CompanyLogo} /> </div>
            </Tilt>
        </div>);
}

export default Logo;