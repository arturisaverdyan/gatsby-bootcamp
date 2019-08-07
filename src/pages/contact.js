import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"


// export default () => <div>Hello world!</div>

const ContacyPage = () => {
  return (
    <Layout>
      <Head title="Contact"/>
      <h1>Contact</h1>
      <p>
        The best way to reach me via <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Google</a>
      </p>
    </Layout>
  )
}

export default  ContacyPage
