module.exports = {
  siteMetadata: {
    title: 'Space travel',
    description:
      'Space tourism is a project that takes you beyond your dreams and expectations. Book a tour with our agency and discover the Universe!',
    author: 'martam90',
    keywords: 'planets, journey, travel, space, adventure',
    image: 'static/images/crew/image-douglas-hurley.png',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'static/images/favicon-32x32.png',
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://space-travel-project.vercel.app/',
      },
    },
  ],
};
