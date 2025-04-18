import "./NavBar.css";

import { Link } from "react-router";

import home from "../../assets/home-white.png";
import profile from "../../assets/profile-white.png";
import create from "../../assets/create-white.png";
import message from "../../assets/white-message.png";

function NavBar() {
    return (
        <div className="nav-bar">
            <div className="nav-bar-wrapper">
                <Link to="/user"><img className="nav-icon" src={profile}></img></Link>
                <Link to="/user"><img className="nav-icon" src={home}></img></Link>
                <Link to="/inbox"><img className="nav-icon" src={message}></img></Link>
                <Link><img className="nav-icon" src={create}></img></Link>
            </div>
        </div>
    );
}

export default NavBar;

