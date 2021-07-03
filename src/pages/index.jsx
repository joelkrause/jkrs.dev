import React from "react"
import { graphql, Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import SEO from '../components/global/seo';

export const query = graphql`
  query HomePage {
    prismicHome {
        data {
            hero_content {
                text
                type
            }
            hero_image {
                url
            }            
        }
    }
  }
`

const PageHome = ({data}) =>{
    const homeData = data.prismicHome.data
    return(
        <>
        <SEO title="Home" />
        <main className="container">
            <div className="hero">
                {/* <pre>{JSON.stringify(homeData,null,2)}</pre> */}
                <img src={homeData.hero_image.url} className="w-48 mb-12" />
                {/* {RichText.render(homeData.hero_content)} */}
                <p>Hey, I'm Joel</p>
                <p>I'm a passionate web developer at Raak Creative where I build lightning ⚡️ fast headless websites with nuxt.js, gatsby, storyblok & shopify.</p>
            </div>
        </main>
        </>
    )
}

export default PageHome
