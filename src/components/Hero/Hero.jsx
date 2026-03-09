import React from 'react';
import './Hero.css'
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import HeroImg from '../../assets/image/HeroImg.jpg'

const Hero = () => {
    return (
        <section className='hero' id='home'>
           <div className="hero-details">
            <h1>Md. Shibgatullah Sifat</h1>
            <h2>I'm a <span>Full Stack Web Developer</span></h2>
            <p>A passionate and motivated Full Stack Web Developer with a strong foundation in PHP, Laravel, and React.js. Experienced in building responsive, user-friendly web applications with a focus on seamless frontend and backend integration. Skilled in translating design concepts from Adobe Photoshop and Illustrator into functional code. Eager to contribute to a professional team and grow within a fast-paced development environment.</p>
            <div className="btn-sci">
                <a href="#contact" className='btn'>Contact Me</a>
                <div className="sci">
                    <a href="https://www.linkedin.com/in/md-shibgatullah-sifat-9ba022351/"><FaLinkedin /></a>
                    <a href="https://github.com/mdshibgatullah"><FaGithub /></a>
                    <a href="https://web.facebook.com/hs.sifat.9"><FaFacebook /></a>
                </div>
            </div>
           </div>

           <div className='hero-img'>
            <div className="img-box">
                <div className="img-item">
                    <img src={HeroImg} alt="" />
                </div>
            </div>
           </div>
        </section>
    );
};

export default Hero;