import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-[radial-gradient(circle_at_top_left,_hsla(260,90%,40%,0.6),_transparent_50%),_radial-gradient(circle_at_bottom_right,_hsla(165,80%,40%,0.5),_transparent_50%)] bg-[#050014] flex items-start md:items-center justify-center px-4 md:px-6 lg:px-10 py-6 md:py-10">

      {/* Main app shell */}
      <div className="w-full max-w-6xl bg-[#050018]/95 rounded-[32px] border border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.55)] px-4 sm:px-6 md:px-10 pt-4 md:pt-6 pb-8 md:pb-10 text-white">
        <Navbar />

        {/* Divider (optional, looks neat) */}
        <div className="mt-3 mb-6 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Page content */}
        <Outlet />
      </div>
    </div>
  );
};

export default App;
