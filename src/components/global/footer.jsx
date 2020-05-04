import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        &copy; Joel Krause {new Date().getFullYear()}
      </div>
    </FooterWrapper>
  )
}

export default Footer

const FooterWrapper = styled.footer`
  padding:1rem 0;

  a {
    color:var(--primaryColor);
    font-size:0.875rem;
  }
`