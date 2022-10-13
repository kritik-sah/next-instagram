import React from 'react'
import Post from './Post'

const posts = [
    {
        id: '123',
        userName:'kritik.sah',
        userImage:"/images/kritik-lighting-image.jpg",
        img:"/images/kritik-lighting-image.jpg",
        caption:'Best devloper in the house',
    },
    {
        id: '124',
        userName:'SunnySangha',
        userImage:"https://links.papareact.com/3ke",
        img:"https://links.papareact.com/3ke",
        caption:'will become the world richest person',
    },
]

const Posts = () => {
  return (
    <div>
        {
            posts.map(post => (
                <Post key={post.id} post={post}/>
            ))
        }
    </div>
  )
}

export default Posts