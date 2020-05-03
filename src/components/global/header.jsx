import React from 'react';
import { Link, StaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import { breakpointFrom, breakpointTo, breakpoints } from './StyledBreakpoints';

const Header = () => {
  return(
    <>
      <HeaderWrapper>
        <NavWrapper>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/posts">Posts</NavLink>
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
  position:relative;
  z-index:1;
`
const NavWrapper = styled.nav`
  display:flex;
  flex-grow:1;
  justify-content:flex-start;
  @media (min-width:1280px){
    flex-direction:row;
  }
`
const NavLink = styled(props => <Link {...props} />)`
  padding:0 1rem 0 0;
  text-decoration:none;
  color:var(--primaryColor);
  &.active{
    color:green;
  }
  :hover{
    color:gray;
    text-decoration:none;
  }
`
const Logo = styled.div`
font-size:1rem;
img{
  width:3rem;
}
`