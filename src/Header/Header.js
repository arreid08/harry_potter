import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {

    return (
        <nav>
        <Link to='/home'>
            <h1 className='headerTitle'>Harry Potter Zone</h1>
        </Link>
        </nav>
    )
}

export default Header;