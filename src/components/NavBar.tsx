import type { NextPage } from 'next'

const NavBar: NextPage = () => {
  return (
      <div>
        <ul className='flex flex-row flex-wrap'>
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
