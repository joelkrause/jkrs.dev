import React from "react"
import styled from 'styled-components';
import { breakpointFrom, breakpointTo, breakpoints } from '../components/global/StyledBreakpoints';

import Posts from '../components/Posts'

const PageHome = () =>{
    return(
        <main className="container">
            <Hero>
                <p>Hey, I'm Joel</p>
                <p>I'm a web developer at Raak Creative where I build lightning ⚡️ fast headless websites with nuxt.js, storyblok & shopify.</p>
            </Hero>
            <Posts />
        </main>
    )
}

export default PageHome

// Styles
const Hero = styled.div`
    width:35vw;
`