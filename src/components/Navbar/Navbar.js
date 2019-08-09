import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.scss';


function Navbar(props) {
    return (
        <div className="navbar">
            <div className="navbar-right">
                <Link to="/login" className="links">Login</Link>
                <Link to="/" className="links">Register</Link>

            </div>
        </div>
    )
}

export default Navbar;
