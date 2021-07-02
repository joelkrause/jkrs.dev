import React from "react"
import styled from 'styled-components';
import { breakpointFrom, breakpointTo, breakpoints } from '../components/global/StyledBreakpoints';
import SEO from '../components/global/seo';

const PageHome = ({data}) =>{
    return(
        <>
        <SEO title="Home" />
        <main className="container">
            <Hero>
                <p>Hey, I'm Joel</p>
                <p>I'm a passionate web developer at Raak Creative where I build lightning ⚡️ fast headless websites with nuxt.js, gatsby, storyblok & shopify.</p>
            </Hero>
        </main>
        </>
    )
}

export default PageHome

// Styles
const Hero = styled.div`
    padding:5vw 0;
    ${breakpointFrom.tabletLandscape`
        width:35vw;
	`}
`