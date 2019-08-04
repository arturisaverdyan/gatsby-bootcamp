const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  // Transform the new node here and create a new node or
  // create a new node field.
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, '.md')
    console.log("======================================"+slug)
    // console.log(JSON.stringify(node, null, 2))
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplatePath = path.resolve('./src/templates/blog.js')
  const res = await graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)

  res.data.allMarkdownRemark.edges.forEach(e => {
    createPage({
      component: blogTemplatePath,
      path: `/blog/${e.node.fields.slug}`,
      context: {
        slug: e.node.fields.slug
      }
    })
  })
}
