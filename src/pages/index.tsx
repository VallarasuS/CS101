import type { NextPage } from 'next'
import Head from 'next/head'
import LandingPage from '../components/LandingPage'
import NavBar from '../components/NavBar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>cs101.in - Learn to code. Get Hired.</title>
      </Head>
      <NavBar></NavBar>
      <LandingPage></LandingPage>
    </div>
  )
}

export default Home
