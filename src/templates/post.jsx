import React from "react"
import { graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import { RichText } from 'prismic-reactjs'
import SEO from '../components/global/seo';

export const query = graphql`
  query BlogPostQuery($uid: String) {
    prismicPost(uid: { eq: $uid }) {
      first_publication_date(fromNow: true)
      last_publication_date(fromNow: true)
      data {
        title {
          text
        }
        body {
          raw
        }
        post_hero {
          url
          localFile {
            relativePath
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        post_excerpt {
          raw
        }
      }
    }
  }
`

const PageHome = ({data}) =>{
  const post = data.prismicPost.data
    return(
      <>
      <SEO title={post.title.text} />
        <main className="post">
          <div className="post-hero py-8 lg:py-24">
            <div className="container">
              <h1>{post.title.text}</h1>
              <p>Published {data.prismicPost.first_publication_date}</p>
              <p>Updated {data.prismicPost.last_publication_date}</p>
              <div className="font-recoleta text-2xl py-8 text-gray-400 leading-10">
                <RichText render={post.post_excerpt.raw} />
              </div>
            </div>
          </div>
          <div className="post-hero-image mb-8 lg:mb-24">
            {/* <Img fluid={post.post_hero.localFile.childImageSharp.fluid} /> */}
          </div>
          <div className="post-content mb-8 lg:mb-24">
            <div className="container">
              <RichText render={data.prismicPost.data.body.raw} />
            </div>
          </div>
          <pre>{JSON.stringify(post.post_hero,null,2)}</pre>
        </main>
        </>
    )
}

export default PageHome
