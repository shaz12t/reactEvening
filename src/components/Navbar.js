
import { Link } from "react-router-dom";
import React from "react";
 
function Navbar() {
  return (
    <div className="border-transparent border-opacity-50  shadow-xl j px-4  top-0  bg-gradient-to-r from-neutral-900  via-gray-800 to-yellow-900 ">
      <nav className="flex justify-between px-4 items-center">
        <Link to={"/"}>
          {" "}
          <h1 className="cursor-pointer text-[50px] font-extrabold">
            <span className="text-white">Crypto</span><span className="text-yellow-800">Crawler</span>
          </h1>
        </Link>
        <div className=" flex font-semibold text-[25px] gap-10">
          <Link to={"/Top10"}>
            {" "}
            <p className="cursor-pointer text-white text-[30px] hover:text-yellow-800 ">Top</p>
          </Link>
          <Link to={"/Trending"}>
            {" "}
            <p className="cursor-pointer text-white text-[30px] hover:text-yellow-800">Trending</p>
          </Link>
          <Link to={"/watchlist"}>
            {" "}
            <p className="cursor-pointer text-white text-[30px] hover:text-yellow-800">watchlist</p>
          </Link>
          
        </div>
      </nav>
    </div>
  );
}

export default Navbar;