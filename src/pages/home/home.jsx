import React from 'react';
import NavBar from '../../components/navbar/navbar';
import './home.scss';
import Picture from './picture.svg';
import { Link } from 'react-router-dom';
import ANavBar from '../../components/navbar copy/navbar';

const Home = () => {
    return ( 
        <div className="home">
            <ANavBar />
            <div className="image">
                <p className="running">JOSHUA AKPAN</p>
            </div>
            <div className="side">
                <Link style={{textDecoration: "none", color: "#686868"}} to='/building'><p>BUILDING</p></Link>
                <Link style={{textDecoration: "none", color: "#686868"}} to='/running'><p>RUNNING</p></Link>
            </div>
            <div className="r-side">
                <Link style={{textDecoration: "none", color: "#686868"}} to='/mind'><li>MIND</li></Link>
            </div>
            {/* <ul className="row1">
                    <li  className="diff"><a rel="noreferrer" target="_blank" href="https://liqwid.finance/">FINANCE</a></li>
                    <Link style={{textDecoration: "none", color: "#686868"}} to='/invest'><li>INVEST</li></Link>
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
                    <Link style={{textDecoration: "none", color: "#686868"}} to='/mind'><li>MIND</li></Link>
                    <li className="diff"><a rel="noreferrer" target="_blank" href="https://cardano.ideascale.com/a/dtd/Food-traceability-solution-Africa/334507-48088">FOOD</a></li>
            </ul> */}
        </div>
     );
}
 
export default Home;