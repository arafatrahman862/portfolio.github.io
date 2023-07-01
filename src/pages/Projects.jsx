import React from 'react';
import { Helmet } from 'react-helmet';

import '../pages/Projects.css'

const Projects = () => {
    return (
        <div className='min-h-screen ' data-aos="zoom-in">
            <Helmet><title>Portfolio | Projects</title></Helmet>
            <p className='text-4xl pb-6 text-center text-black'>Projects</p>
            <div className='md:flex  md:justify-center md:items-center m-0 px-2 pb-36'>
                <div className='container'>

                    <div className='box box1 ' >
                        <div className='sub-container'>

                            <p>Technologies: ReactJs, React Router, JavaScript, Tailwind CSS, Node.js, ExpressJs, MongoDB, Firebase, Stripe.js.</p>
                            <div className='flex gap-4 justify-center items-center pt-2'>
                                <button className='btn btn-outline btn-success '>
                                    <a href="https://github.com/arafatrahman862/Yoku-Client">GITHUB</a>
                                    
                                </button>
                                <button className='btn btn-outline btn-success '>
                                    <a href="https://assignment12-34f50.web.app/">LIVE SITE</a>
                                    
                                </button>
                            </div>
                        </div>
                    </div>


                    <div className='box box2' >
                        <div className='sub-container'>

                        Technologies: ReactJs, React Router, JavaScript, Tailwind CSS, Node.js, ExpressJs, MongoDB, Firebase.
                            <div className='flex gap-4 justify-center items-center pt-2'>
                                <button className='btn btn-outline btn-success '>
                                    <a href="https://github.com/arafatrahman862/Toy-Marketplace-Client/tree/main">GITHUB</a>
                                    
                                </button>
                                <button className='btn btn-outline btn-success'>
                                    <a href="https://assignment-11-6866e.web.app/">LIVE SITE</a>
                                    
                                </button>
                            </div>
                        </div>
                    </div>


                    <div className='box box3' >
                        <div className='sub-container'>

                        Technologies: ReactJs, React Router, JavaScript, Tailwind CSS, Firebase.
                            <div className='flex gap-4 justify-center items-center pt-2'>
                                <button className='btn btn-outline btn-success'>
                                    <a href="https://github.com/arafatrahman862/Chef-Recipe-Hunter-Client">GITHUB</a>
                                    
                                </button>
                                <button className='btn btn-outline btn-success'>
                                    <a href="https://assingment10-6940a.web.app/">LIVE SITE</a>
                                    
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Projects;