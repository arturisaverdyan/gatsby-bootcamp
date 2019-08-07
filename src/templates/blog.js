import React from "react"
 import Layout from '../components/layout'
import { graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'


export const query = graphql`
  query($slug: String!) {
  contentfulBlogPost(slug: {eq: $slug}) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")

    }
  }
 `
    

const Blog = (props) => {
  return (
    <Layout>
      <h2>{props.data.contentfulBlogPost.title}</h2>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
    </Layout>
  )
}

export default Blog
