import React from 'react';
import Lottie from "lottie-react";
import circleAnimation from "../assets/circleAnimation.json"
import { TypeAnimation } from 'react-type-animation';
import picture from "../../public/picture.jpeg"
import resume from "../../public/resume.pdf"
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';

const Home = () => {
    return (
        <div className='h-full w-screen '>
            <Helmet><title>Portfolio | Home</title></Helmet>
            <div className='md:flex md:flex-row flex flex-col-reverse pb-12  md:mt-12 mt-8 text-black'>
                <div className='md:w-full w-[80%] md:mt-20 ' data-aos="fade-right">
                    <p className='text-2xl'>Hi,I'm</p>

                    <TypeAnimation className='text-purple-500  '
                        sequence={[

                            'ARAFAT RAHMAN SAKIB ',
                            1000,
                            'Full Stack Developer ',
                            1000,
                            'MERN Stack  Developer',
                            1000,
                            'Specialized in React.js',
                            1000,

                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                    <p className='md:mb-3 md:text-2xl text-xl mt-4'>Self-taught programmer with proficiency in MERN stack, solid understanding of JavaScript, HTML and CSS. Committed to continuous learning and staying updated with industry trends. Skilled in creating responsive user interfaces and building RESTful APIs.</p>
                    <button className="btn btn-outline btn-primary mt-3 "><a href={resume} download="resume">Download Resume</a></button>
                    <div className='flex pt-2 text-3xl  gap-4'>
                    <a href="linkedin.com/in/arafat-rahman-516206161" className='text-blue-600'><FaLinkedin></FaLinkedin></a>
                        <a href="https://www.facebook.com/arafatrahman422/" className='text-blue-500'><FaFacebook></FaFacebook></a>
                        <a href="https://github.com/arafatrahman862"><FaGithub></FaGithub></a>
                    </div>
                </div>
                <div className='md:ml-28 md:mt-20  ml-16 '  data-aos="fade-left" >
                    <Lottie animationData={circleAnimation} loop={true} className='z-1 relative md:w-[60%] w-[70%] ' />
                    <img className='rounded-full bg-cover  md:w-[55%] w-[65%] md:-top-[245px] -top-[205px] md:-right-3 -right-2 relative z-10' src={picture} alt="" />
                </div>
            </div>


        </div>
    );
};

export default Home;