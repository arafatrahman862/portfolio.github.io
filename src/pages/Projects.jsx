import React from 'react';
import { Helmet } from 'react-helmet';


import '../styles/Projects.css'

const Projects = () => {
    return (
        <div className='md:h-screen pb-12'  data-aos="zoom-in">
            <Helmet><title>Portfolio | Projects</title></Helmet>
            <p className='text-4xl pb-6 text-center text-black'>Projects</p>
            <div className='md:flex  md:justify-center md:items-center m-0 px-2 pb-36'>
                <div className='container '>

                    <div className='box box1 ' >
                        
                        <div className='sub-container'>

                            <p>Technologies: ReactJs, React Router, JavaScript, Tailwind CSS, Node.js, ExpressJs, MongoDB, Firebase, Stripe.js.</p>
                            <div className='flex gap-4 justify-center items-center pt-2'>
                                <button className='btn md:btn-outline md:btn-success btn-outline btn-success'>
                                    <a href="https://github.com/arafatrahman862/Yoku-Client">GITHUB</a>
                                    
                                </button>
                                <button className='btn btn-outline btn-success '>
                                    <a href="https://6531644105546c4bf4462df8--vermillion-paprenjak-5f3c27.netlify.app/">LIVE SITE</a>
                                    
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