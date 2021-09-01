import React from 'react';
import NavBar from '../../components/navbar/navbar';
import './building.scss';
import { Link } from 'react-router-dom'; 

const Building = () => {
    return ( 
        <div className="invest">
            <NavBar />
            <ul className="bd">
                {/* <li className="diff"><a target="_blank" rel="noreferrer" href="https://poapool.com/">POA</a></li>
                <li className="diff"><a target="_blank" rel="noreferrer" href="https://zoepool.com/">ZOE</a></li> */}
                {/* <li><a rel="noreferrer" target="_blank" href="https://cardano.ideascale.com/a/dtd/D-Timestamped-Registration-System/334066-48088">REGISTRATION</a></li> */}
                <li className="diff"><a rel="noreferrer" target="_blank" href="https://cardano.ideascale.com/a/dtd/iFoncier-Land-Registry-Burkina-Faso/366863-48088">LAND</a></li>
                <li><a rel="noreferrer" target="_blank" href="https://www.bobclats.art/">ART</a></li>
                {/* <li><a rel="noreferrer" target="_blank" href="https://cardano.ideascale.com/a/dtd/Online-Makerspace/341053-48088/">PROTOTYPING</a></li>
                <li className="diff"><a rel="noreferrer" target="_blank" href="https://cardano.ideascale.com/a/dtd/Food-traceability-solution-Africa/334507-48088">FOOD</a></li>
                <li><a rel="noreferrer" target="_blank" href="https://cardano.ideascale.com/a/dtd/RedToken-Blood-Donation-Dapp/352327-48088">BLOOD</a></li> */}
            </ul>
        </div>
     );
}
 
export default Building;