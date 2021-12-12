import * as React from "react";
import { Helmet } from 'react-helmet';
import Footer from "../components/Footer";
import Header from '../components/Header';
import Main from '../components/Main';
import favicon from '../images/shared/favicon-32x32.png';

const IndexPage = () => {
  return (
    <>
    <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
        <link rel="icon" type="image/png" sizes="32x32" href={favicon}></link>
        <title>Space tourism website | Frontend Mentor</title>
        <meta
          name="description"
          content="Space tourism is a project that takes you beyond your dreams and expectations. Book a tour with our agency and discover the Universe!"
        />
      </Helmet>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default IndexPage;
