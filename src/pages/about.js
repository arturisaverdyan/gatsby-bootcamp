import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"


// export default () => <div>Hello world!</div>

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About"/>
      <h1>About me</h1>
      <h2>MarktGuru</h2>
      <p><Link to="/contact">Want to work with me? Ritch out.</Link></p>
    </Layout>
  )
}

export default  AboutPage
