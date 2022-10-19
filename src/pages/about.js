// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <p>This site was created by following the Gatsby tutorial.</p>
      <p>Go to the Blog page for examples of content reuse.</p>
  </Layout>
  )
}

// Add a page title
export const Head = () => <Seo title="About Me" />

// Step 3: Export your component
export default AboutPage