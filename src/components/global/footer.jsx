import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterWrapper>
        <a href="#" rel="noopener noreferred">&copy; Joel Krause {new Date().getFullYear()}</a>
    </FooterWrapper>
  )
}

export default Footer

const FooterWrapper = styled.footer`
  background:#000;
  color:#fff;
  padding:1rem 1.5rem;
  display:flex;
  justify-content:space-between;
`