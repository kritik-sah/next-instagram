import {BookmarkIcon,ChatBubbleOvalLeftIcon, EllipsisHorizontalIcon,HeartIcon ,FaceSmileIcon,PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'
import React from 'react'

const Post = ({post}) => {
    const {id,
    userName,
    userImage,
    img,
    caption} = post
  return (
    <div className='bg-white rounded-sm border my-7'>
        {/* header */}
        <div className="flex items-center p-5 ">
            <img src={userImage} alt={userName} className='h-12 w-12 rounded-full cursor-pointer shrink-0 border p-1 mr-3 object-cover'/>
            <p className='flex-1 font-bold'>{userName}</p>
            <EllipsisHorizontalIcon className='h-5'/>
        </div>
        {/* image */}
        <img src={img} alt="" className='object-cover w-full' />
        {/* button */}
        <div className=" flex space-x-4 p-4 justify-between">
            <div className=" flex space-x-4">
                <HeartIcon className='btn'/>
                <ChatBubbleOvalLeftIcon className='btn'/>
                <PaperAirplaneIcon className='btn -rotate-45'/>
            </div>
            <div className=" flex space-x-4 justify-end">
                <BookmarkIcon className='btn'/>
               
            </div>
        </div>
        {/* caption */}
        <p className='p-4'><span className='font-bold'>{userName}:</span> {caption}</p>
        {/* comment */}

        {/* input comment  */}
        <form className='flex items-center p-4'>
            <FaceSmileIcon className='btn' />
            <input type="text" placeholder='Add a comment...' className='border-none flex-1 focus:ring-0 focus:outline-0'/>
            <button className='font-semibold text-blue-400 hover:text-blue-500 transition-all ease-out'>Post</button>
        </form>
    </div>
  )
}

export default Post