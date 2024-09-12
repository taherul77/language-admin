"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { usePathname } from "next/navigation";

// Define the types for the link objects
interface SubLink {
  title: string;
  url: string;
  icon: React.ElementType; // Type for the icon component
}

interface LinkItem {
  title: string;
  url: string;
  icon: React.ElementType; // Type for the icon component
  subLinks?: SubLink[];
}

interface SidebarComponentProps {
  links: LinkItem[];
  width: number;
}

const SidebarComponent: React.FC<SidebarComponentProps> = ({ links, width }) => {
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const showFullContent = width >= 8;
  const pathname = usePathname();

  const toggleMenu = (index: number) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  const isActive = (url: string) => {
    return pathname === url;
  };

  const isMainMenuActive = (link: LinkItem) => {
    // Check if the main link is active or if any of its sublinks are active
    if (isActive(link.url)) return true;
    if (link.subLinks) {
      return link.subLinks.some((subLink) => isActive(subLink.url));
    }
    return false;
  };

  return (
    <div className="flex flex-col justify-between flex-1">
      <nav className="flex flex-col items-start">
        {links.map((link, index) => (
          <div key={index} className="w-full">
            <div
              className={`flex items-center justify-between px-4 py-3 cursor-pointer uppercase hover:bg-gray-400 ${
                isMainMenuActive(link) ? "bg-gray-300 text-[#921315]" : ""
              }`}
              onClick={() => (link.subLinks ? toggleMenu(index) : undefined)}
            >
              <Link href={link.url || "/"}>
                <div className="flex items-center uppercase px-2">
                  <link.icon
                    className={`w-6 h-6 mx-auto ${
                      isMainMenuActive(link) ? "text-[#921315]" : ""
                    }`}
                  />
                  {showFullContent && (
                    <span
                      className={`mx-4 font-medium ${
                        isMainMenuActive(link) ? "text-[#921315]" : ""
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
                      isActive(subLink.url) ? "bg-gray-300 text-[#921315]" : ""
                    }`}
                    href={subLink.url}
                  >
                    <subLink.icon
                      className={`w-6 h-6 mx-2 ${
                        isActive(subLink.url) ? "text-[#921315]" : ""
                      }`}
                    />
                    {showFullContent && (
                      <span
                        className={`mx-4 font-medium ${
                          isActive(subLink.url) ? "text-[#921315]" : ""
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
