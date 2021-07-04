import React from "react"
import { graphql, Link } from 'gatsby'
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
          text
          type
        }
        post_hero {
          url
        }
        post_excerpt {
          type
          text
        }
      }
    }
  }
`

const PageHome = ({data}) =>{
  const post = data.prismicPost.data
    return(
      <>
      <SEO title={RichText.asText(post.title)} />
        <main className="post">
          <div className="post-hero py-8 lg:py-24">
            <div className="container">
          <h1>{RichText.asText(post.title)}</h1>
          <p>Published {data.prismicPost.first_publication_date}</p>
          <p>Updated {data.prismicPost.last_publication_date}</p>
          <p className="font-recoleta text-2xl py-8 text-gray-400 leading-10">{RichText.asText(post.post_excerpt)}</p>
            </div>
          </div>
          <div className="post-content">
            <div className="container">
        <pre>{JSON.stringify(data, null, 2) }</pre>
            </div>
          </div>
        </main>
        </>
    )
}

export default PageHome
