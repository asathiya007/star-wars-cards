import React from "react";
import Tilt from 'react-tilt';
import logo from "./starwars.png";
import "./Logo.css";

const Logo = () => {
    return (
        <div className="ma4" style={{ display: "flex", justifyContent: "space-between" }}>
            <Tilt className="Tilt br4 shadow-5 bg-yellow" options={{ max: 55 }} style={{ height: 200, width: 250 }} >
                <div className="Tilt-inner pa1">
                    <img src={logo} alt="" height="190px" width="240px"
                        className="br4"/>
                </div>
            </Tilt>
            <h1 id="title" className="f1 pa3">Star Wars Cards</h1>
        </div>
    );
};

export default Logo; 