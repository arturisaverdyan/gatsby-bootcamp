import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

// export default () => <div>Hello world!</div>

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>I am Artur</h2>
      <p>Need a developer? <Link to='/contact'>Contact Me</Link>  </p>
    </Layout>
  )
}

export default  IndexPage
