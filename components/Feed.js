import React from 'react'
import Miniprofile from './Miniprofile'
import Posts from './Posts'
import Stories from './Stories'
import Suggestions from './Suggestions'

const Feed = () => {
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto'>

        {/* section  */}
        <section className='col-span-3 md:col-span-2'>
            {/* stories */}
            <Stories/>
            {/* posts */}
            <Posts />
        </section>

        {/* section  */}
        <section className='hidden xl:inline-grid md:col-span-1'>
          <div className="fixed top-20">
            {/* mini profile */}
            <Miniprofile/>
            {/* suggestions */}
            <Suggestions/>
          </div>
        </section>

    </main>
  )
}

export default Feed