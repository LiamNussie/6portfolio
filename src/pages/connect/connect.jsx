import React from 'react';
import NavBar from '../../components/navbar/navbar';
import './connect.scss';

const Connect = () => {
    return ( 
        <div className="connect">
            <NavBar />
            <form action="https://formspree.io/f/mleaoyjb" method="POST" className="field">
                <textarea name="Message" className="text-box" cols="30" rows="10" placeholder="TYPE A MESSAGE"></textarea>
                <button>SEND</button>
            </form>
        </div>
     );
}
 
export default Connect;