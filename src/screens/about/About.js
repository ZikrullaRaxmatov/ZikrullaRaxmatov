import React from 'react';
import './About.css'
import aboutBg from './developer.avif'
import resume from './Zikrulla_Rakhmatov_Resume.pdf'

function About() {
    return (
        <div class="about" id='about'>
            <div class="container">
                <div class="raw about-items">
                    <div class="col-6 about-items-left">
                        <img src={aboutBg} alt='aboutBg' class="about-items-left-bg" />
                    </div>
                    <div class="col-6 about-items-right">
                        <h4 class="about-items-name" >My name is Zikrulla Rakhmatov.</h4>
                        <p class="about-info-desc" >I am a full-stack software developer with over a year of experience in web development. Originally from Fergana, Uzbekistan, I currently reside in Anseong, South Korea, where I study as a student at Namseoul university. I enjoy collaborating with new colleagues and embracing new challenges in my field. Outside of work, I have a passion for the outdoors, hiking and walking in parks are among my favorite hobbies, allowing me to reconnect with nature and find inspiration for my projects.</p>
                        <div class="about-info">
                            <h6 class="about-info-header">Full Name :</h6>
                            <p class="about-info-desc" >Zikrulla Rakhmatov Rustamjon ugli</p>
                        </div>
                        <div class="about-info">
                            <h6 class="about-info-header">Nick Name :</h6>
                            <p class="about-info-desc" > - </p>
                        </div>
                        <div class="about-info">
                            <h6 class="about-info-header">Address :</h6>
                            <p class="about-info-desc" >Anseong, Pyontaek, South Korea</p>
                        </div>
                        <div class="about-info">
                            <h6 class="about-info-header">Phone Number :</h6>
                            <p class="about-info-desc" >010 **** 2898</p>
                        </div>
                        <div class="about-info">
                            <h6 class="about-info-header">Email :</h6>
                            <p class="about-info-desc" >zikrullarakhmatov@gmail.com</p>
                        </div>

                        <div class="about-items-right-btns">
                            <a href='#projects' class="btn rounded-pill btn-portfolio">Portfolio</a>
                            <a href={resume} download class="btn rounded-pill btn-resume">Resume</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;