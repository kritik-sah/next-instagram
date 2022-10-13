import React from 'react'

const Miniprofile = () => {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
        <img src="/images/kritik-lighting-image.jpg" alt=" profile picture" className='h-12 w-12 rounded-full cursor-pointer shrink-0 object-cover' />
        <div className="px-2">
            <h2 className='font-bold'>@kritik.sah</h2>
            <p className='text-sm text-gray-600'>Welcome to Instagram 2.0</p>
        </div>
        <button className='font-semibold text-sm text-blue-400 hover:text-blue-500 transition-all ease-out'>Sign out</button>
    </div>
  )
}

export default Miniprofile