import React from 'react'
import Story from '../../components/Story/Story'
import HomeRight from '../../components/homeRight/Home'
import PostCard from '../../components/postCard/PostCard'

const Home = () => {
  return (
    <div>
   <div className='mt-10 flex w-[100%] justify-center'>
    <div className='w-[40%] px-10'>
      <div className='storyDiv flex space-x-2  items-center cursor-pointer p-4 border border-gray-300 rounded-md w-full justify-start '>
        {[1,2,2,3,3].map((story) => (
          <Story />
        ))}
      </div>
      <div>
        {[1,2].map((story) => (
          <PostCard />
        ))}
        
      </div>

    </div>
    <div className='w-[50%]'>
      
      <HomeRight />
    </div>
   </div>
    </div>
  )
}

export default Home
