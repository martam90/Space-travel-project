import React from 'react';
import Footer from '../Footer/index.js';
import Header from '../Header/index.js';


const Page = ({children}) => {
  return (
    <>
      <Header />
      { children }
      <Footer />
    </>
  );
};

export default Page;