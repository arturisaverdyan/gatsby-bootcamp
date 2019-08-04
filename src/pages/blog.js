import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
// export default () => <div>Hello world!</div>

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title,
              date
            }
            html
            excerpt
            timeToRead
    
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
          return (<li key={i}>
            <h2>{e.node.frontmatter.title}</h2>
            <p key={i}>{e.node.frontmatter.date}</p>
          </li>)
        })
      }
      </ol>
    </Layout>
  )
}

export default  BlogPage
