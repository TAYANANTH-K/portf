import React from 'react';
import project1 from "../assets/port.jpg";
import project2 from "../assets/cart.jpg";
import project4 from "../assets/weather.png";
import project5 from "../assets/e-com.jpg";
import project6 from "../assets/expensee.png";

import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai';
import Reveal from './Reveal';

const projects = [
    {
        img: project1,
        title: "Personal Portfolio",
        description: "A modern and responsive personal portfolio built with React and styled using Tailwind CSS. Showcasing projects, skills, and experiences with a sleek, user-friendly design optimized for performance.",
        links: {
            site: "#",
            github: "#",
        },
    },
    {
        img: project2,
        title: "React Shopping Cart",
        description: "A React-based shopping cart feature that allows users to add, update, and remove items. It offers a dynamic and seamless user experience with real-time updates.",
        links: {
            site: "https://update-cart2-react3.netlify.app/",
            github: "https://github.com/SUKANT43/Update-Cart-React",
        },
    },
    {
        img: project4,
        title: "Weather App Using React and API",
        description: "A weather application built with React that fetches real-time data using APIs. Displays current weather, forecasts, and location-specific updates in a clean, responsive design.",
        links: {
            site: "https://weather-website-api2.netlify.app/",
            github: "https://github.com/SUKANT43/Weather-App",
        },
    },
    {
        img: project5,
        title: "MERN E-Commerce Website",
        description: "A full-stack e-commerce platform built with the MERN stack, featuring product browsing, user authentication, and cart management. Includes an admin dashboard for managing users, products, and orders.",
        links: {
            site: "#",
            github: "https://github.com/SUKANT43/E-commerce-Mern",
        },
    },
    {
        img: project6,
        title: "MERN Expense Tracker",
        description: "A full-stack expense tracker application built with the MERN stack, enabling users to track, categorize, and manage expenses. Features include user authentication, a dashboard, and real-time data updates.",
        links: {
            site: "#",
            github: "https://github.com/SUKANT43",
        },
    },
];

const Portfolio = () => {
    return (
        <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
            <h2 className='text-3xl font-bold text-gray-200 mb-8'>Projects</h2>
            {projects.map((project, index) => (
                <Reveal key={index}>
                    <div
                        className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}
                    >
                        <div className='w-full md:w-1/2 p-4'>
                            <img
                                src={project.img}
                                alt={project.title}
                                className='w-full h-full object-cover rounded-lg shadow-lg'
                            />
                        </div>
                        <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                            <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                            <p className='text-gray-300 mb-4'>{project.description}</p>
                            <div className='flex space-x-4'>
                                <a
                                    href={project.links.site}
                                    className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'
                                >
                                    View Site
                                </a>
                                <a
                                    href={project.links.github}
                                    className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300 flex items-center space-x-2'
                                >
                                    <AiOutlineGithub />
                                    <span>GitHub</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Reveal>
            ))}
        </div>
    );
};

export default Portfolio;
