const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `jkrs.dev`,
    description: `website for joel krause`,
    author: `@jkrs`
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/templates/layout.jsx`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
  ]
}