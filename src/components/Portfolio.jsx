import React from 'react';
import project1 from "../assets/port.jpg";
import project2 from "../assets/cart.jpg";
import project4 from "../assets/weather.png";
import sale from "../assets/sale.jpg"
import worker from "../assets/worker.jpg"
import dis from "../assets/dis.jpg"
import project5 from "../assets/e-com.jpg";
import res from "../assets/resumea.jpg";
import project6 from "../assets/expensee.png";

import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai';
import Reveal from './Reveal';

const projects = [
    {
        img: sale,
        title: "Local Sale and book employee",
        description: "This MERN stack project is a local marketplace platform similar to OLX, enabling users to buy and sell products seamlessly. Beyond traditional listings, it provides additional services like booking skilled employees (plumbers, electricians, etc.) and renting vehicles. The platform aims to offer a one-stop solution for everyday needs, enhancing convenience and accessibility for users.",
        links: {
            site: "#",
            github: "https://github.com/TAYANANTH-K/local_sale.git",
        },
    },
    {
        img: project2,
        title: "React Shopping Cart",
        description: "A React-based shopping cart feature that allows users to add, update, and remove items. It offers a dynamic and seamless user experience with real-time updates.",
        links: {
            site: "",
            github: "",
        },
    },
    {
        img: res,
        title: "Resume Analyzer",
        description: " Developed a web application that analyzes user-uploaded resumes using NLP and machine learning techniques to match their skills and experiences with relevant job listings. The system provides personalized job suggestions, highlights skill gaps, and recommends learning paths to improve employability."
        ,
        links: {
            site: "",
            github: "https://github.com/TAYANANTH-K/resumee_analyze.git",
        },
    },
    {
        img: dis,
        title: "Multiple Disease Prediction",
        description: "Built a web-based platform to predict health conditions like diabetes, heart disease, and Parkinson’s using machine learning algorithms. Integrated data preprocessing, model training, and user-friendly result interpretation.",

        links: {
            site: "#",
            github: "https://github.com/SUKANT43/E-commerce-Mern",
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
