
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-thin">
      <Head>
        <title>Next.js Instagram clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* header  */}
      <Header/>

      {/* feed  */}
      <Feed/>
      
      {/* modals  */}
    </div>
  )
}

export default Home
