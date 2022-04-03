import type { NextPage } from 'next'
import Head from 'next/head'
import LandingPage from '../components/LandingPage'
import NavBar from '../components/NavBar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>cs101.in - Learn to code. Get Hired.</title>
        <meta property="og:title" content="Learn to Code. Get Hired" />
        <meta property="og:description" content="Signup for weekly learning material, weekly action plan, progress tracker and more." />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://cs101.in//_next/static/media/cover.1c802d46.jpg"/>
      </Head>
      <NavBar></NavBar>
      <LandingPage></LandingPage>
    </div>
  )
}

export default Home
