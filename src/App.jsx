import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './shared/Navbar';

const App = () => {
  return (
    <div className='md:px-16 px-4 pt-8  bg-gradient-to-r from-[#D8B5FF] to-[#1EAE98]'>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default App;