import React, { useState } from 'react';
import pagesData from '../../../assets/pagesData';

const MainDestination = () => {
  const [currentTab, setCurrentTab] = useState(0);

  let currentDestination = pagesData.destinations[currentTab];

  return (
    <main className="main__destination">
      <div className="main__content--top">
        <div className="main__title">
          <span className="main__title--number">01</span>
          <span className="main__title--name">Pick your destination</span>
        </div>

        <picture>
          <source srcSet={currentDestination.images.webp} type="image/webp" />
          <source srcSet={currentDestination.images.png} type="image/png" />
          <img
            className="main__content-img"
            src={currentDestination.images.png}
            alt={currentDestination.name}
          />
        </picture>
      </div>

      <div className="main__content--bottom">
        <div className="main__nav" aria-label="tab navigation">
          {pagesData.destinations.map((destination, index) => (
            <button
              className={
                currentTab === index
                  ? 'main__nav--btn active'
                  : 'main__nav--btn'
              }
              onClick={() => setCurrentTab(index)}
            >
              {destination.name}
            </button>
          ))}
        </div>
        <h1 className="main__content--bottom-heading">
          {currentDestination.name}
        </h1>
        <p className="main__content--bottom-description">
          {currentDestination.description}
        </p>

        <div className="main__content--bottom-info">
          <div className="subheading-wrapper">
            <p className="subheading subheading--blue">Avg. distance</p>
            <span className="subheading subheading--white">
              {currentDestination.distance}
            </span>
          </div>

          <div className="subheading-wrapper">
            <p className="subheading subheading--blue">Est. travel time</p>
            <span className="subheading subheading--white">
              {currentDestination.travel}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainDestination;
