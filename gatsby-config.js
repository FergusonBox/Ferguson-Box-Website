module.exports = {
  siteMetadata: {
    title: 'Ferguson Box',
    description: 'Packaging Done Right',
    keywords:
      'packaging, boxes, ferguson box, ferguson, box, corrugated, cardboard, packaging supplies',
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto\:300`],
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'staticImages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/uploads`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          placeholder: 'blurred',
        },
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'staticImages',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 760,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
