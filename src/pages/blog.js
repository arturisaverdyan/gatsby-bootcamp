import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import blogStyles from './blog.module.scss'
import Head from "../components/head"
import Layout from "../components/layout"
// export default () => <div>Hello world!</div>

const BlogPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort: {
          fields: publishedDate
          order: DESC
        }
      ) {
        edges {
          node {
            slug
            title,
            publishedDate(formatString: "MMMM Do, YYYY")      
          }
        }
      }
    }
`)
  // console.log(data)
  return (
    <Layout>
      <Head title="Blog"/>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
      {data.allContentfulBlogPost.edges.map((e, i) => {
          return (<li key={i} className={blogStyles.post}>
            <Link to={`/blog/${e.node.slug}`}>
              <h2>{e.node.title}</h2>
              <p key={i}>{e.node.publishedDate}</p>
            </Link>
          </li>)
        })
      }
      </ol>
    </Layout>
  )
}

export default  BlogPage
