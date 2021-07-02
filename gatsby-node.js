const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allPrismicPost {
        edges {
          node {
            uid
          }
        }
      }
    }
  `)

  pages.data.allPrismicPost.edges.forEach((page) => {
    createPage({
      path: `/post/${page.node.uid}`,
      component: path.resolve(__dirname, 'src/templates/post.jsx'),
      context: { ...page.node },
    })
  })
}