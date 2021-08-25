import React from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';

const ANavBar = () => {
    return ( 
        <div className="navbar">
            <div className="content">
                <p className="left">CONNECTING AND BUILDING</p>
                <Link style={{textDecoration: "none", color: "black"}} to='/connect'><p className="right">CONNECT</p></Link>
            </div>
        </div>
     );
}
 
export default ANavBar;