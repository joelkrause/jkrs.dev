import React from 'react';
import { Link } from "gatsby"
import styled from 'styled-components';
import { breakpointFrom, breakpointTo, breakpoints } from './StyledBreakpoints';
import Memoji from './memoji'

const Header = () => {
  return(
    <>
      <header className="sticky top-0 bg-white p-12 grid grid-cols-12">
        <nav class="col-span-6 flex justify-start items-center">
          <Link to="/" className="no-underline text-gray-600 hover:text-gray-800 mr-4">Home</Link>
          <Link to="/posts" className="no-underline text-gray-600 hover:text-gray-800 mr-4">Posts</Link>
        </nav>
        <div className="logo col-span-6 flex justify-end items-center">
          <Link to="/" className="font-bold text-gray-600">
            Joel Krause
          </Link>
        </div>
      </header>
      </>
  )
}

export default Header