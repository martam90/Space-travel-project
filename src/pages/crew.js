import React from 'react';
import MainCrew from '../components/MainCrew';
import Page from '../components/Page';

const Crew = () => {
  return (
    <>
      <div className="crew">
        <Page title="Crew">
          <MainCrew />
        </Page>
      </div>
    </>
  );
};

export default Crew;
