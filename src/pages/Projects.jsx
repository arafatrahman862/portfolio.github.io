import React, { useState } from "react";
import { Helmet } from "react-helmet";

import yokuImg from "../assets/yoku.jpg";
import toyImg from "../assets/Toy.png";
import chefImg from "../assets/chef.jpg";
import gourmetImg from "../assets/Gourmet.png";
import ridexImg from "../assets/Ridex.png";
import flexImg from "../assets/Flex.png";
import teaImg from "../assets/Tea.png";
import aiImg from "../assets/Ai.png";
import geoImg from "../assets/Geo.png";
import bikeImg from "../assets/Bike.png";

const projectsData = [
    {
        id: 1,
        title: "RIDE-X",
        name: "RIDE-X – Ride Management App",
        description:
            "Ride management application with booking, ride tracking, and role-based dashboards.",
        category: "Fullstack",
        image: ridexImg,
        frontendTech: "React.js, TypeScript, Redux Toolkit, RTK Query, Tailwind CSS, ShadCN/ UI, React - Leaflet, Recharts, Zod, React Hook Form",
        backendTech: "Node.js, Express.js, MongoDB, Mongoose, JWT, Passport.js, bcryptjs, Multer, Cloudinary, Nodemailer, PDFKit, SSLCommerz, zod",
        frontendRepo: "https://github.com/arafatrahman862/Assingment6-Frontend",
        backendRepo: "https://github.com/arafatrahman862/Assingment5",
        live: "https://assingment6.vercel.app/",
    },
    {
        id: 2,
        title: "FLEXFLOW",
        name: "FlexFlow – Task Management App",
        description:
            "Productivity and task management tool with lists, filters, and team-focused workflows.",
        category: "Fullstack",
        image: flexImg,
        frontendTech: "ReactJS, React Router, JavaScript, Tailwind CSS, Firebase, Redux Toolkit, RTK Query, DaisyUI, React Swiper",
        backendTech: "Node.js, Express.js, MongoDB, JWT",
        frontendRepo: "https://github.com/flexflow0/flex-flow",
        backendRepo: "https://github.com/flexflow0/flex-flow-server",
        live: "https://flex-flow.web.app/",
    },
    ,
    {
        id: 3,
        title: "YOKU",
        name: "Yoku – Sports Equipment Store",
        description:
            "A full-stack sports equipment platform with product management, secure payments, and user dashboards.",
        category: "Fullstack",
        image: yokuImg,
        frontendTech: "ReactJS, React Router, JavaScript, Tailwind CSS, Stripe.js, DaisyUI, Firebase",
        backendTech: "Node.js, Express.js, MongoDB, JWT",
        frontendRepo: "https://github.com/arafatrahman862/Yoku-Client",
        backendRepo: "https://github.com/arafatrahman862/Yoku-Server",
        live: "https://assignment12-34f50.web.app/",
    },
    {
        id: 4,
        title: "TOY MARKETPLACE",
        name: "Toy Marketplace – MERN App",
        description:
            "A MERN stack toy marketplace where users can browse, filter, and manage toy listings with authentication.",
        category: "Fullstack",
        image: toyImg,
        frontendTech: "ReactJS, React Router, JavaScript, Tailwind CSS, Firebase, DaisyUI",
        backendTech: "Node.js, Express.js, MongoDB",
        frontendRepo: "https://github.com/arafatrahman862/Toy-Marketplace-Client",
        backendRepo: "https://github.com/arafatrahman862/Toy-Marketplace-Server",
        live: "https://assignment-11-6866e.web.app/",
    },
    {
        id: 5,
        title: "GOURMET RESTAURANT",
        name: "Gourmet Restaurant – Fullstack",
        description:
            "A restaurant management and ordering platform with menu browsing, reservations, and admin features.",
        category: "Fullstack",
        image: gourmetImg,
        frontendTech: "ReactJS, React Router, JavaScript, Tailwind CSS, Firebase, DaisyUI, React Hot Toast, React Query, Swiper, Axios, React Icons",
        backendTech: "Node.js, Express.js, MongoDB, JWT",
        frontendRepo: "https://github.com/arafatrahman862/Gourmet_Resturant",
        backendRepo:
            "https://github.com/arafatrahman862/Gourmet_Resturant_Server_Side",
        live: "https://bistro-boss-2aa88.web.app/",
    },
    {
        id: 6,
        title: "CHEF RECIPE HUNTER",
        name: "Chef Recipe Hunter – MERN App",
        description:
            "A recipe discovery website with chef profiles, recipe details, and user authentication with Firebase.",
        category: "Fullstack",
        image: chefImg,
        frontendTech: "ReactJS, React Router, JavaScript, Tailwind CSS, Firebase, DaisyUI",
        backendTech: "Node.js, Express.js, MongoDB",
        frontendRepo:
            "https://github.com/arafatrahman862/Chef-Recipe-Hunter-Client",
        backendRepo:
            "https://github.com/arafatrahman862/Chef-Recipe-Hunter-Server",
        live: "https://assingment10-6940a.web.app/",
    },
   
    
    {
        id: 7,
        title: "TEA HOUSE",
        name: "Tea House – Landing Page",
        description:
            "A modern landing page for a tea brand with smooth layout, responsive design, and subtle animations.",
        category: "Frontend",
        image: teaImg,
        frontendTech: "HTML, CSS, Tailwind CSS, JavaScript",
        backendTech: "",
        frontendRepo:
            "https://github.com/arafatrahman862/Tea-House/tree/main/tea-house-resources",
        live: "https://65357cca57ebb925779f6ef9--capable-macaron-a164ea.netlify.app/",
    },
    {
        id: 8,
        title: "AI UNIVERSE",
        name: "AI Universe – Tools Showcase",
        description:
            "Category-based layout for exploring AI tools and their details using dynamic content rendering.",
        category: "Frontend",
        image: aiImg,
        frontendTech: "ReactJS, JavaScript, Tailwind CSS",
        backendTech: "",
        frontendRepo:
            "https://github.com/arafatrahman862/Al-Universe/tree/main/assingment5",
        live: "https://65357a7cf393d270c7877184--quiet-figolla-98a391.netlify.app/",
    },
    {
        id: 9,
        title: "GEOMETRY GENIUS",
        name: "Geometry Genius – Geometry Toolkit",
        description:
            "Interactive geometry calculator for shapes with dynamic result updates and clean UI.",
        category: "Frontend",
        image: geoImg,
        frontendTech: "JavaScript, HTML, CSS",
        backendTech: "",
        frontendRepo:
            "https://github.com/arafatrahman862/Geometry/tree/main/assingment4",
        live: "https://653579db8b4dfd20c851f548--stellular-frangipane-caab72.netlify.app/",
    },
    {
        id: 10,
        title: "BIKERZZ-ZONE",
        name: "Bikerzz Zone – Bike Store",
        description:
            "Bike store landing page with sections for featured bikes, offers, and customer testimonials.",
        category: "Frontend",
        image: bikeImg,
        frontendTech: "HTML, CSS, Tailwind CSS",
        backendTech: "",
        frontendRepo:
            "https://github.com/arafatrahman862/bikerzz-zone/tree/main/biker-zone",
        live: "https://6535784de7d3242508546347--beautiful-faun-8a760d.netlify.app/",
    },
];

const filters = ["All", "Fullstack", "Frontend"];

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredProjects =
        activeFilter === "All"
            ? projectsData
            : projectsData.filter((p) => p.category === activeFilter);

    return (
        <section
            className="w-full px-4 md:px-8 lg:px-16 py-16"
            data-aos="zoom-in"
        >
            <Helmet>
                <title>Portfolio | Projects</title>
            </Helmet>

            {/* Big dark card */}
            <div className="max-w-6xl mx-auto bg-[#050018]/95 rounded-[32px] border border-violet-500/30 shadow-[0_0_50px_rgba(0,0,0,0.55)] px-6 md:px-10 py-10 md:py-12">
                {/* Heading + intro */}
                <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide text-white">
                        MY PROJECTS
                    </h2>
                    <p className="mt-2 text-sm md:text-base text-gray-300 max-w-2xl">
                        Insights, tutorials, and projects I&apos;ve shared along my journey.
                    </p>
                </div>

                {/* Filter buttons */}
                <div className="mb-10 flex flex-wrap gap-3">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition
                ${activeFilter === filter
                                    ? "bg-gradient-to-r from-fuchsia-500 to-violet-500 border-transparent text-white shadow-lg shadow-violet-700/40"
                                    : "border-gray-600 text-gray-300 hover:border-violet-400 hover:text-white"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Project cards */}
                <div className="grid gap-8 md:grid-cols-2">
                    {filteredProjects.map((project) => {
                        const isFrontendOnly =
                            project.category === "Frontend" || !project.backendRepo;

                        return (
                            <article
                                key={project.id}
                                className="group bg-gradient-to-b from-[#080f2b] to-[#050018] border border-[#262450] rounded-2xl overflow-hidden shadow-lg hover:shadow-violet-900/70 transition-transform duration-300 hover:-translate-y-1 flex flex-col"
                            >
                                {/* Image area with scroll-down hover */}
                                <div className="relative w-full h-56 md:h-64 overflow-hidden">
                                    <div
                                        className="
                      w-full h-full
                      bg-top bg-cover
                      transition-[background-position] duration-[6000ms]
                      group-hover:bg-bottom
                    "
                                        style={{ backgroundImage: `url(${project.image})` }}
                                    />
                                    <div className="pointer-events-none absolute inset-3 rounded-xl border border-white/80 shadow-md" />
                                </div>

                                {/* Content */}
                                <div className="p-5 md:p-6 flex flex-col gap-4">
                                    {/* Title */}
                                    <div className="space-y-1">
                                        <span className="inline-flex items-center text-[11px] font-semibold tracking-[0.18em] text-fuchsia-300 uppercase">
                                            {project.title}
                                        </span>
                                        <p className="text-lg md:text-xl font-semibold text-white">
                                            {project.name}
                                        </p>
                                    </div>

                                    {/* Description */}
                                    <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tech info */}
                                    <div className="grid gap-3 text-xs md:text-sm">
                                        <div>
                                            <span className="font-semibold text-gray-400 block mb-0.5">
                                                Category
                                            </span>
                                            <span
                                                className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium ${project.category === "Fullstack"
                                                        ? "bg-emerald-500/15 text-emerald-200"
                                                        : "bg-violet-600/20 text-violet-200"
                                                    }`}
                                            >
                                                {project.category}
                                            </span>
                                        </div>

                                        <div>
                                            <span className="font-semibold text-gray-400 block mb-0.5">
                                                Frontend Technologies
                                            </span>
                                            <span className="text-gray-200">
                                                {project.frontendTech}
                                            </span>
                                        </div>

                                        {!isFrontendOnly && project.backendTech && (
                                            <div>
                                                <span className="font-semibold text-gray-400 block mb-0.5">
                                                    Backend Technologies
                                                </span>
                                                <span className="text-gray-200">
                                                    {project.backendTech}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Links */}
                                    <div
                                        className={`mt-2 grid gap-3 text-xs md:text-sm ${isFrontendOnly ? "sm:grid-cols-2" : "sm:grid-cols-3"
                                            }`}
                                    >
                                        {/* Frontend repo */}
                                        <a
                                            href={project.frontendRepo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center justify-between rounded-xl bg-[#0b102c] border border-violet-600/60 px-3 py-2 hover:bg-violet-600/20 transition"
                                        >
                                            <span className="font-semibold text-gray-100">
                                                Frontend Repo
                                            </span>
                                            <span className="underline text-violet-300 text-[11px]">
                                                View →
                                            </span>
                                        </a>

                                        {/* Backend repo (hidden for frontend-only projects) */}
                                        {!isFrontendOnly && (
                                            <a
                                                href={project.backendRepo}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center justify-between rounded-xl bg-[#0b102c] border border-violet-600/60 px-3 py-2 hover:bg-violet-600/20 transition"
                                            >
                                                <span className="font-semibold text-gray-100">
                                                    Backend Repo
                                                </span>
                                                <span className="underline text-violet-300 text-[11px]">
                                                    View →
                                                </span>
                                            </a>
                                        )}

                                        {/* Live link */}
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center justify-between rounded-xl bg-[#0b102c] border border-emerald-500/70 px-3 py-2 hover:bg-emerald-500/15 transition"
                                        >
                                            <span className="font-semibold text-gray-100">
                                                Live Link
                                            </span>
                                            <span className="underline text-emerald-300 text-[11px]">
                                                Visit →
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
