import React from "react";
import { TbCircleDashed } from "react-icons/tb";

const UserProfile = () => {
  return (
    <div className="py-10 w-full ">
      <div className="flex items-center">
        <div className="w-[15%]">
          <img
            className="w-32 h-32 rounded-full"
            src="https://cdn.pixabay.com/photo/2023/11/02/14/07/minimalism-8360717_640.jpghttps://cdn.pixabay.com/photo/2023/11/02/14/07/minimalism-8360717_640.jpg"
            alt=""
          />
        </div>
        <div className="w-[85%] ml-10">
          <div className="flex space-x-10 items-center">
            <p>Username</p>
            <button>Edit Profile</button>
            <TbCircleDashed></TbCircleDashed>
          </div>
          <div className="flex space-x-10">
            <div>
              <span className="font-semibold mr-2">10</span>
              <span>Posts</span>
            </div>
            <div>
              <span className="font-semibold mr-2">20</span>
              <span>Followers</span>
            </div>
            <div>
              <span className="font-semibold mr-2">10</span>
              <span>Following</span>
            </div>
          </div>
          <div>
            <p className="font-semibold">Full Name</p>
            <p className="font-light">
              ✨ Born Unique, Dated on Earth: 12th Jan ✨ 📚 Graduate in
              Progress 🎓
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
