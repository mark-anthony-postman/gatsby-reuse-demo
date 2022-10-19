module.exports = {
  siteMetadata: {
    title: `Content Reuse Demo`,
    siteUrl: `https://www.postman.com`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        mdxOptions: {
          remarkPlugins: [
            require(`remark-gfm`),
          ],
        },
      },
    },
  ],
}
