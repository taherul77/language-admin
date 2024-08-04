import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { HiOutlineMenu, HiOutlineMenuAlt2 } from "react-icons/hi";
import { useMediaQuery } from 'react-responsive';

const SidebarProfile = ({ setShowSidebar, showSidebar, logo }) => {
    const isSmallScreen = useMediaQuery({ maxWidth: 640 });
    const isMediumScreen = useMediaQuery({ minWidth: 641, maxWidth: 1024 });
    const isLargeScreen = useMediaQuery({ minWidth: 1025 });
  return (
    <div className="flex items-center justify-center  py-2 px-2 bg-gray gap-2">
      {/* <Link
        className="flex items-center align-center justifyContent-center gap-1"
        href="/"
      >
        <Image
          loading="lazy"
          height={80}
          width={120}
          src={logo}
          className="w-52 sm:h-auto md:h-[2vh] lg:h-[4vh]"
          alt=""
        />
      </Link> */}
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="hover:bg-black/20 transition-all rounded-full p-2 text-gray-500"
      >
        {showSidebar ? (
          isSmallScreen ? (
            <HiOutlineMenu size={20} />
          ) : isMediumScreen ? (
            <HiOutlineMenu size={24} />
          ) : (
            <HiOutlineMenu size={32} />
          )
        ) : isSmallScreen ? (
          <HiOutlineMenuAlt2 size={20} />
        ) : isMediumScreen ? (
          <HiOutlineMenuAlt2 size={24} />
        ) : (
          <HiOutlineMenuAlt2 size={32} />
        )}
      </button>
    </div>
  )
}

export default SidebarProfile

