import React from 'react';
import MainCrew from '../components/MainCrew';
import Page from '../components/Page';

const Crew = () => {
  return (
    <>
      <div className="crew">
        <Page title="Space tourism website - crew">
          <MainCrew />
        </Page>
      </div>
    </>
  );
};

export default Crew;
