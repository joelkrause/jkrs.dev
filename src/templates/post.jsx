import React from "react"
import { graphql, Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import SEO from '../components/global/seo';

export const query = graphql`
  query BlogPostQuery($uid: String) {
    prismicPost(uid: { eq: $uid }) {
      first_publication_date(formatString: "MMMM DD, YYYY")
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
        <main className="container">
          <h1>{RichText.asText(post.title)}</h1>
          <p>{data.prismicPost.first_publication_date}</p>
          <p>{RichText.asText(post.post_excerpt)}</p>
          {/* {RichText.render(post.body)} */}
          {/* {post.body} */}
        <pre>{JSON.stringify(data, null, 2) }</pre>
        </main>
        </>
    )
}

export default PageHome
