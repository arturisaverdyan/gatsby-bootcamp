const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/blog.js')
  const res = await graphql(`
      query {
        allContentfulBlogPost {
          edges {
            node {
                slug
            }
          }
        }
      }
  `)

  res.data.allContentfulBlogPost.edges.forEach(e => {
    createPage({
      component: blogTemplate,
      path: `/blog/${e.node.slug}`,
      context: {
        slug: e.node.slug
      }
    })
  })
}
