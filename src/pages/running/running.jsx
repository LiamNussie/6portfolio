import React from 'react';
import NavBar from '../../components/navbar/navbar';
import './running.scss';
import { Link } from 'react-router-dom'; 

const Running = () => {
    return ( 
        <div className="invest">
            <NavBar />
            <ul>
                {/* <li className="diff"><a target="_blank" rel="noreferrer" href="https://poapool.com/">POA</a></li>
                <li className="diff"><a target="_blank" rel="noreferrer" href="https://zoepool.com/">ZOE</a></li> */}
                {/* <li><a rel="noreferrer" target="_blank" href="https://cardano.ideascale.com/a/dtd/D-Timestamped-Registration-System/334066-48088">REGISTRATION</a></li>
                <li className="diff"><a rel="noreferrer" target="_blank" href="https://cardano.ideascale.com/a/dtd/iFoncier-Land-Registry-Burkina-Faso/366863-48088">LAND</a></li>
                <li><a rel="noreferrer" target="_blank" href="https://www.bobclats.art/">ART</a></li>
                <Link style={{textDecoration: "none", color: "#686868"}} to='/mind'><li>MIND</li></Link>
                <li><a rel="noreferrer" target="_blank" href="https://cardano.ideascale.com/a/dtd/Online-Makerspace/341053-48088/">PROTOTYPING</a></li>
                <li className="diff"><a rel="noreferrer" target="_blank" href="https://cardano.ideascale.com/a/dtd/Food-traceability-solution-Africa/334507-48088">FOOD</a></li>
                <li><a rel="noreferrer" target="_blank" href="https://cardano.ideascale.com/a/dtd/RedToken-Blood-Donation-Dapp/352327-48088">BLOOD</a></li> */}

<ul className="row1">
                    <li  className="diff"><a rel="noreferrer" target="_blank" href="https://liqwid.finance/">FINANCE</a></li>
                    <Link style={{textDecoration: "none", color: "#686868"}} to='/invest'><li>INVEST</li></Link>
                    <li className="diff"><a rel="noreferrer" target="_blank" href="https://discord.com/invite/xujZA7XB">COMMUNITY</a></li>
            </ul>
                
            </ul>
        </div>
     );
}
 
export default Running;