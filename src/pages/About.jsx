import React from "react";
import CountUp from "react-countup";
import { Helmet } from "react-helmet";

const About = () => {
    return (
        <section
            className="min-h-screen w-full px-4 md:px-8 lg:px-16 py-16"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
        >
            <Helmet>
                <title>Portfolio | About</title>
            </Helmet>

            {/* Outer panel */}
            <div className="max-w-6xl mx-auto bg-[#050018]/95 rounded-[32px] border border-violet-500/30 shadow-[0_0_50px_rgba(0,0,0,0.55)] px-6 md:px-10 py-10 md:py-12 text-white">
                {/* Heading */}
                <div className="mb-8 text-center md:text-left">
                    <p className="text-sm uppercase tracking-[0.25em] text-violet-300">
                        Who am I
                    </p>
                    <h2 className="text-3xl md:text-4xl font-extrabold mt-1">
                        About <span className="text-violet-400">Me</span>
                    </h2>
                    <p className="mt-3 text-sm md:text-base text-gray-300 max-w-2xl">
                        I&apos;m a passionate web developer who enjoys building smooth,
                        responsive, and user-focused applications using modern frontend and
                        backend technologies.
                    </p>
                </div>

                {/* Content grid */}
                <div className="grid gap-8 md:grid-cols-3 md:items-start">
                    {/* Personal info */}
                    <div className="space-y-4 md:col-span-2">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                                    Basic Info
                                </h3>
                                <div className="space-y-1 text-sm md:text-base">
                                    <p>
                                        <span className="text-gray-400">First Name:</span>{" "}
                                        <span className="font-medium">Arafat</span>
                                    </p>
                                    <p>
                                        <span className="text-gray-400">Last Name:</span>{" "}
                                        <span className="font-medium">Rahman</span>
                                    </p>
                                    <p>
                                        <span className="text-gray-400">Age:</span>{" "}
                                        <span className="font-medium">23 Years</span>
                                    </p>
                                    <p>
                                        <span className="text-gray-400">Nationality:</span>{" "}
                                        <span className="font-medium">Bangladeshi</span>
                                    </p>
                                    <p>
                                        <span className="text-gray-400">Languages:</span>{" "}
                                        <span className="font-medium">Bangla, English</span>
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                                    Contact
                                </h3>
                                <div className="space-y-1 text-sm md:text-base">
                                    <p>
                                        <span className="text-gray-400">Phone:</span>{" "}
                                        <span className="font-medium">+8801627062547</span>
                                    </p>
                                    <p>
                                        <span className="text-gray-400">Address:</span>{" "}
                                        <span className="font-medium">
                                            Dhaka, Bangladesh
                                        </span>
                                    </p>
                                    <p>
                                        <span className="text-gray-400">Email:</span>{" "}
                                        <a
                                            href="mailto:arafatrahman862@gmail.com"
                                            className="font-medium text-violet-300 hover:text-violet-200 underline underline-offset-2"
                                        >
                                            arafatrahman862@gmail.com
                                        </a>
                                    </p>
                                    <p>
                                        <span className="text-gray-400">LinkedIn:</span>{" "}
                                        <a
                                            href="https://linkedin.com/in/arafat-rahman-516206161"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="font-medium text-violet-300 hover:text-violet-200 underline underline-offset-2"
                                        >
                                            Arafat Rahman
                                        </a>
                                    </p>
                                    <p>
                                        <span className="text-gray-400">GitHub:</span>{" "}
                                        <a
                                            href="https://github.com/arafatrahman862"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="font-medium text-violet-300 hover:text-violet-200 underline underline-offset-2"
                                        >
                                            @arafatrahman862
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats cards */}
                    <div className="space-y-4">
                        <div
                            className="px-6 py-5 rounded-2xl border border-violet-500/50 bg-[#070b24]/80 hover:bg-violet-600/15 transition-colors duration-300 shadow-md"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                        >
                            <div className="flex items-baseline gap-1">
                                <CountUp
                                    end={20}
                                    duration={2}
                                    className="text-4xl md:text-5xl font-extrabold text-violet-400"
                                />
                                <span className="text-4xl md:text-5xl font-extrabold text-violet-400">
                                    +
                                </span>
                            </div>
                            <p className="mt-2 text-lg font-semibold">
                                Completed Projects
                            </p>
                            <p className="mt-1 text-xs text-gray-400">
                                Real-world applications, side projects, and experiments.
                            </p>
                        </div>

                        <div
                            className="px-6 py-5 rounded-2xl border border-emerald-500/60 bg-[#070b24]/80 hover:bg-emerald-500/15 transition-colors duration-300 shadow-md"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                        >
                            <div className="flex items-baseline gap-1">
                                <CountUp
                                    end={100}
                                    duration={2}
                                    className="text-4xl md:text-5xl font-extrabold text-emerald-400"
                                />
                                <span className="text-4xl md:text-5xl font-extrabold text-emerald-400">
                                    +
                                </span>
                            </div>
                            <p className="mt-2 text-lg font-semibold">
                                Problems Solved
                            </p>
                            <p className="mt-1 text-xs text-gray-400">
                                Data structures, algorithms, and coding challenges that sharpen
                                my problem-solving skills.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
