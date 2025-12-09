import React from "react";
import Lottie from "lottie-react";
import circleAnimation from "../assets/circleAnimation.json";
import { TypeAnimation } from "react-type-animation";
import picture from "../../public/picture.jpg";
import resume from "../../public/resume.pdf";
import { Helmet } from "react-helmet-async";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className="min-h-screen w-full px-4 md:px-8 lg:px-16 flex items-center justify-center">
            <Helmet>
                <title>Portfolio | Home</title>
            </Helmet>

            {/* Big dark hero panel */}
            <div className="max-w-6xl w-full bg-[#050018]/95 rounded-[32px] border border-violet-500/30 shadow-[0_0_50px_rgba(0,0,0,0.55)] px-6 md:px-10 py-10 md:py-16 text-white flex flex-col-reverse md:flex-row items-center gap-10 md:gap-14">
                {/* LEFT: text */}
                <div className="w-full md:w-1/2" data-aos="fade-right">
                    <p className="text-sm md:text-base tracking-[0.28em] uppercase text-violet-300 mb-2">
                        Hi, I&apos;m
                    </p>

                    <TypeAnimation
                        className="font-extrabold text-3xl md:text-4xl lg:text-5xl text-white leading-tight"
                        sequence={[
                            "ARAFAT RAHMAN SAKIB",
                            1200,
                            "Full Stack Developer",
                            1200,
                            "MERN Stack Developer",
                            1200,
                            "Specialized in React.js",
                            1200,
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ display: "inline-block" }}
                        repeat={Infinity}
                    />

                    <p className="mt-4 md:mt-6 text-sm md:text-base text-gray-300 leading-relaxed">
                        Self-taught programmer with proficiency in the MERN stack and a
                        solid understanding of JavaScript, HTML, and CSS. Passionate about
                        building responsive user interfaces, RESTful APIs, and continuously
                        learning new technologies.
                    </p>

                    {/* CTA buttons */}
                    <div className="mt-6 flex flex-wrap items-center gap-4">
                        <a
                            href={resume}
                            download="resume"
                            className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm md:text-base font-semibold bg-gradient-to-r from-violet-500 to-emerald-500 hover:from-violet-400 hover:to-emerald-400 border border-transparent shadow-lg shadow-violet-700/40 transition-transform duration-200 hover:-translate-y-0.5"
                        >
                            Download Resume
                        </a>
                        <Link to="/projects">
                        <a
                            href="/projects"
                            className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm md:text-base font-medium border border-violet-500/60 text-violet-200 hover:bg-violet-600/20 transition"
                        >
                            <a className='cursor-pointer' href="#projects"> View Projects</a>
                            
                        </a>
                        </Link>
                    </div>

                    {/* Socials */}
                    <div className="mt-5 flex items-center gap-4 text-2xl md:text-3xl">
                        <a
                            href="https://www.linkedin.com/in/arafat-rahman-516206161"
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-full bg-[#070b24] border border-transparent hover:border-violet-500 hover:text-violet-300 transition"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://www.facebook.com/arafatrahman422/"
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-full bg-[#070b24] border border-transparent hover:border-blue-400 hover:text-blue-300 transition"
                        >
                            <FaFacebook />
                        </a>
                        <a
                            href="https://github.com/arafatrahman862"
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-full bg-[#070b24] border border-transparent hover:border-gray-400 hover:text-gray-200 transition"
                        >
                            <FaGithub />
                        </a>
                    </div>
                </div>

                {/* RIGHT: Lottie + photo */}
                <div
                    className="w-full md:w-1/2 flex justify-center items-center"
                    data-aos="fade-left"
                >
                    <div className="relative flex items-center justify-center">
                        {/* Lottie background circle */}
                        <Lottie
                            animationData={circleAnimation}
                            loop={true}
                            className="w-64 sm:w-72 md:w-80"
                        />

                        {/* Profile image on top */}
                        <img
                            src={picture}
                            alt="Arafat Rahman"
                            className="absolute w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full object-cover border-4 border-violet-400 shadow-[0_0_35px_rgba(139,92,246,0.9)]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
