import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import { Helmet } from 'react-helmet';

const Skills = () => {
    return (
        <div className='md:flex gap-12 mt-12 text-black h-screen' data-aos="fade-right">
            <Helmet><title>Portfolio | Skills</title></Helmet>
            <div className='md:w-1/2'>
<p className='text-center text-3xl'>Frontend:</p>
<p className='mt-4'>HTML 5</p>
<div className='flex mt-2'>
    
    <p>80% 
</p>
<div className='w-3/4  ml-4'><ProgressBar completed={75} maxCompleted={100} /></div>
</div>
<p className='mt-4'>CSS 3</p>
<div className='flex mt-2'>
    
    <p>80% 
</p>
<div className='w-3/4 ml-4  '><ProgressBar completed={70} maxCompleted={100} /></div>
</div>
<p className='mt-4'>JavaScript (ES6)</p>
<div className='flex mt-2'>
    
    <p>80% 
</p>
<div className='w-3/4 ml-4'><ProgressBar completed={80} maxCompleted={100} /></div>
</div>
<p className='mt-4'>React.js</p>
<div className='flex mt-2'>
    
    <p>80% 
</p>
<div className='w-3/4 ml-4'><ProgressBar completed={80} maxCompleted={100} /></div>
</div>
<p className='mt-4'>Firebase</p>
<div className='flex mt-2'>
    
    <p>80% 
</p>
<div className='w-3/4 ml-4'><ProgressBar completed={70} maxCompleted={100} /></div>
</div>
<p className='mt-4'>Tailwind CSS</p>
<div className='flex mt-2'>
    
    <p>80% 
</p>
<div className='w-3/4 ml-4'><ProgressBar completed={80} maxCompleted={100} /></div>
</div>
<p className='mt-4'>Bootstrap 5</p>
<div className='flex mt-2'>
    
    <p>80% 
</p>
<div className='w-3/4 ml-4'><ProgressBar completed={70} maxCompleted={100} /></div>
</div>

            </div>
            <div className='md:w-1/2 pt-3'>
<p className='text-center text-3xl'>Backend:</p>
<p className='mt-4'>Node.js</p>
<div className='flex mt-2'>
    
    <p>80% 
</p>
<div className='w-3/4 ml-4'><ProgressBar completed={60} maxCompleted={100} /></div>
</div><p className='mt-4'>Express.js</p>
<div className='flex mt-2'>
    
    <p>80% 
</p>
<div className='w-3/4 ml-4'><ProgressBar completed={75} maxCompleted={100} /></div>
</div><p className='mt-4'>MongoDB</p>
<div className='flex mt-2'>
    
    <p>80% 
</p>
<div className='w-3/4 ml-4'><ProgressBar completed={70} maxCompleted={100} /></div>
</div>
            </div>
        </div>
    );
};

export default Skills;