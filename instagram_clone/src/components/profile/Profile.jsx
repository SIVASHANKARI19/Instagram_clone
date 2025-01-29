import React from 'react'
import UserProfile from '../ProfileComponent/UserProfile'
import UserPost from '../ProfileComponent/UserPost'

const Profile = () => {
  return (
   <div className='px-20'>
    <div>
        <UserProfile />
    </div>
    <UserPost>

    </UserPost>
   </div>
  )
}

export default Profile
