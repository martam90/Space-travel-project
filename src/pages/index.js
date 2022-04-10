import React from 'react';
import Page from '../components/Page';
import Main from '../components/Main';

const IndexPage = () => {
  return (
    <div className="homepage">
      <Page title="Homepage">
        <Main />
      </Page>
    </div>
  );
};

export default IndexPage;
