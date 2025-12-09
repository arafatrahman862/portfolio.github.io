import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import contact from "../assets/contact.json";
import Lottie from "lottie-react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_eeunz0b",
                "template_80ckk3o",
                form.current,
                "rrY-07FCTyqhQ6aFW"
            )
            .then(
                () => {
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Mail Sent",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    form.current.reset();
                },
                (error) => {
                    console.error(error.text);
                    Swal.fire({
                        icon: "error",
                        title: "Oops…",
                        text: "Something went wrong. Please try again.",
                    });
                }
            );
    };

    return (
        <section
            className="min-h-screen w-full px-4 md:px-8 lg:px-16 py-16"
            data-aos="zoom-in-up"
        >
            <Helmet>
                <title>Portfolio | Contact</title>
            </Helmet>

            {/* Outer panel */}
            <div className="max-w-6xl mx-auto bg-[#050018]/95 rounded-[32px] border border-violet-500/30 shadow-[0_0_50px_rgba(0,0,0,0.55)] px-6 md:px-10 py-10 md:py-12 text-white">
                {/* Heading */}
                <div className="mb-10 text-center">
                    <p className="text-sm uppercase tracking-[0.25em] text-violet-300">
                        Let&apos;s talk
                    </p>
                    <h2 className="text-3xl md:text-4xl font-extrabold mt-1">
                        Get in <span className="text-violet-400">Touch</span>
                    </h2>
                    <p className="mt-3 text-sm md:text-base text-gray-300 max-w-xl mx-auto">
                        Have a project in mind or just want to say hi? Drop a message and
                        I&apos;ll get back to you as soon as possible.
                    </p>
                </div>

                {/* Content */}
                <div className="flex flex-col md:flex-row gap-10 items-center">
                    {/* Lottie / Illustration */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <Lottie
                            className="w-full max-w-md"
                            animationData={contact}
                            loop={true}
                        />
                    </div>

                    {/* Form */}
                    <div className="w-full md:w-1/2">
                        <form
                            ref={form}
                            onSubmit={sendEmail}
                            className="space-y-5 text-sm md:text-base"
                        >
                            {/* Name */}
                            <label className="flex flex-col gap-1">
                                <span className="font-semibold text-gray-200">Name</span>
                                <input
                                    type="text"
                                    name="user_name"
                                    placeholder="Your name"
                                    required
                                    className="w-full rounded-xl border border-violet-500/40 bg-[#050018] px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-500/40 transition"
                                />
                            </label>

                            {/* Email */}
                            <label className="flex flex-col gap-1">
                                <span className="font-semibold text-gray-200">Email</span>
                                <input
                                    type="email"
                                    name="user_email"
                                    placeholder="you@example.com"
                                    required
                                    className="w-full rounded-xl border border-violet-500/40 bg-[#050018] px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-500/40 transition"
                                />
                            </label>

                            {/* Message */}
                            <label className="flex flex-col gap-1">
                                <span className="font-semibold text-gray-200">Message</span>
                                <textarea
                                    name="message"
                                    rows="5"
                                    placeholder="Write your message here..."
                                    required
                                    className="w-full rounded-xl border border-violet-500/40 bg-[#050018] px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-500/40 transition resize-none"
                                />
                            </label>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="mt-2 inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm md:text-base font-semibold bg-gradient-to-r from-violet-500 to-emerald-500 hover:from-violet-400 hover:to-emerald-400 border border-transparent shadow-lg shadow-violet-700/40 transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-[#050018]"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
