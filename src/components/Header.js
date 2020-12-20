import React from "react";
import Dropdown from "../components/Dropdown"


function Header(props){
    return (

            <nav className="navbar">
                <ul className="navbar-nav">{props.children}</ul>     
            </nav> 
        
    )
}

function navItems(props) {
    return(
        <li className="nav-item">
            <a href="#" className= "icon-button">
                {props.icon}
            </a>
        </li>
    )
}

export default Header;