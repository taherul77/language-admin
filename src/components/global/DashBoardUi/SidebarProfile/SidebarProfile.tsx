import React from "react";
import Link from "next/link";
import Image from "next/image";

// Define the types for the component props


const SidebarProfile = () => {
  return (
    <div className="flex items-center justify-center py-2 px-2 bg-gray gap-2">
      <Link
        className="flex items-center align-center justifyContent-center gap-1"
        href="/"
      >


<div className="text-4xl uppercase font-extrabold">
  <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#118FC1] to-[#26794f] tracking-[0.4em]">
    Shining Education
  </span>
</div>


      

        {/* <Image
          height={60}
          width={100}
          src={logo}
          className="w-40"
          alt="Logo"
        /> */}
      </Link>
    </div>
  );
};

export default SidebarProfile;
