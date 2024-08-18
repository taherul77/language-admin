"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { useRouter } from "next/navigation";

const SidebarComponent = ({ links, width }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const showFullContent = width >= 8;
  const router = useRouter();
  const currentRoute = router.pathname;

  const toggleMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  const isActive = (url) => {
    return currentRoute === url;
  };

  return (
    <div className="flex flex-col justify-between flex-1 mt-2 ">
      <nav className="flex flex-col items-start">
        {links.map((link, index) => (
          <div key={index} className="w-full">
            <div
              className={`flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-400 ${
                isActive(link.url) ? "bg-gray-300 text-red-500" : ""
              }`}
              onClick={() => (link.subLinks ? toggleMenu(index) : null)}
            >
              <Link href={link.url || "/"}>
                <div className="flex items-center px-2">
                  <link.icon
                    className={`w-6 h-6 mx-auto ${
                      isActive(link.url) ? "text-red-500" : ""
                    }`}
                  />
                  {showFullContent && (
                    <span
                      className={`mx-4 font-medium ${
                        isActive(link.url) ? "text-red-500" : ""
                      }`}
                    >
                      {link.title}
                    </span>
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
              <div>
                {link.subLinks.map((subLink, subIndex) => (
                  <Link
                    key={subIndex}
                    className={`flex px-6 py-2 hover:bg-gray-400 ${
                      isActive(subLink.url) ? "bg-gray-300 text-red-500" : ""
                    }`}
                    href={subLink.url}
                  >
                    <subLink.icon
                      className={`w-6 h-6 mx-2 ${
                        isActive(subLink.url) ? "text-red-500" : ""
                      }`}
                    />
                    {showFullContent && (
                      <span
                        className={`mx-4 font-medium ${
                          isActive(subLink.url) ? "text-red-500" : ""
                        }`}
                      >
                        {subLink.title}
                      </span>
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
