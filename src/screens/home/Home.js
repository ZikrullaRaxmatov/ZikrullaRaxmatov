import React from 'react';
import homeImg from './home_laptop.avif'
import './Home.css'


function Home() {
    return (
        <div class="home">
            <img src={homeImg} alt='home' class="home-img" />
            <div class="container">
                <div class="home-items">
                    <div class="home-itmes-content">
                        <h4 class="home-greeting mb-md-3" >Hello!</h4>
                        <h1 class="home-text mb-md-4">I'm ... </h1>
                        <ul class="home-social mb-md-4">
                            <li><i class="fa-brands fa-linkedin-in home-social-item fa-xl"></i></li>
                            <li><i class="fa-brands fa-telegram home-social-item fa-xl"></i></li>
                            <li><i class="fa-brands fa-github home-social-item fa-xl"></i></li>
                            <li><i class="fa-brands fa-facebook home-social-item fa-xl"></i></li>
                            <li><i class="fa-brands fa-youtube home-social-item fa-xl"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home;