import React from "react";
import logo from "./assets/MORA-logo-image.png";

function Navbar() {
  return (
    <div className="flex items-center justify-between w-full h-16 bg-white">
      <div className="w-32 ml-12">
        {/* logo */}
        <img
          src={logo}
          className="aspect-video w-full object-cover object-center h-10"
        />
      </div>
      <div className="flex items-center justify-between w-1/2 h-full">
        <div className="w-72 h-10 border-black border-2 ">
          {/* home/about etc. */}
          <p>home</p>
        </div>

        <div className="w-1/5 h-8 border-[#6554D9] border-1 rounded-4xl mr-8">
          {/* signin/signup button */}
          <button className="w-full h-full mx-auto my-auto text-[14px] font-semibold cursor-pointer">
            Sign In / Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
