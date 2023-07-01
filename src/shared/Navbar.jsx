import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const navOption = <>
    <Link to="/"><a className='cursor-pointer' href="#home"> Home</a></Link>
    <Link to="/about"><a className='cursor-pointer' href="#about"> About</a></Link>
    <Link to="/skills"><a className='cursor-pointer' href="#skills"> Skills</a></Link>
    <Link to="/projects"><a className='cursor-pointer' href="#projects"> Projects</a></Link>
   <Link to='/contact'> <a className='cursor-pointer' href="#contact"> Contact</a></Link>
    
    
    </>

    

    return (
        <div>
            <div className="navbar md:w-[45%] w-1/4 bg-green-400 md:mx-auto rounded-full  font-semibold text-black  md:mb-6">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content md:mt-3 z-[1] p-2 shadow  rounded-box w-52">
        {navOption}
      </ul>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal -pl-10 space-x-20">
      {navOption}
    </ul>
  </div>

</div>
        </div>
    );
};

export default Navbar;