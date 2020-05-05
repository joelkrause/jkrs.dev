import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components';
import { breakpointFrom, breakpointTo, breakpoints } from '../components/global/StyledBreakpoints';
import SEO from '../components/global/seo';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
        <SEO title={frontmatter.title} />
        <PostHero>
            <div className="container">
                <PostTags>{frontmatter.tags}</PostTags>
                <h1>{frontmatter.title}</h1>
                <p>Published on {frontmatter.date}</p>
                <PostExcerpt>{frontmatter.excerpt}</PostExcerpt>
            </div>
        </PostHero>
        <div className="container">
            <div class="post-content" dangerouslySetInnerHTML={{ __html: html }}/>
        </div>
    </>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        excerpt
        tags
        hero {
            childImageSharp {
            fluid(quality: 100, pngCompressionSpeed: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

// Styles
const PostHero = styled.header`
    padding:7.5vw 0;
`

const PostHeroImage = styled.img`
    max-width: 100%;
    margin:0 0 7.5vw;
`

const PostTags = styled.div`
    font-size:1rem;
`

const PostExcerpt = styled.div`
    color:#999;
    ${breakpointFrom.tabletLandscape`
        width:35vw;
	`}
`