import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/animals.PNG"

const Header = () => {

    const activeStyle = {color: '#8FC1E3'}

    return (
        <nav className="header-container"> 
            <NavLink to="/">
                <img src={logo} className="header-logo" alt="Cat Logo"></img>
            </NavLink>
            <NavLink to="/about" className="header-link" activeStyle={activeStyle}>
                ABOUT 
            </NavLink>
            <NavLink to="/cats" className="header-link" activeStyle={activeStyle}>
                CATS
            </NavLink>
            <NavLink to="/dogs" className="header-link" activeStyle={activeStyle}>
                DOGS 
            </NavLink>
            <NavLink to="/costs" className="header-link" activeStyle={activeStyle}>
                COSTS
            </NavLink>
        </nav>
    );
};

export default Header;