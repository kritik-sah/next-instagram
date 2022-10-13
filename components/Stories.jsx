import React, { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker';
import Story from './Story';

const Stories = () => {
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
      const suggestions = [...Array(20)].map((_,i) => ({
        userId: faker.datatype.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
      }));
      setSuggestions(suggestions)
    }, [])
    
    return (
    <div className='flex space-x-3 p-6 bg-white mt-8 border border-gray-200 rounded-md overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-200'>
        {suggestions.map(profile => (
            <Story key={profile.userId} image={profile.avatar} username={profile.username} />
        ))}
    </div>
  )
}

export default Stories