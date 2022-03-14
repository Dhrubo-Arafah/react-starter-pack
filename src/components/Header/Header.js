import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
      <div className='flex justify-between px-3 py-4 gap-5 bg-gray-900 text-white'>
          <div className="logo w-full">
              Mov
          </div>
          <nav className='flex list-none justify-between w-full'>
              <li>
                  <Link to="/">Home</Link>
              </li>
              <li>
                  <Link to="/watched">Watched</Link>
              </li>
              <li>
                  <Link to="/add">Add</Link>
              </li>
          </nav>
    </div>
  )
}

export default Header