import React from 'react';
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components';
import { breakpointFrom, breakpointTo, breakpoints } from './StyledBreakpoints';

const Header = () => {
  return(
    <>
      <HeaderWrapper>
        <NavWrapper>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavWrapper>
        <Logo>
          <Link to="/">
            <img src="/memoji-normal.png" />
          </Link>
        </Logo>

      </HeaderWrapper>
      </>
  )
}

export default Header

// Styles
const HeaderWrapper = styled.header`
  display:flex;
  padding:1rem;
  width:100vw;
  position:sticky;
  top:0;
  z-index:1;
`
const NavWrapper = styled.nav`
  display:flex;
  flex-grow:1;
  justify-content:flex-start;
`
const NavLink = styled(props => <Link {...props} />)`
  margin:0 1rem 0 0;
  text-decoration:none;
  color:var(--primaryColor);
  position:relative;
  transition:all 0.35s;
  &:hover,
  &[aria-current="page"]{
    color:var(--accentColor);
    text-decoration:none;
  }
`
const Logo = styled.div`
font-size:1rem;
img{
  width:3rem;
}
`