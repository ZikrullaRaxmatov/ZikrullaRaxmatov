import React, { useState } from 'react';
import './Header.css'

function Header() {

    const [upBtn, setUpBtn] = useState(false)
    const [bgColor, setBgColor] = useState(false)

    const displayUpButton = () => {
        if (window.scrollY >= 120) {
            setUpBtn(true)
        } else {
            setUpBtn(false)
        }

        if (window.scrollY >= 550) {
            setBgColor(true)
        } else {
            setBgColor(false)
        }
    }

    window.addEventListener('scroll', displayUpButton)

    return (
        <div className="header">
            <nav className={bgColor ? "navbar navbar-expand-sm fixed-top navbar-bgColor" : "navbar navbar-expand-sm fixed-top"}>
                <div className="container ">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand text-white grand-hotel-regular" href="#home">Zikrulla Rakhmatov</a>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className=" navbar-nav nav-tabs navbar-items">
                            <li className="nav-item">
                                <a className="nav-link header-nav-link" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link header-nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link header-nav-link" href="#services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link header-nav-link" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link header-nav-link" href="#qualifications">Qualifications</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link header-nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className={upBtn ? "go-top" : "d-none"} >
                        <a href='#home' className="go-top-item">
                            <i class="fa-solid fa-chevron-up"></i>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;