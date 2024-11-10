import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
      <header className='bg-black opacity-75  '>
        <nav className=' p-9 '>
            <ul className='flex justify-center text-white space-x-12' >
                <li className='nav-item hover:scale-110 transition-transform duration-300 ease-in-out hover:border hover:text-red-300'><Link href="/">Home</Link></li>
                <li className='nav-item hover:scale-110 transition-transform duration-300 ease-in-out hover:border hover:text-red-300'><Link href="./About">About me</Link></li>
                <li className='nav-item hover:scale-110 transition-transform duration-300 ease-in-out hover:border hover:text-red-300'><Link href="./Projects">Projects</Link></li>
                <li className='nav-item hover:scale-110 transition-transform duration-300 ease-in-out hover:border hover:text-red-300'><Link href="./Contact">Contact</Link></li>
            </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header;
