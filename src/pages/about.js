import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"


// export default () => <div>Hello world!</div>

const AboutPage = () => {
  return (
    <Layout>
      <h1>About me</h1>
      <h2>MarktGuru</h2>
      <p><Link to="/contact">Want to work with me? Ritch out.</Link></p>
    </Layout>
  )
}

export default  AboutPage
