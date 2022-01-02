import React from 'react';
import Footer from '../Footer/index.js';
import Header from '../Header/index.js';
import { Helmet } from 'react-helmet';
import favicon from '../../../public/images/shared/favicon-32x32.png';


const Page = ({children, title}) => {

  return (
    <>
    <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
        <link rel="icon" type="image/png" sizes="32x32" href={favicon}></link>
        <title>{title}</title>
        <meta
          name="description"
          content="Space tourism is a project that takes you beyond your dreams and expectations. Book a tour with our agency and discover the Universe!"
        />
      </Helmet>
      <Header />
      { children }
      <Footer />
    </>
  );
};

export default Page;