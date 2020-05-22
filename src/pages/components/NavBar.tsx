import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const NavBar: NextPage = () => {
  return (
      <div>
        <ul className='flex flex-row'>
          <li>
              <input className='m-1 p-1 w-24 bg-orange-600 rounded text-white' type='button' value='cs101.in'></input>
          </li>
          <li>
              <input className='m-1 p-1 w-24' type='button' value='Careers'></input>
          </li>
          <li>
              <input className='m-1 p-1 w-24' type='button' value='Courses'></input>
          </li>
          <li>
              <input className='m-1 p-1 w-24' type='button' value='Mentors'></input>
          </li>
        </ul>
      </div>
  )
}

export default NavBar
