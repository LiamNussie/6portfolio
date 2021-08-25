import React from 'react';
import NavBar from '../../components/navbar/navbar';
import './connect.scss';

const Connect = () => {
    return ( 
        <div className="connect">
            <NavBar />
            <div className="field">
                <textarea className="text-box" cols="30" rows="10" placeholder="TYPE A MESSAGE"></textarea>
                <button>SEND</button>
            </div>
        </div>
     );
}
 
export default Connect;