import React from 'react';
import NavBar from '../../components/navbar/navbar';
import './invest.scss';

const Invest = () => {
    return ( 
        <div className="invest">
            <NavBar />
            <ul>
                <li className="diff"><a target="_blank" rel="noreferrer" href="https://poapool.com/">POA</a></li>
                <li>ZOE</li>
                {/* <li><a target="_blank" rel="noreferrer" href="">ZOE</a></li> */}
            </ul>
        </div>
     );
}
 
export default Invest;