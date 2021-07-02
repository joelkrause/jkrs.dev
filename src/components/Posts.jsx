import React from 'react'
import { StaticQuery, graphql, Link } from "gatsby"
import Post from './Post'

const Posts = () => {
    return (
        <div>
            <h3>Latest Posts</h3>
            posts
            {/* <StaticQuery
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
            /> */}
        </div>
    )
}

export default Posts