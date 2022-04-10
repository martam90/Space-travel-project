import React, { useState, useEffect } from 'react';
import Footer from '../Footer/index.js';
import Header from '../Header/index.js';
import { Planets } from 'react-preloaders';
import Seo from '../Seo/index.js';

const Page = ({ children, title }) => {
  const isSSR = typeof window === 'undefined';

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Seo title={title} />
      <Header />
      {children}
      <Footer />
      {!isSSR && (
        <Planets
          customLoading={loading}
          background="linear-gradient(180deg, rgba(84,84,103,1) 6%, rgba(9,10,10,1) 100%)"
          color={'#ffffff'}
        />
      )}
    </>
  );
};

export default Page;
