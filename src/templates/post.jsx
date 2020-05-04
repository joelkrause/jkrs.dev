import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components';
import { breakpointFrom, breakpointTo, breakpoints } from '../components/global/StyledBreakpoints';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
        <PostHero>
            <div className="container">
                <PostTags>{frontmatter.tags}</PostTags>
                <h1>{frontmatter.title}</h1>
                <p>Published on {frontmatter.date}</p>
                <PostExcerpt>{frontmatter.excerpt}</PostExcerpt>
            </div>
        </PostHero>
        <div
          className="container"
          dangerouslySetInnerHTML={{ __html: html }}
        />
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
      }
    }
  }
`

// Styles

const PostHero = styled.header`
    padding:7.5vw 0;
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