module.exports = {
  pathPrefix: "/hochzeit-homepage",
  //pathPrefix: `/mygatsby`,
  siteMetadata: {
    title: 'Bianca und Elias Bauer, 12.12.2020',
    author: 'vasrush',
    description: 'A Gatsby.js V2 Starter based on Landed by HTML5 UP',
    menuLinks: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'Galerie',
        link: '#',
        items: [
          {
            name: 'Standesamt',
            link: '/left-sidebar',
          },
          {
            name: 'Hochzeit',
            link: '/right-sidebar',
          },
        ],
      },
      {
        name: 'Anmeldung',
        link: '/no-sidebar',
      },
      {
        name: 'Locations',
        link: '/locations',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images/`,
        name: 'images',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
    'gatsby-plugin-offline',
  ],
}
