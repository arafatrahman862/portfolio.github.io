import React from "react";
import { Helmet } from "react-helmet";
import {
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiRedux,
    SiAxios,
    SiFramer,
    SiFigma,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiReactquery,
} from "react-icons/si";

const skills = [
    { name: "HTML", icon: SiHtml5, level: "Intermediate" },
    { name: "CSS", icon: SiCss3 },
    { name: "TAILWIND", icon: SiTailwindcss, level: "Advanced" },
    { name: "JAVASCRIPT", icon: SiJavascript, level: "Intermediate" },
    { name: "TYPESCRIPT", icon: SiTypescript },
    { name: "REACT", icon: SiReact, level: "Advanced" },
    { name: "NEXTJS", icon: SiNextdotjs },
    { name: "REACT QUERY", icon: SiReactquery, level: "Advanced" },
    { name: "REDUX", icon: SiRedux, level: "Intermediate" },
    { name: "AXIOS", icon: SiAxios },
    { name: "FRAMER MOTION", icon: SiFramer },
    { name: "FIGMA", icon: SiFigma },
    { name: "NODE.JS", icon: SiNodedotjs, level: "Intermediate" },
    { name: "EXPRESS.JS", icon: SiExpress },
    { name: "MONGODB", icon: SiMongodb, level: "Intermediate" },
];

const levelColors = {
    Advanced: "bg-violet-600 text-white",
    Intermediate: "bg-blue-600 text-white",
};

const Skills = () => {
    return (
        <section
            className="w-full px-4 md:px-8 lg:px-16 py-16 text-white"
            data-aos="fade-right"
        >
            <Helmet>
                <title>Portfolio | Skills</title>
            </Helmet>

            <div className="max-w-6xl mx-auto bg-[#050018]/95 rounded-[32px] border border-violet-500/30 shadow-[0_0_50px_rgba(0,0,0,0.55)] px-6 md:px-10 py-10 md:py-12">
                <div className="mb-10">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide">
                        SKILLS
                    </h2>
                    <p className="mt-2 text-sm md:text-base text-gray-300">
                        Technologies and tools I use to build modern, performant web
                        applications.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                    {skills.map((skill, idx) => {
                        const Icon = skill.icon;
                        const level = skill.level;

                        return (
                            <div key={idx} className="relative group flex items-center justify-center">

                                {/* Level Badge — appears ONLY on hover */}
                                {level && (
                                    <span
                                        className={`
                      absolute -top-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
                      transition-all duration-300 text-[11px] font-semibold px-3 py-0.5 rounded-full shadow-lg 
                      ${levelColors[level]}
                    `}
                                    >
                                        {level}
                                    </span>
                                )}

                                <div
                                    className={`
                    flex flex-col items-center justify-center w-full h-28 sm:h-32 md:h-36 
                    rounded-2xl bg-[#07091b] border border-transparent shadow-md 
                    transition-all duration-300
                    group-hover:border-violet-500/70 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]
                  `}
                                >
                                    <Icon className="text-3xl sm:text-4xl mb-3 text-white group-hover:text-violet-300 transition-colors duration-300" />
                                    <span className="text-[11px] sm:text-xs font-semibold tracking-[0.15em] text-gray-300 group-hover:text-white text-center uppercase">
                                        {skill.name}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
