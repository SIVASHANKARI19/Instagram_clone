import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Home from "../HomePage/Home";
import { Routes, Route } from "react-router-dom";
import { mainMenu } from "../../components/Sidebar/SidebarConfiguration";
import Profile from "../../components/profile/Profile";

const Router = () => {
  return (
    <div >
        <div className="flex">
      <div className="w-[20%] border-r border-r-slate-500  pl-10" >
        <Sidebar />
      </div>
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/username" element={<Profile />} />
        </Routes>
      </div>
      </div>
    </div>
  );
};

export default Router;
