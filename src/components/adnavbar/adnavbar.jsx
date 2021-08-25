import React from 'react';
import './adnavbar.scss';
import { Link } from 'react-router-dom';

const AdNavBar = () => {
    return ( 
        <div className="navbar">
            <div className="content">
                <Link style={{textDecoration: "none", color: "black"}} to='/'><p className="left">HOME</p></Link>
                <div className="rightx">
                   <Link style={{textDecoration: "none", color: "black"}} to='/broadcast-thoughts/edit'><p style={{marginRight: "20px"}}>DISTORT</p></Link>
                   <p>SPRINKLE</p>
                </div>
            </div>
        </div>
     );
}
 
export default AdNavBar;