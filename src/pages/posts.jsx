import React from 'react'
import SEO from '../components/global/seo';
import Posts from '../components/Posts'

const PostsPage = () => {
    return (
        <>
            <SEO title="Posts"/>
            <main className="container">
                <h1>Posts</h1>
                <Posts />
            </main>
        </>
    )
}

export default PostsPage