const linkResolver = require('./utils/linkResolver')
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
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'jkrs',
        accessToken: 'MC5YcnZmZkJFQUFDUUEwdW56.77-9HA_vv71D77-977-9fiXvv73vv70t77-9e--_vVDvv73vv73vv70I77-9T1gMT--_vQ3vv713F--_vQI',
        schemas:{
          home:require('./custom_types/home.json'),
          post: require('./custom_types/post.json'),
        },
        linkResolver: () => (doc) => linkResolver(doc),
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/templates/layout.jsx`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },    
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
  ]
}