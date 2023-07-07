import './navbar.css';
import logo from '../imges/logo.png';
import React from 'react';

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
                        <li class="acceuil">
                            <a class="nav-link " aria-current="page" href="#">Acceuil</a>
                        </li>
                        <li class="café">
                            <a class="nav-link" href="#">Café</a>
                        </li>
                        <li class="restaurant">
                            <a class="nav-link" href="#">Restaurant</a>
                        </li>
                        <li class="horaires">
                            <a class="nav-link ">Nos horaires</a>
                        </li>
                        <li class="contact">
                            <a class="nav-link ">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;