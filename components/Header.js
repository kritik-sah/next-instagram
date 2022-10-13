import Image from 'next/image'
import React from 'react'
import { MagnifyingGlassIcon, 
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  Bars3Icon
} from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/24/solid'

const Header = () => {
  return (
    <div className='shadow-sm border-b bg-white sticky top-0 w-full z-50'>
    <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
    {/* left  */}
    <div className="flex item-center">
      <div className="relative hidden lg:inline-grid h-24 w-28 cursor-pointer">
          <Image src="https://links.papareact.com/ocw"  layout='fill' objectFit='contain'/>
      </div>
      <div className="relative lg:hidden inline-grid h-24 w-10 flex-shrink-0 cursor-pointer">
          <Image src="https://links.papareact.com/jjm"  layout='fill' objectFit='contain'/>
      </div>
    </div>

    {/* center - search input field*/}
    <div className="max-w-xs flex items-center">
    <div className="mt-1 p-3 rounded-md relative">
      <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
        <MagnifyingGlassIcon className='h-5 w-5 text-gray-400 '/>
      </div>
      <input type="text" className='bg-gray-50 block w-full pl-10 sm:text-sm 
      border-grey-100 focus:ring-black focus:border-black rounded-md' placeholder='search...'/>
    </div>
    </div>

    {/* right  */}

    <div className='flex items-center justify-end space-x-4'>
      <HomeIcon className='navBtn'/>
      <Bars3Icon className='h-6 w-6 md:hidden cursor-pointer shrink-0'/>
      <div className="relative navBtn">
        <PaperAirplaneIcon className='navBtn -rotate-45'/>
        <div className="redBadge">3</div>
      </div>
      <PlusCircleIcon className='navBtn'/>
      <HeartIcon className='navBtn'/>
      <UserGroupIcon className='navBtn'/>

      <img src="/images/kritik-lighting-image.jpg" alt=" profile picture" className='h-10 w-10  rounded-full cursor-pointer shrink-0 object-cover' />

    </div>


    </div>
    </div>
    
  )
}

export default Header