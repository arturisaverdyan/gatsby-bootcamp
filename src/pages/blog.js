import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
// export default () => <div>Hello world!</div>

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }  
            frontmatter {
              title,
              date
            }  
          }
        }
      }
    }
`)
  // console.log(data)
  return (
    <Layout>
      <h1>Blog</h1>
      <ol>
      {data.allMarkdownRemark.edges.map((e, i) => {
        let h = `/blog/${e.node.fields.slug}`
          return (<li key={i}>
            <Link to={h}>
              <h2>{e.node.frontmatter.title}</h2>
              <p key={i}>{e.node.frontmatter.date}</p>
            </Link>
          </li>)
        })
      }
      </ol>
    </Layout>
  )
}

export default  BlogPage
