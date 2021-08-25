import React from 'react';
import NavBar from '../../components/navbar/navbar';
import './home.scss';
import Picture from './picture.svg';
import { Link } from 'react-router-dom';

const Home = () => {
    return ( 
        <div className="home">
            <NavBar />
            <div className="image">
                <img src={Picture} alt="visuals" />
                <p className="running">RUNNING</p>
            </div>
            <ul className="row1">
                    <li  className="diff"><a rel="noreferrer" target="_blank" href="https://liqwid.finance/">FINANCE</a></li>
                    <Link style={{textDecoration: "none", color: "black"}} to='/invest'><li>INVEST</li></Link>
                    <li className="diff"><a rel="noreferrer" target="_blank" href="https://discord.com/invite/xujZA7XB">COMMUNITY</a></li>
            </ul>
            <p className="building">BUILDING</p>
            <ul className="row2">
                    <li><a rel="noreferrer" target="_blank" href="https://cardano.ideascale.com/a/dtd/D-Timestamped-Registration-System/334066-48088">REGISTRATION</a></li>
                    <li><a rel="noreferrer" target="_blank" href="https://www.bobclats.art/">ART</a></li>
                    <li><a rel="noreferrer" target="_blank" href="https://cardano.ideascale.com/a/dtd/Online-Makerspace/341053-48088/">PROTOTYPING</a></li>
                    <li><a rel="noreferrer" target="_blank" href="https://cardano.ideascale.com/a/dtd/RedToken-Blood-Donation-Dapp/352327-48088">BLOOD</a></li>
            </ul>
            <ul className="row3">
                    <li className="diff"><a rel="noreferrer" target="_blank" href="https://cardano.ideascale.com/a/dtd/iFoncier-Land-Registry-Burkina-Faso/366863-48088">LAND</a></li>
                    <Link style={{textDecoration: "none", color: "black"}} to='/mind'><li>MIND</li></Link>
                    <li className="diff"><a rel="noreferrer" target="_blank" href="https://cardano.ideascale.com/a/dtd/Food-traceability-solution-Africa/334507-48088">FOOD</a></li>
            </ul>
        </div>
     );
}
 
export default Home;