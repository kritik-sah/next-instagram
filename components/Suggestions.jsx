import { faker } from '@faker-js/faker';
import React, { useEffect, useState } from 'react'

const Suggestions = () => {

  const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
      const suggestions = [...Array(5)].map((_,i) => ({
        userId: faker.datatype.uuid(),
        username: faker.internet.userName(),
        avatar: faker.image.avatar(),
        workplace: faker.company.companyName(),
        
      }));
      setSuggestions(suggestions)
    }, [])

  return (
    <div className='mt-10 ml-10'>
      <div className="flex justify-between">
        <h3 className='font-bold text-sm text-gray-400'>Suggestions for you</h3>
        <button className='font-semibold text-sm text-blue-400 hover:text-blue-500 transition-all ease-out'>See All</button>
      </div>
      <div className="">
        {
          suggestions.map(profile => (
            <div key={profile.userId} className="flex items-center justify-between mt-3">
              <img src={profile.avatar} alt={profile.username} className='h-12 w-12 rounded-full cursor-pointer shrink-0 border p-1 mr-3 object-cover'/>
              <div className="flex-1 ml-4">
                <h2 className='font-semibold text-sm'>@{profile.username}</h2>
                <p className='text-sm text-gray-600'>Works at {profile.workplace}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Suggestions