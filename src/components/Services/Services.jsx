import React from 'react';
import Cart from './Cart';
import './Services.css';
import { FaCode, FaPaintBrush, FaPalette} from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";



const services = [
    {
        id: 1,
        icon: <FaCode />,
        name: 'Web Development',
        details: 'I build modern, responsive, and high-performance websites and web applications using React.js, PHP, and Laravel. From frontend UI design to backend system development, I focus on clean code, fast loading speed, and SEO-friendly structure to help your business grow online.'
    },
    {
        id: 2,
        icon: <FaPaintBrush />,
        name: 'UI/UX Design',
        details: 'I create user-friendly and attractive UI/UX designs that improve user interaction and experience. My design approach focuses on simplicity, accessibility, and smooth navigation across all devices, helping websites look professional and modern.'
    },
    {
        id: 3,
        icon: <FaPalette />,
        name: 'Graphics Design',
        details: 'I provide professional graphic design services including logo design, social media banners, and marketing visuals. Using Adobe Photoshop and Illustrator, I create high-quality visual content that represents your brand identity effectively.'
    },
    {
        id: 4,
        icon: <FaArrowTrendUp />,
        name: 'SEO Optimization',
        details: 'I help improve website and YouTube search visibility through proper SEO optimization. My service includes keyword research, content optimization, title and description strategy, and technical SEO to increase organic traffic and audience reach.'
    }
];



const Services = () => {
    return (
        <section className='services' id='service'>
            <h1>My <span>Services</span></h1>

        <div className='service-container'>
        {
            services.map((item)=>(
                <Cart key={item.id} item={item}/>
            ))
        }
        </div>
        </section>
    );
};

export default Services;