import React from 'react'

const Story = (props) => {
    const {image, username} = props
  return (
    <div className='flex flex-col justify-center items-center gap-2 pointer-events-none'>
        <img src={image} alt={`${username} story`} className="h-14 w-14 block pointer-events-none rounded-full p-[2px] border-2 border-red-500 cursor-pointer hover:scale-110 transition-all duration-200 ease-out"/>
        <p className='text-xs w-16 truncate text-center pointer-events-none'>{username}</p>
    </div>
  )
}

export default Story