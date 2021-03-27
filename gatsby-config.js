let ENG_FROM_START = 'Engineer From Start';

module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    author: `Karandeep Singh`,
    defaultTitle: ENG_FROM_START,
    titles: [
      {
        id: 'default',
        title: 'Engineer From Start'
      },
      {
        id: '423423sldkfjsdlf',
        title: 'Karandeep Singh'
      }
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    /*{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },*/
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
  ],
}
