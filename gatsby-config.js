const { Colors } = require("./data")

module.exports = {
  siteMetadata: {
    title: `Hounter-BR`,
    description: `Calcule o número de horas trabalhadas, bem como salário e valor/hora, como programador PJ`,
    author: `@italomlp`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hounter-br`,
        short_name: `Hounter`,
        start_url: `/`,
        background_color: Colors.lighter,
        theme_color: Colors.darker,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `titillium web\:200,200i,400,400i,700,700i,900`, // you can also specify font weights and styles
          `righteous`,
        ],
        display: "swap",
      },
    },
  ],
}
