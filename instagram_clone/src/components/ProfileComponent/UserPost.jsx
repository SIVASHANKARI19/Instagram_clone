import React from "react";
import { AiOutlineTable, AiOutlineUser } from "react-icons/ai";
import { RiVideoAddLine } from "react-icons/ri";
import { BiBookmark } from "react-icons/bi";
import PostCard from "./PostCard";

const UserPost = () => {
    const [activeTab, setActiveTab] = React.useState("Posts");
  const tabs = [
    {
      tab: "Posts",
      icon: <AiOutlineTable></AiOutlineTable>,
      activeTab: "",
    },
    {
      tab: "Reels",
      icon: <RiVideoAddLine></RiVideoAddLine>,
      activeTab: "",
    },
    {
      tab: "Saved",
      icon: <BiBookmark></BiBookmark>,
      activeTab: "",
    },
    {
      tab: "Tagged",
      icon: <AiOutlineUser></AiOutlineUser>,
      activeTab: "",
    },
  ];
  return <div>
     
          <div className="flex space-x-14 border-t relative">
              {tabs.map((tab) => (
                  <div className={`${activeTab === tab.tab ? "border-t border-black" : "opacity-60"}`} key={tab.tab} onClick={() => setActiveTab(tab.tab)}>
                     <p className="pt-3">{tab.icon}</p> 
                      <p className="ml-1" >{tab.tab}</p>
                  </div>
              ))}
          </div>
      <div>
        <div className="flex flex-wrap">
          {[1, 1,1,1,1,1].map((post) => (
            <PostCard></PostCard>
          ))}
        </div>
      </div>
  </div>;
};

export default UserPost;
