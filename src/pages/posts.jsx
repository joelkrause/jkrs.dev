import React from 'react'
import SEO from '../components/global/seo';
import { graphql, Link } from 'gatsby'
import Post from '../components/Post'

export const query = graphql`
  query AllBlogPosts {
    allPrismicPost {
        edges {
            node {
                url
                first_publication_date(formatString: "MMMM DD, YYYY")
                tags
                data {
                    title {
                        text
                    }
                }
            }
        }
    }
  }
`

const PostsPage = ({data}) => {
    const posts = data.allPrismicPost.edges
    return (
        <>
            <SEO title="Posts"/>
            <main className="container">
                <h1 className="text-6xl font-bold py-8">Posts</h1>
                {posts.map(node => {
                    const postData = node
                    return (
                        <Post data={postData} />
                    )
                })}
            </main>
        </>
    )
}

export default PostsPage