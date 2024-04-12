import React from 'react';
import './Header.css'

function Header() {
    return (
        <div class="header">
            <nav class="navbar navbar-expand-sm">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand navbar-brand-item text-white" href="#!">Zikrulla Rakhmatov</a>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul class=" navbar-nav nav-tabs navbar-items  borderborder-danger">
                            <li class="nav-item">
                                <a class="nav-link header-nav-link" href="#!">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link header-nav-link" href="#!">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link header-nav-link" href="#!">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link header-nav-link" href="#!">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link header-nav-link" href="#!">Qualifications</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link header-nav-link" href="#!">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;