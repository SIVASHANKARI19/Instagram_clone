import React from "react";
import { IoReorderThree } from "react-icons/io5";
import { mainMenu } from "./SidebarConfiguration";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState();
  const navigate = useNavigate();
  const handleClick = (title) => {
    setActiveMenu(title);
    if (title === "Profile") {
      navigate("/username");
    } else if (title === "Home") {
      navigate("/");
    }
  };
  return (
    <div className="sticky top-0 h-[90vh]">
      <div className="flex flex-col justify-between h-full px-10 ">
        <div>
          <div className="pt-10">
            <img className="w-40" src="https://i.imgur.com/zqpwkLQ.png" />
          </div>
          <div className="mt-10">
            {mainMenu.map((menu) => (
              <div
                className="flex items-center cursor-pointer text-lg mb-5"
                key={menu.title}
                onClick={() => handleClick(menu.title)}
              >
                {activeMenu === menu.title ? menu.isActiveIcon : menu.icon}
                <p className={`${activeMenu === menu.title ? 'font-bold' : 'font-semibold'}`}>{menu.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center cursor-pointer pb-10 text-lg">
        <IoReorderThree className="text-2xl mr-5" />
        <p>More</p>
      </div>
    </div>
  );
};

export default Sidebar;
