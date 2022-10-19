// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>This site demonstrates content reuse in Gatsby with MDX.</p>
      <p>Go to the Blog page for examples of content reuse.</p>
      <StaticImage
        alt="Postman on a journey"
        src="../images/spectral_rules_hero.jpg"
      />
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default IndexPage