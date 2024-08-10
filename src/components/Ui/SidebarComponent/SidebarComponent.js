"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

const SidebarComponent = ({ links, width }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const showFullContent = width >= 8;

  const toggleMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  return (
    <div className="flex flex-col justify-between flex-1 mt-2 ">
      <nav className="flex flex-col items-start">
        {links.map((link, index) => (
          <div key={index} className="w-full">
            <div
              className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-400"
              onClick={() => (link.subLinks ? toggleMenu(index) : null)}
            >
              <Link href={link.url || "/"}>
                <div className="flex items-center px-2 ">
                  <link.icon className="w-6 h-6 mx-auto" />
                  {showFullContent && (
                    <span className="mx-4 font-medium">{link.title}</span>
                  )}
                </div>
              </Link>

              {link.subLinks && (
                <div>
                  {openMenu === index ? (
                    <FiChevronDown className="w-4 h-4" />
                  ) : (
                    <FiChevronRight className="w-4 h-4" />
                  )}
                </div>
              )}
            </div>
            {link.subLinks && openMenu === index && (
              <div className="">
                {link.subLinks.map((subLink, subIndex) => (
                  <Link
                    key={subIndex}
                    className="flex  px-6 py-2 hover:bg-gray-400"
                    href={subLink.url}
                  >
                    <subLink.icon className="w-6 h-6 mx-2" />
                    {showFullContent && (
                      <span className="mx-4 font-medium">{subLink.title}</span>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default SidebarComponent;
