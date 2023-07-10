import React from "react";
import { Link } from "react-router-dom";
import icons from "../assests/insta-icon.png";
import './css/navbar.css';

const Navbar = () => {
    return(
        <div id="nav-container">
            <div id="home">
                    <Link to="/home"><img src={icons} alt="home_logo"/></Link>
            </div>
            <div id="functions">
                <Link to="/login">
                    <button>
                        <img src={icons} alt="home_logo"/><span>Home</span>
                    </button>
                </Link>
                <Link to="/home">
                    <button>
                        <img src={icons} alt="home_logo"/><span>Home</span>
                    </button>
                </Link>
                <Link to="/home">
                    <button>
                        <img src={icons} alt="home_logo"/><span>Home</span>
                    </button>
                </Link>
                <Link to="/home">
                    <button>
                        <img src={icons} alt="home_logo"/><span>Home</span>
                    </button>
                </Link>
                <Link to="/home">
                    <button>
                        <img src={icons} alt="home_logo"/><span>Home</span>
                    </button>
                </Link>
                <Link to="/home">
                    <button>
                        <img src={icons} alt="home_logo"/><span>Home</span>
                    </button>
                </Link>
                <Link to="/home">
                    <button>
                        <img src={icons} alt="home_logo"/><span>Home</span>
                    </button>
                </Link>
                <Link to="/home">
                    <button>
                     <img src={icons} alt="home_logo"/><span>Home</span>
                    </button>
                </Link>
            </div>
            <div id="settings">
                <Link to="/home">
                    <button>
                        <img src={icons} alt="home_logo"/><span>Home</span>
                    </button>
                </Link>
            </div>
        </div>
    )
} 

export default Navbar;

