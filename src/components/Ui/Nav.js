"use client"
import React from "react";
import { HiOutlineMenuAlt2, HiOutlineMenu } from "react-icons/hi";
import Profile from "./Profile/Profile";
const Nav = ({showSidebar, setShowSidebar}) => {
    const img ="/image/drug-international-logo.png"
  return (
    <div
      className="flex justify-between items-center p-1 bg-gray-100 "
      onContexMenu={(e) => e.preventDefault}
    >
      <div className="flex">
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="hover:bg-black/20 transition-all rounded-full p-2 text-gray-500"
        >
          {showSidebar ? (
            <HiOutlineMenu size={32} />
          ) : (
            <HiOutlineMenuAlt2 size={32} />
          )}
        </button>
      </div>



      <Profile img={img}></Profile>


    </div>
  );
};

export default Nav;
