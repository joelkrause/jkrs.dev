import React from "react"
import { graphql, Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import SEO from '../components/global/seo';
import Post from '../components/Post'

export const query = graphql`
  query HomePage {
    prismicHome {
        data {
            hero_content {
                raw
            }
            hero_image {
                url
            }            
        }
    }
    featuredPosts: allPrismicPost(filter: {data: {featured_post: {eq: true}}}, limit: 6) {
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
    latestPosts: allPrismicPost(limit: 6) {
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

const PageHome = ({data}) =>{
    const homeData = data.prismicHome.data
    const featuredPosts = data.featuredPosts.edges
    const latestPosts = data.latestPosts.edges
    return(
        <>
        <SEO title="Home" />
        <main className="container">
            <div className="hero pt-16">
                <div className="grid grid-cols-12">
                    <div className="col-span-4">
                        <img src={homeData.hero_image.url} />
                    </div>
                    <div className="col-span-6 col-start-6 flex flex-col justify-center">
                        <RichText render={homeData.hero_content.raw} />
                    </div>
                </div>
            </div>
            <div className="featured-posts py-24">
                <div className="container">
                    <h3 className="font-recoleta font-bold text-xl pb-8">Featured Posts</h3>
                    {featuredPosts.map(node => {
                        const postData = node
                        return (
                            <Post data={postData} />
                        )
                    })}
                </div>
            </div>
            <div className="featured-posts pb-24">
                <div className="container">
                    <h3 className="font-recoleta font-bold text-xl pb-8">Latest Posts</h3>
                    {latestPosts.map(node => {
                        const postData = node
                        return (
                            <Post data={postData} />
                        )
                    })}
                </div>
            </div>
        </main>
        </>
    )
}

export default PageHome
