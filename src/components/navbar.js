import './navbar.css';
import logo from '../imges/logo.png';
import React from 'react';
import { HashLink as Link } from "react-router-hash-link";
function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg fixed-top">
            <div class="container">
                <img src={logo} alt="" className='logo' />
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center " id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <Link to='#home' className='nav-link'>
                            <li class="acceuil">
                                Acceuil
                            </li>
                        </Link>
                        <Link to="#coffee" className='nav-link'>
                            <li class="café">
                                Café
                            </li>
                        </Link>
                        <Link to="#restaurant" className='nav-link'>
                            <li class="restaurant">
                                Restaurant
                            </li>
                        </Link>
                        <Link to="#horaire" className='nav-link'>
                            <li class="horaires">
                                Nos horaires
                            </li>
                        </Link>
                        <Link to="#contact" className='nav-link'>
                            <li class="contact">
                                Contact
                            </li>
                        </Link>

                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;