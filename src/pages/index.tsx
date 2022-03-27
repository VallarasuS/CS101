import type { NextPage } from 'next'
import Head from 'next/head'
import LandingBanner from '../components/LandingBanner'
import NavBar from '../components/NavBar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>cs101.in - Learn to code. Get Hired.</title>
      </Head>
      <NavBar></NavBar>
      <LandingBanner></LandingBanner>
    </div>
  )
}

export default Home
