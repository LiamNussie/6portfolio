import React from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return ( 
        <div className="navbar">
            <div className="content">
                <Link style={{textDecoration: "none", color: "black"}} to='/'><p className="left">HOME</p></Link>
                <Link style={{textDecoration: "none", color: "black"}} to='/connect'><p className="right">CONNECT</p></Link>
            </div>
        </div>
     );
}
 
export default NavBar;