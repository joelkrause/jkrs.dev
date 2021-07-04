import React, {useState} from 'react'
import { Link } from "gatsby"
import Memoji from './memoji'


const Header = () => {
  const getColourScheme = window.localStorage.getItem('mode')
  const [isDark, setisDark] = useState(false);
  
  if (isDark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  const setDarkMode = () => {
    setisDark(!isDark)
    window.localStorage.setItem('mode',isDark ? 'light' : 'dark')
  }

  return(
    <>
      <header className="sticky top-0 bg-white dark:bg-gray-800 p-4 lg:p-12">
        <nav className="flex justify-start items-center">
          <Link to="/" className="font-bold font-recoleta mr-4">
            Joel Krause
          </Link>
          <Link to="/" className="no-underline hover:text-gray-800 mr-4">Home</Link>
          <Link to="/posts" className="no-underline hover:text-gray-800 mr-4">Posts</Link>
          <button onClick={setDarkMode}>Change {isDark ? 'to light' : 'to dark'}</button>
        </nav>
      </header>
      </>
  )
}

export default Header
