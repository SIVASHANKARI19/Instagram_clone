import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
import './PostCard.css'

const PostCard = () => {
  return (
    <div>
      <div className='post w-60 h-60 m-2'>
        <img className='cursor-pointer mr-2' src="https://cdn.pixabay.com/photo/2024/06/22/09/08/childs-hand-8845806_640.jpg" alt="" />
        <div  className='overlay'>
            <div className='overlay-text flex justify-between'>
            <div>
                <AiFillHeart></AiFillHeart>
                <span>10</span>
            </div>
            <div>
                <FaComment></FaComment>
                <span>1</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
