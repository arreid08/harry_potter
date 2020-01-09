import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {

    return (
        <nav>
        <Link to='/home' className='header-link'>
            <h1 className='header-title'>Harry Potter Zone</h1>
        </Link>
        </nav>
    )
}

export default Header;