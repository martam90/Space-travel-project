import React from 'react';
import { Link } from 'gatsby';
import Page from '../components/Page';

const NotFoundPage = () => {
  return (
    <main className="p404">
      <Page title="Page not found">
        <div className="p404__container">
        <h1>Page not found</h1>
        <p className="p404__content">
          We are sorry, but the page you are looking for, does not exist.
          <br />
          You could return to <Link className="p404__link" to="/">homepage</Link> and start over.
        </p>
        </div>
      </Page>
    </main>
  )
};

export default NotFoundPage;
