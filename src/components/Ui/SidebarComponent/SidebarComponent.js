import React from "react";

const SidebarComponent = ({ links, horizontalPanelSize }) => {
  const showFullContent = horizontalPanelSize >= 10;
console.log(horizontalPanelSize);

  return (
    <div className="flex flex-col justify-between flex-1 mt-6">
      <nav>
        {links.map((link, index) => (
          <a
            key={index}
            className="flex items-center justify-center px-4 py-2 mt-5 "
            href="#"
          >
            <link.icon className="w-5 h-5" />
            {showFullContent && <span className="mx-4 font-medium">{link.title}</span>}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default SidebarComponent;
