module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.space-travel.vercel.app',
    title: 'Space travel',
    description:
      'Space tourism is a project that takes you beyond your dreams and expectations. Book a tour with our agency and discover the Universe!',
    author: 'martam90',
    keywords: 'planets, journey, travel, space, adventure',
    image: 'static/images/image-moon.png',
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
  ],
};
