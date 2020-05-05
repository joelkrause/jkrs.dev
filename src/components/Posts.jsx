import React from 'react'
import { StaticQuery, graphql, Link } from "gatsby"
import Post from './Post'

const postsQuery = graphql`
{
  allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, limit: 1000) {
    edges {
      node {
        frontmatter {
            title
            path
            date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
}
`

const Posts = () => {
    return (
        <div>
            <h3>Latest Posts</h3>
            <StaticQuery
                query={postsQuery}
                render={data => {
                    return (
                        <>
                            {data.allMarkdownRemark.edges.map(node => {
                            const postData = node.node.frontmatter
                            return (
                                <Post data={postData} />
                            )
                            })}
                        </>
                    )
                }}
            />
        </div>
    )
}

export default Posts