import React, { useState } from "react";
import {
  BsBook,
  BsBookmark,
  BsThreeDots,
  BsBookmarkFill,
  BsEmojiSmile,
} from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaComment, FaRegComment } from "react-icons/fa";
import "./PostCard.css";
import { RiSendPlaneLine } from "react-icons/ri";
import CommentDialog from "../comment/commentModal";
import BasicModal from "../comment/commentModal";

const PostCard = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isPostLiked, setIsPostLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };
  const handleLike = () => {
    setIsPostLiked(!isPostLiked);
  };
  const handleSave = () => {
    setSaved(!saved);
  };
  return (
    <div>
      <div className="border border-gray-300 rounded-md w-full mt-7">
        <div className="flex justify-between items-center w-full py-5 px-5">
          <div className="flex items-center">
            <img
              className="cursor-pointer h-12 w-12 rounded-full"
              src="https://media.istockphoto.com/id/858282646/photo/cat-in-a-pod.webp?b=1&s=612x612&w=0&k=20&c=L6c2iIV0cRSCehm70XDoLJZeRE-gqO15gsSpl0hqqB0="
              alt=""
            />
            <div className="ml-2">
              <p className="font-semibold">Username</p>
              <p className="text-sm text-gray-400">location</p>
            </div>
          </div>
          <div className="dropdown">
            <BsThreeDots className="dots" onClick={() => handleClick()} />
            <div className="dropdown-content">
              {showDropdown && (
                <p className="cursor-pointer bg-black text-white py-1 px-4 rounded-md ">
                  Delete
                </p>
              )}
            </div>
          </div>
        </div>

        <div>
          <img
            src="https://cdn.pixabay.com/photo/2024/01/29/08/35/girl-8539256_640.jpg"
            alt=""
          />
        </div>
        <div>
          <div className="flex justify-between items-center w-full px-5 py-4">
            <div className="flex items-center space-x-4">
              {isPostLiked ? (
                <AiFillHeart
                  onClick={() => handleLike()}
                  className="cursor-pointer text-xl"
                ></AiFillHeart>
              ) : (
                <AiOutlineHeart
                  onClick={() => handleLike()}
                  className="cursor-pointer text-xl"
                ></AiOutlineHeart>
              )}
              <FaRegComment className="cursor-pointer text-xl hover:opacity-50 "></FaRegComment>
              <RiSendPlaneLine className="cursor-pointer text-xl hover:opacity-50 "></RiSendPlaneLine>
            </div>
            <div>
              {saved ? (
                <BsBookmarkFill
                  className="cursor-pointer text-xl  ml-6"
                  onClick={() => handleSave()}
                />
              ) : (
                <BsBookmark
                  className="cursor-pointer text-xl hover:opacity-50 ml-6"
                  onClick={() => handleSave()}
                />
              )}
            </div>
          </div>
        </div>
        <div className="w-full py-2 px-5">
          <p>100 likes</p>
          <p className="opacity-50 py-2 cursor-pointer">View all 10 comments</p>
        </div>
        <div className="border-t border-gray-3   00  w-full">
          <div className="flex  width-full items-center px-5">
            <BsEmojiSmile />
            <input type="text" placeholder="Add a comment..." id="" className="comment_input"/>
          </div>
        </div>
      </div>
      <BasicModal />
    </div>
  );
};

export default PostCard;
