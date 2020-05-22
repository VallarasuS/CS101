import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LandingBanner from './components/LandingBanner'
import NavBar from './components/NavBar'

const Home: NextPage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <LandingBanner></LandingBanner>
    </div>
  )
}

export default Home
