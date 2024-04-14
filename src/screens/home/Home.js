import React from 'react';
import { ReactTyped } from 'react-typed';
import homeImg from './home_laptop.avif'
import './Home.css'


function Home() {

    return (
        <div class="home" id='home'>
            <img src={homeImg} alt='home' class="home-img" />
            <div class="container">
                <div class="home-items">
                    <div class="home-itmes-content">
                        <h4 class="home-greeting" >Hello!</h4>
                        <h1 class="home-text">
                            I'm {" "}
                            <span class="animated-text fw-bold">
                                <ReactTyped strings={["Zikrulla", "Rakhmatov", "a Full-stack", "Web Developer"]} typeSpeed={200} loop />
                            </span>
                        </h1>
                        <ul class="home-social ">
                            <li>
                                <a rel="noreferrer" target="_blank" href='https://www.linkedin.com/in/zikrulla-rakhmatov-5aa470272?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BAgSPptEUSOuaYijJXo6qIg%3D%3D' >
                                    <i class="fa-brands fa-linkedin-in home-social-item "></i>
                                </a>
                            </li>
                            <li>
                                <a rel="noreferrer" target="_blank" href='https://t.me/ZikrullaRakhmatov' >
                                    <i class="fa-brands fa-telegram home-social-item "></i>
                                </a>
                            </li>
                            <li>
                                <a rel="noreferrer" target="_blank" href='https://github.com/ZikrullaRaxmatov?tab=repositories'>
                                    <i class="fa-brands fa-github home-social-item "></i>
                                </a>
                            </li>
                            <li><i class="fa-brands fa-facebook home-social-item "></i></li>
                            <li><i class="fa-brands fa-youtube home-social-item "></i></li>
                        </ul>
                    </div>
                    <i class="fa-solid fa-angles-down strelka-down"></i>
                </div>
            </div>
        </div>
    );
}

export default Home;