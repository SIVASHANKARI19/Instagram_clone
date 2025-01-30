import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const CommentCard = () => {
  const [liked, setLiked] = useState(false);
  
  return (
    <div>
      <div>
        <div className="flex space-x-2 items-center">
          <div>
            <img
              className="w-9 h-9 rounded-full"
              src="https://cdn.pixabay.com/photo/2024/01/29/08/35/girl-8539256_640.jpg"
              alt="Modal content"
            />
          </div>
          <div>
            <p>
              <span className="font fontsemibold">Username</span>
              <span className="ml-2">GOOD</span>
            </p>
            <div className="flex space-x-3 items-center text-xs opacity-50 pt-2">
              <span>1 day ago</span>
              <span>1 kike</span>
            </div>
          </div>
        </div>
        {liked ? (
          <AiFillHeart onClick={() => setLiked(!liked)}></AiFillHeart>
        ) : (
          <AiOutlineHeart onClick={() => setLiked(!liked)}></AiOutlineHeart>
        )}
      </div>
    </div>
  );
};

export default CommentCard;
