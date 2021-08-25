import React from 'react';
import NavBar from '../../components/navbar/navbar';
import './invest.scss';

const Invest = () => {
    return ( 
        <div className="invest">
            <NavBar />
            <ul>
                <li className="diff"><a target="_blank" rel="noreferrer" href="https://poapool.com/">POA</a></li>
                <li className="diff"><a target="_blank" rel="noreferrer" href="https://zoepool.com/">ZOE</a></li>
                
            </ul>
        </div>
     );
}
 
export default Invest;