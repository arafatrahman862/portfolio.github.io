import React from 'react';
import CountUp from 'react-countup';
import { Helmet } from 'react-helmet';

const About = () => {
    return (
        <div className='h-screen text-black pt-8'>
            <Helmet><title>Portfolio | About</title></Helmet>
            <p className='text-4xl text-center'>About <span className='text-purple-600'>Me</span></p>
            <div className='grid md:grid-cols-4 gap-4 md:mt-12 mt-6 pb-2'  data-aos="fade-up"
                data-aos-anchor-placement="top-center">
                <div className='space-y-3'>
                    <p>First Name: Arafat</p>
                    <p>Age: 23 Years</p>
                    <p>Phone: +8801627062547</p>
                    <p>Address: Dhaka, Bangladesh</p>
                    <p>Language: Bangla, English</p>
                </div>
                <div className='space-y-3'>
                    <p>Last Name: Rahman</p>
                    <p>Nationality: Bangladeshi</p>
                    <p >Email: <a href="arafatrahman862@gmail.com" className='text-purple-600'>arafatrahman862@gmail.com</a>
                    </p>
                    <p>LinkedIn: <a href="linkedin.com/in/arafat-rahman-516206161" className='text-purple-600'>Arafat Rahman</a>
                    </p>
                    <p>Github: <a href="https://github.com/arafatrahman862" className='text-purple-600'>Arafat Rahman</a>
                    </p>
                </div>
                <div className='px-6 py-4 border rounded-lg border-lime-200 hover:bg-lime-200'  data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom">
                    <CountUp end={20} className='text-6xl text-purple-600' /><span className='text-6xl text-purple-600'>+</span>
                    <p className='text-3xl'>Completed Projects</p>
                </div>
                <div className='px-6 py-4 border rounded-lg  border-lime-200 hover:bg-lime-200'  data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom">
                    <CountUp end={100} className='text-6xl text-purple-600' /><span className='text-6xl text-purple-600'>+</span>
                    <p className='text-3xl'>Problem Solved</p>
                </div>
            </div>
        </div>
    );
};

export default About;